

class Greeter
  def initialize(@name : String )
    @my_thing = @name
  end

  def salute
    puts "Hello #{@name}!"
  end
  
  def high_five
    puts "This looks a lot like ruby"
end

g = Greeter.new("world")
g.salute


