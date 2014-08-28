class FeedsController < ApplicationController
  before_filter :require_user!

  def index
    @feeds = Feed.includes(:entries)
    respond_to do |format|
      format.html { render :index }
      format.json { sleep(2); render :json => @feeds.to_json(include: :entries) }
    end
  end

  def create
    feed = Feed.find_or_create_by_url(params[:feed][:url])

    if feed
      render :json => feed.to_json(include: :latest_entries)
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end

  private
  def feed_params
    params.require(:feed).permit(:title, :url)
  end
end

