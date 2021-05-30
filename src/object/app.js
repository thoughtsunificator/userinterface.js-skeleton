namespace.ObjectName = function() {
	this.foo = null
}

namespace.ObjectName.prototype.FOO = "FOO"

namespace.ObjectName.prototype.getFoo = function() {
	return this.foo
}

namespace.ObjectName.prototype.setFoo = function(foo) {
	this.foo = foo
}