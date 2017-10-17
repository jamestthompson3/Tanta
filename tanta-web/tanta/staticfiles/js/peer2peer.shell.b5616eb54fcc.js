p2p.shell = (function () {
	// Module scope vars
	var
		configMap = {
			anchor_schema_map: {
				tab: {borrow: true, lend: true}
			},
			main_html: String()
			+'<h2 class="center">Lending Summary</h2>'
			+'<div id="next_payments" style="position: absolute; right: 120px; top: 30px;">'
			+'<h3 class="mb4">Next Payment</h3>'
			+'</div>'
			+'<div style="position: absolute; left: 150px;">'
			+'<ul class="list-reset mt0">'
			+'<li class="inline-block mr1"><h4 class="view borrow center border-top border-right border-left rounded-top px1" style="background: #fafafa;" id="view_type">Borrow</h3></li>'
			+'<li class="inline-block mr1"><h4 class="view lend center border-top border-right border-left rounded-top px1" style="background: #fafafa;" id="view_type">Lend</h3></li>'
			+'</div>'
			+'<div class="center container px2 py2 mt4 white bg-gray bg-cover bg-center rounded border" id="summary" style="background: #fafafa; border-color: gray; border-radius: 2 2 2 2; width: 80vw;">'
			+'<h3 class="group mb0 pb0"></h3>'
			+'<ul class="list-reset flex justify-center mt0">'
			+'<li><h4 class="mx2">Loan ID</h3></li>'
			+'<li><h4 class="mx2">Loan Amount</h3></li>'
			+'<li><h4 class="mx2">Interest Rate</h3></li>'
			+'<li><h4 class="mx2">Time Left</h3></li>'
			+'</ul>'
			+'</div>'
		},
		stateMap = {
			$container: null,
			anchor_map: {},
			is_borrow_active: true,
		},
		jqueryMap = {},
		setJqueryMap, copyAnchorMap, changeAnchorPart, onClickTab,
		toggleTab, onHashChange, initModule;
	// Utility Methods
	// Returns copy of stored anchor map
	copyAnchorMap = function (){
		return $.extend(true, {}, stateMap.anchor_map);
	};
	setJqueryMap = function () {
		var $container = stateMap.$container;
		jqueryMap = {
			$container: $container,
			$tab: $container.find('.view')
		};
	};
	// DOM Methods
	// Change URI anchor component
	toggleTab = function (selected, view_type) {
	}
	changeAnchorPart = function (arg_map) {
		var
			anchor_map_revise = copyAnchorMap(),
			bool_return = true,
			key_name, key_name_dep;
		// Merge changes into anchor map
		KEYVAL:
		for (key_name in arg_map) {
			if (arg_map.hasOwnProperty(key_name)) {
				// skip dependant keys
				if (key_name.indexOf('_') === 0) {continue KEYVAL;}
				// update independant key value
				anchor_map_revise[key_name] = arg_map[key_name];
				// update matching dependant key
				key_name_dep = '_' + key_name;
				if (arg_map[key_name_dep]) {
					anchor_map_revise[key_name_dep] = arg_map[key_name_dep];
				}
				else {
					delete anchor_map_revise[key_name_dep];
					delete anchor_map_revise['_s' + key_name_dep];
				}
			}
		}
		// End merge changes
		// Attempt to update URI, revert if unsucessful
		try {
			$.uriAnchor.setAnchor(anchor_map_revise);
		}
		catch(error) {
			$.uriAnchor.setAnchor(stateMap.anchor_map,null,true);
			bool_return = false;
		}
		return bool_return;
	};
	// Event Handlers
	onClickTab = function (event) {
		// Reset CSS
		jqueryMap.$tab.css({
			"background-color": "#fafafa",
			"box-shadow": "0px 0px 0px #ffffff",
			"width": "73px",
			"z-index": "-1"
		});
		if (event.target.innerHTML == 'Borrow') {
			stateMap.is_borrow_active = true;
		}
		else {
			stateMap.is_borrow_active = false;
		}
		// Highlight selected tab
		Object.assign(event.target.style,
			{background: "#f48668","box-shadow": "5px 0px 10px #888888", 
			width: "100px","z-index": 1});
		
		changeAnchorPart({
			tab: (stateMap.is_borrow_active ? 'borrow' : 'lend')
		});
		return false;
	};
	onHashChange = function (event) {
		var
			anchor_map_previous = copyAnchorMap(),
			anchor_map_proposed,
			_s_tab_previous, _s_tab_proposed,
			s_tab_proposed;
			// try and parse anchor
		try { anchor_map_proposed = $.uriAnchor.makeAnchorMap(); }
		catch (error) {
			$.uriAnchor.setAnchor(anchor_map_previous, null, true);
			return false;
		}
		stateMap.anchor_map = anchor_map_proposed;
		// convienence variables
		_s_tab_previous = anchor_map_previous._s_tab;
		_s_tab_proposed = anchor_map_proposed._s_tab;
		// Ajust content according to status of tab
		if ( ! anchor_map_previous
			|| _s_tab_previous !== _s_tab_proposed) 
			{
			s_tab_proposed = anchor_map_proposed.tab;
			switch(s_tab_proposed) {
				case 'borrow':
				var changeBorrow = jqueryMap.$container.find('.view.borrow');
				jqueryMap.$tab.css({
					"background-color": "#fafafa",
					"box-shadow": "0px 0px 0px #ffffff",
					"width": "73px",
					"z-index": "-1"});
			changeBorrow.css({background: "#f48668","box-shadow": "5px 0px 10px #888888", 
			width: "100px","z-index": 1});
				break;
				case 'lend':
					var changeLend = jqueryMap.$container.find('.view.lend');
				jqueryMap.$tab.css({
					"background-color": "#fafafa",
					"box-shadow": "0px 0px 0px #ffffff",
					"width": "73px",
					"z-index": "-1"});
			changeLend.css({background: "#f48668","box-shadow": "5px 0px 10px #888888", 
			width: "100px","z-index": 1});
			}
		}
		return false;
	};
	// Begin public methods
	initModule = function ($container) {
		stateMap.$container = $container;
		$container.html (configMap.main_html);
		setJqueryMap();
		
		stateMap.is_borrow_active = true;
		
		jqueryMap.$tab
			.attr('title','Working')
			.click(onClickTab);
		
		$.uriAnchor.configModule({
			schema_map: configMap.anchor_schema_map
		});
		$(window)
			.bind('hashchange', onHashChange)
			.trigger('hashchange');
	};
	return { initModule: initModule};
	}());