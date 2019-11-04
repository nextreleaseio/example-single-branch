print('hello world')

for item in [1,2,3,4,5,6,'foo','bar','baz']:
    print('eh')


class MyCustomClass(object):
  arg = None
  def __init__(arg):
      self.arg = arg

  def my_method(self):
      return self.arg + 1

  def more_python(self):
      return 1 + 1 + 2


  def generator_example(n):
      run = 0
      while run < 1000:
          run = run + 1
          yield run

  @classmethod
  def get_my_demos_done():
      return False
