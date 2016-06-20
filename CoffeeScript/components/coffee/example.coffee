##generic example
#c = 4
#name = 'Ray'
#
#add = (a, b) ->
#  d = 3
#  a + b
#
#do ->
#  console.log "hello"
#
## example JSON`
#data =
#  name: "Brett Morin"
#  LineNumbers: [1,2,3,4]
#  links:
#    google: "http://www.google.com",
#    yahoo: "http://www.yahoo.com"
#
####
#  block comments
####
#
##script example
#`function add(a,b) {
#    return a+b;
#  }`

## Examples of splicing and replacing
#a = [ 10..1]
#
#names = [
#  'Barot Bellingham'
#  'Constance Smith'
#  'Hassum Harrod'
#  'Hillary Goldwynn'
#  'Xhou Ta'
#]
#
#names[1..2] = ['Bob', 'Jimmy']

##examples of variable with if logic
#dance = ->
#  alert('mambo')
#
#happy = true
#
#dance() if happy is true

##Examples with array
#names = [
#  'Barot Bellingham'
#  'Constance Smith'
#  'Hassum Harrod'
#  'Hillary Goldwynn'
#  'Xhou Ta'
#]
#
#for thing, i in names
#  console.log "#{i} #{thing}"

##examples with object parsing
#info =
#  name: 'Brett'
#  title: 'Developer'
#  tuts: 'http://www.google.com'
#
#for key, value of info
#  console.log "#{key}: #{value}"

##examples of functions
##basic
#myFunction = -> console.log('Hey there')
#
#myFunction()

##with parameters
#add = (a,b) ->
#  a + b

##splats
#info = [
#  'Brett Morin'
#  'http://www.google.com'
#]
#
#fillOut = (name, links...) ->
#  $('#content').append "#{name}<br>"
#  for item in links
#    $('#content').append "#{item}"
#
#fillOut info...

##swith statement
#append = (item) ->
#  $('#content').append "#{item}"
#
#author = 'Joe'
#
#switch author
#  when 'Brett' then append 'Javascript'
#  when 'John' then append 'Web'
#  else append 'Training'

#command to use this
do fill = (item = '') ->
  $('#content').append "#{item}"
  console.log @fill

fill