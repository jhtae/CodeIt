class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.references :user, foreign_key: true, null: false
      t.references :notebook, foreign_key: true
      t.string :description, null: false
      t.text  :note

      t.timestamps
    end
    add_index :notes, :description
    add_index :notes, :note
  end
end
