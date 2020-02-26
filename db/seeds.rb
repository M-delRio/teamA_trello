# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Board.destroy_all
List.destroy_all
Card.destroy_all

board1 = Board.create title: "First board"

list1 = List.create title: "first list", board: board1
list2 = List.create title: "second list", board: board1

card1 = Card.create title: "first card", list: list1
card2 = Card.create title: "second card", list: list1
card3 = Card.create title: "third card", list: list2
card4 = Card.create title: "fourth card", list: list2
card5 = Card.create title: "fifth card", list: list2