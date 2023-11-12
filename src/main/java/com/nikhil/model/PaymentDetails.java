package com.nikhil.model;

public class PaymentDetails {
	
	private String paymentMethod;
	private String status;
	private String paymentId;
	
	private String razorPayPaymentLinkId;
	private String razorPayPaymentLinkReferenceId;
	private String razorpayPaymentLinkStatus;
	private String razorpayPaymentId;
	
	public PaymentDetails()
	{
		
	}
	
	
	
	public PaymentDetails(String paymentMethod, String status, String paymentId, String razorPayPaymentLinkId,
			String razorPayPaymentLinkReferenceId, String razorpayPaymentLinkStatus, String razorpayPaymentId) {
		super();
		this.paymentMethod = paymentMethod;
		this.status = status;
		this.paymentId = paymentId;
		this.razorPayPaymentLinkId = razorPayPaymentLinkId;
		this.razorPayPaymentLinkReferenceId = razorPayPaymentLinkReferenceId;
		this.razorpayPaymentLinkStatus = razorpayPaymentLinkStatus;
		this.razorpayPaymentId = razorpayPaymentId;
	}



	public String getPaymentMethod() {
		return paymentMethod;
	}
	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getPaymentId() {
		return paymentId;
	}
	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}
	public String getRazorPayPaymentLinkId() {
		return razorPayPaymentLinkId;
	}
	public void setRazorPayPaymentLinkId(String razorPayPaymentLinkId) {
		this.razorPayPaymentLinkId = razorPayPaymentLinkId;
	}
	public String getRazorPayPaymentLinkReferenceId() {
		return razorPayPaymentLinkReferenceId;
	}
	public void setRazorPayPaymentLinkReferenceId(String razorPayPaymentLinkReferenceId) {
		this.razorPayPaymentLinkReferenceId = razorPayPaymentLinkReferenceId;
	}
	public String getRazorpayPaymentLinkStatus() {
		return razorpayPaymentLinkStatus;
	}
	public void setRazorpayPaymentLinkStatus(String razorpayPaymentLinkStatus) {
		this.razorpayPaymentLinkStatus = razorpayPaymentLinkStatus;
	}
	public String getRazorpayPaymentId() {
		return razorpayPaymentId;
	}
	public void setRazorpayPaymentId(String razorpayPaymentId) {
		this.razorpayPaymentId = razorpayPaymentId;
	}

}
