class Usuario < ActiveRecord::Base

	validates :nome, presence: true
  
	validates :email, presence: true, format: {with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, on: :create}, uniqueness: {case_sensitive: false}
	
	def nomeSexo
		if read_attribute(:sexo) == 'm' then
			return 'masculino'
		end
		if read_attribute(:sexo) == 'f' then
			return 'feminino'
		end				
	end
	
	def formataData
		@nascimento = read_attribute(:nascimento)
		write_attribute(:nascimento, @nascimento.to_s.split('-').reverse.join('/'))
		#return d.to_s.split('-').reverse.join('/')
	end
	
end
