class Usuario < ActiveRecord::Base

	validates :nome, presence: true
  
	validates :email, presence: true, format: {with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, on: :create}, uniqueness: {case_sensitive: false}
	
	def nomeSexo(s)
		if s == 'm' then
			return 'masculino'
		end
		if s == 'f' then
			return 'feminino'
		end				
	end
	
	def formataData(d)
		return d.to_s.split('-').reverse.join('/')
	end
	
end
