require 'json'

class MaisUsuariosController < ApplicationController

  def index
	#@usuarios = Usuario.find([2, 3])
	#@usuarios = Usuario.find([params[:id], (params[:id] + 10)])
	#@usuarios = Usuario.all
	#@usuarios = Usuario.where("id > ?",params[:id])
	@parametro = params[:id]
	@parametro2 = @parametro.to_i + 5
	@usuarios = Usuario.where("id > ? AND id < ? ",@parametro, @parametro2)
	
	@usuarios = @usuarios.to_json
  end
  
  def usuario_params
    #params[:usuario]
	params.require(:usuario).permit(:id)
   end
end
