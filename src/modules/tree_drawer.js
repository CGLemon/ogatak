"use strict";

function new_tree_drawer(canvas, boardcanvas) {
	let drawer = Object.create(tree_drawer_prototype);
	drawer.canvas = canvas;
	drawer.boardcanvas = boardcanvas;
	return drawer;
}

let tree_drawer_prototype = {

	draw_tree: function(central_node) {

		this.canvas.width = Math.max(64, window.innerWidth - this.canvas.getBoundingClientRect().left);
		this.canvas.height = this.boardcanvas.height;

		let root = central_node.get_root();

		reserver(root, []);									// Makes all nodes have .graphx

		let provisional_central_node_gx = this.canvas.width / 2;
		let provisional_central_node_gy = this.canvas.height / 2;
		let provisional_root_gx = provisional_central_node_gx + ((root.graphx - central_node.graphx) * 24);
		let provisional_root_gy = provisional_central_node_gy + ((root.depth - central_node.depth) * 24);

		let final_adjust_x = 0;
		let final_adjust_y = 0;
		if (provisional_root_gx > 24) final_adjust_x = 24 - provisional_root_gx;
		if (provisional_root_gy > 24) final_adjust_y = 24 - provisional_root_gy;

		this.__draw(										// Makes all nodes have .gx and .gy
			root,
			central_node,
			provisional_central_node_gx + final_adjust_x,
			provisional_central_node_gy + final_adjust_y
		);

		let ctx = this.canvas.getContext("2d");
		ctx.fillStyle = "#ffffffff";
		ctx.beginPath();
		ctx.arc(central_node.gx, central_node.gy, 7, 0, 2 * Math.PI);
		ctx.fill();

	},

	__draw: function(local_root, central_node, central_node_gx, central_node_gy) {

		let ctx = this.canvas.getContext("2d");
		ctx.fillStyle = "#4ba28bff";
		ctx.strokeStyle = "#4ba28bff";
		ctx.lineWidth = 1;

		let node = local_root;

		while (true) {

			node.gx = central_node_gx + ((node.graphx - central_node.graphx) * 24);
			node.gy = central_node_gy + ((node.depth - central_node.depth) * 24);

			let gsib = node.greater_sibling();
			let need_to_draw = false;

			// There are two reasons to draw the node:
			//		- node itself is onscreen;
			//		- node's greater sibling is onscreen, or offscreen left while node is offscreen right, so draw for the sake of the line;

			if (node.gx > 0 && node.gy > 0 && node.gy < this.canvas.height) {
				if (node.gx < this.canvas.width) {
					need_to_draw = true;
				} else if (gsib && gsib.gx < this.canvas.width) {
					need_to_draw = true;
				}
			}

			if (need_to_draw) {

				ctx.beginPath();
				ctx.arc(node.gx, node.gy, 6, 0, 2 * Math.PI);

				if (node.props.B) {
					ctx.stroke();
				} else {
					ctx.fill();
				}

				if (node.parent) {
					if (gsib) {
						ctx.beginPath();
						ctx.moveTo(node.gx - 6, node.gy);
						ctx.lineTo(gsib.gx + 6, gsib.gy);
						ctx.stroke();
					} else {
						ctx.beginPath();
						ctx.moveTo(node.gx, node.gy - 6);
						ctx.lineTo(node.parent.gx, node.parent.gy + 6);
						ctx.stroke();
					}
				}
			}

			if (node.children.length > 1) {
				for (let child of node.children) {
					this.__draw(child, central_node, central_node_gx, central_node_gy);
				}
				break;
			} else if (node.children.length === 1) {
				node = node.children[0];
				continue;
			} else {
				break;
			}
		}
	},
};

function reserver(local_root, reservations) {

	// Traverse the main line and find the x location for the whole line (the rightmost x necessary)

	let main_line_x = 0;
	let node = local_root;

	while (true) {
		let y = node.depth;
		if (reservations[y] !== undefined && reservations[y] >= main_line_x) {
			main_line_x = reservations[y] + 1;
		}
		if (node.children.length === 0) {
			break;
		}
		node = node.children[0];
	}

	// Set all the nodes in the main line to that x...
	// Make a list of subtrees that need handling...

	node = local_root;
	let subtree_roots = [];

	while (true) {
		reservations[node.depth] = main_line_x;
		node.graphx = main_line_x;
		if (node.children.length === 0) {
			break;
		} else if (node.children.length >= 2) {
			for (let n = node.children.length - 1; n > 0; n--) {
				subtree_roots.push(node.children[n]);
			}
		}

		node = node.children[0];
	}

	subtree_roots.reverse();

	// Handle the subtrees...

	for (let child of subtree_roots) {
		reserver(child, reservations);
	}
}



module.exports = new_tree_drawer;
