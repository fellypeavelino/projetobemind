require 'json'

class MaisUsuariosController < ApplicationController

  def index
	#@usuarios = Usuario.find([1, 3])
	#@usuarios = Usuario.find([params[:id], (params[:id] + 10)])
	#@usuarios = Usuario.all
	@usuarios = Usuario.where("id > 6")
	@usuarios = @usuarios.to_json
  end
  
  def usuario_params
    #params[:usuario]
	params.require(:usuario).permit(:id)
   end
end
