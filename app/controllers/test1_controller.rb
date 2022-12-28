class Test1Controller < ApplicationController
  def index
    @users = User.all
  end
end
