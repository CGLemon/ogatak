"use strict";

const {replace_all} = require("./utils");

function new_comment_drawer(div) {
	let drawer = Object.create(comment_drawer_prototype);
	drawer.div = div;
	return drawer;
}

let comment_drawer_prototype = {

	draw: function(node) {

		let s = node.get("C");

		if (config.comment_height <= 0) {
			s = "";
		}

		s = replace_all(s,  `&`  ,  `&amp;`   );		// This needs to be first of course.
		s = replace_all(s,  `<`  ,  `&lt;`    );
		s = replace_all(s,  `>`  ,  `&gt;`    );
		s = replace_all(s,  `'`  ,  `&apos;`  );
		s = replace_all(s,  `"`  ,  `&quot;`  );

		this.div.innerHTML = s;
	}
};

module.exports = new_comment_drawer;