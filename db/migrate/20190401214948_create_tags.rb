class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.references :category, foreign_key: true
      t.string :name, null: false

      t.timestamps
    end
    add_index :tags, :name, unique: true
  end
end
