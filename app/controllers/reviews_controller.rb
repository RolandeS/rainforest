class ReviewsController < ApplicationController
  before_filter :ensure_logged_in, only: [:create, :destroy]
  before_filter :load_product

  def show
  	@review = Review.find(params[:id])
  end

  def create
  	@review = @product.reviews.build(review_params)
  	@review.user = current_user

# //////////////////////////////Review 12/////////////////////
   @review = Review.new(
      comment: params[:review][:comment],
      product_id: @product.id,
      user_id: current_user.id
    )

	if @review.save
    respond_to do |format|
      format.html do
		    redirect_to product_path(@review.product), notice: 'Review created successfully'
      end
      format.js
    end
	else
		render 'products/show'
	end
end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
  end

  private
  def review_params
    params.require(:review).permit(:comment, :product_id)
  end

  def load_product
    @product = Product.find(params[:product_id])
  end

end
