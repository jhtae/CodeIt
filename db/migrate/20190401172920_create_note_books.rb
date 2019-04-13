class CreateNoteBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :notebooks do |t|
      t.references :user, foreign_key: true, null: false
      t.string :name, null: false
      t.text :description

      t.timestamps
    end
  end
end
