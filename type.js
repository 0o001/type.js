module.exports = 
	Object.prototype.type = 
		function(type) {

            if(type) {

                if(typeof type === 'string' || type instanceof String) {

                    return this.constructor.name === type;

                } else {

                    return this.constructor === type;

                }
            } else {

                return this.constructor;

            }
        }
