class ProductsController < ApplicationController
  def index
    # @products = Product.order('products.created_at DESC').page(params[:page])
  	@products = if params[:search]
      Product.where("LOWER(name) LIKE LOWER(?)", "%#{params[:search]}%").page(params[:page])
      # Product.where("name ILIKE ?", ) ??? ILIKE in postgres only
    else
      Product.all.page(params[:page])
    end

    

    respond_to do |format|
      format.html
        # if request.xhr?
        #   render @products
        # end
      format.js
    end

  end

  def show
  	@product = Product.find(params[:id])

    if current_user
      @review = @product.reviews.build
    end
  end

  def new
  	@product = Product.new
  end

  def create
  	@product = Product.new(product_params)
  	if @product.save
  		redirect_to products_url
  	else
  		render :new
  	end

  end

  def edit
  	@product = Product.find(params[:id])
  end

  def update
  	@product = Product.find(params[:id])
  	if @product.update_attributes(product_params)
  		redirect_to product_url
  	else
  		render :edit
  	end
  end

  def destroy
  	@product = Product.find(params[:id])
  	@product.destroy
  	redirect_to products_url
  end

  private
  def product_params
  	params.require(:product).permit(:name, :description, :price_in_cents)
  end
end
