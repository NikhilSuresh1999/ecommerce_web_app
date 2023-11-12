package com.nikhil.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.nikhil.Exception.ProductException;
import com.nikhil.model.Category;
import com.nikhil.model.Product;
import com.nikhil.repository.CategoryRepository;
import com.nikhil.repository.ProductRepository;
import com.nikhil.request.CreateProductRequest;


@Service
public class ProductServiceImplementation implements ProductService {
	
	private ProductRepository productRepository;
	private UserService userService;
	private CategoryRepository categoryRepository;
	
	public ProductServiceImplementation(ProductRepository productRepository,UserService userService,CategoryRepository categoryRepository)
	{
		this.productRepository=productRepository;
		this.userService=userService;
		this.categoryRepository=categoryRepository;
	}
	

	@Override
	public Product createProduct(CreateProductRequest req) {
		
		Category topLaval=categoryRepository.findByName(req.getTopLavalCategory());
		
		if(topLaval==null)
		{
			Category topLavalCategory=new Category();
			
			topLavalCategory.setName(req.getTopLavalCategory());
			topLavalCategory.setLaval(1);
			
			topLaval=categoryRepository.save(topLavalCategory);
		}
		Category secondLaval=categoryRepository.findByNameAndParent(req.getSecondLavalCategory(), topLaval.getName());
		if(secondLaval==null)
		{
			Category secondLavalCategory=new Category();
			secondLavalCategory.setName(req.getSecondLavalCategory());
			secondLavalCategory.setParentCategory(topLaval);
			secondLavalCategory.setLaval(2);
			
			secondLaval=categoryRepository.save(secondLavalCategory);
		}
		
	     Category thirdLaval=categoryRepository.findByNameAndParent(req.getThirdLavalCategory(), secondLaval.getName());
	     
	     if(thirdLaval==null)
	     {
	    	 Category thirdLavalCategory=new Category();
	    	 thirdLavalCategory.setName(req.getThirdLavalCategory());
	    	 thirdLavalCategory.setParentCategory(secondLaval);
	    	 thirdLavalCategory.setLaval(3);
	    	 
	    	 thirdLaval=categoryRepository.save(thirdLavalCategory);
	     }
	     
	     Product product=new Product();
	     product.setTitle(req.getTitle());
	     product.setColor(req.getColor());
	     product.setDescription(req.getDescription());
	     product.setDiscountPrice(req.getDiscountedPrice());
	     product.setDiscountPercent(req.getDiscountPercent());
	     product.setImageUrl(req.getImageUrl());
	     product.setBrand(req.getBrand());
	     product.setPrice(req.getPrice());
	     product.setSizes(req.getSize());
	     product.setQuantity(req.getQuantity());
	     product.setCategory(thirdLaval);
	     product.setCreatedAt(LocalDateTime.now());
	     
	     Product savedProduct=productRepository.save(product);
		
		return savedProduct;
	}

	@Override
	public String deleteProduct(Long productId) throws ProductException {
		Product product=findProductById(productId);
		product.getSizes().clear();
		
		productRepository.delete(product);
		return "Product Deleted Succesfully";
		
		
		
	}

	@Override
	public Product updateProduct(Long productId, Product req) throws ProductException {
		Product product=findProductById(productId);
		if(req.getQuantity()!=0)
		{
			product.setQuantity(req.getQuantity());
		}
		
		return productRepository.save(product);
	}

	@Override
	public Product findProductById(Long id) throws ProductException {
		
		Optional<Product> opt=productRepository.findById(id);
		
		if(opt.isPresent())
		{
			return opt.get();
		}
		throw new ProductException("Product not Found with id- "+id);
		
		
	}

	@Override
	public List<Product> findProductByCategory(String category) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Page<Product> getAllProduct(String category, List<String> colors, List<String> sizes, Integer minPrice,
			Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber, Integer PageSize) {
		
		Pageable pageble=PageRequest.of(pageNumber, PageSize);
		
		List<Product>products=productRepository.filterProducts(category, minPrice, maxPrice, minDiscount, sort);
		
		if(!colors.isEmpty())
		{
			products=products.stream().filter(p ->colors.stream().anyMatch(c -> c.equalsIgnoreCase(p.getColor())))
					.collect(Collectors.toList());
		}
		if(stock!=null)
		{
			if(stock.equals("in_stock"))
			{
				products=products.stream().filter(p -> p.getQuantity()>0).collect(Collectors.toList());
			}
			else if(stock.equalsIgnoreCase("out_of_stock"))
			{
				products=products.stream().filter(p -> p.getQuantity()<1).collect(Collectors.toList());
			}
		}
		
		int startIndex=(int)pageble.getOffset();
		int endIndex=Math.min(startIndex + pageble.getPageSize(),products.size());
		
		
		List<Product>pageContent=products.subList(startIndex, endIndex);
		
		Page<Product>filteredProducts=new PageImpl<>(pageContent,pageble,products.size());
		
		return filteredProducts;
	}

}
