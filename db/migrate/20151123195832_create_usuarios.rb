class CreateUsuarios < ActiveRecord::Migration
  def change
    create_table :usuarios do |t|
	  t.column :nome, :string, :null => false
	  t.column :email, :string, :null => false
	  t.column :sexo, :string, :limit => 2
	  t.column :nascimento, :date, :null => true
    end
  end
  
  	def self.down
		drop_table :usuarios
	end
	
end
