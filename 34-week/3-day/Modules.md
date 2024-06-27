### Modules in Python

What is a Module in Python?
Modules in Python are similar to packages in Node.js and JavaScript. They are a way to split code up into multiple files. 

In other words, a module is a file containing Python code, such as functions, classes, and variables, that can be imported and used in other Python files. 


1. Built-in - already in Python 
2. Third-party - downloaded via command line 
3. Custom - what you make 

All modules are loaded using `import` statements 

Terms: 
- A **module** is simply a Python code in a separate file
- A package is the path to a directory that contains modules, which is also a special type of module. 
- A **submodule** is another file in a module's folder.

How does a Package work with a Module?
A **package** is a way of structuring Python’s module namespace by using “dotted module names”. For example, the module name `A.B` designates a submodule named `B` in a package named `A`.
(A package is a directory with with submodules)

#### Using an `__init__.py` file in a folder: 
Creating an `__init__.py` file within a package (folder containing modules/submodules) allows python to interpret the folder/directory as being a "home" to other modules. When a folder contains an `__init__.py` file, it becomes an official package with submodules, from which outside/outer package/module can `import` from. 


Syntax: 
Think of each file as its own `module`, a module can be accessed standalone (current directory) with a `.` representing the "current directory", along with the file's name -> `.file_name` 

If a module lives within a package, we can access the package as we would a directory, but instead of using a slash, we just name the `package` as-is: `directory_name` 
From this point, you can access the inner module (submodule) using `dot notation`: `directory_name.file_name`

When we combine this sort of logic, we end up with `import statements`. Using `import statements` allows us to modularize our code by splitting up important pieces of code in separate files/folders. 
## Import Statements
Here are some common examples of importing modules
- `import <module>` - most basic
- `import <package>.<subpackage>.<module>` - dot syntax
- `from <package> import <module>` - one module in a package
- `from <package> import <module>, <module>` - multiple modules or submodules in a package
- `from . import <submodule>` - special case for module's `__init__.py` to get submodules in the same folder
- `from <module> import <function>, <function>` - down to the function level
- `from <package> import <module> as <altName>` - renaming to avoid confusion or conflict