print('hello world')

for item in [1,2,3,4,5,6,'foo','bar','baz']:
    print('eh')


class MyCustomClass(object):
  arg = None
  def __init__(arg):
      self.arg = arg

  def my_method(self):
      return self.arg + 1
