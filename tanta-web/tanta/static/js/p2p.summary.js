// Create namespace
p2p.summary = (function () {
	var
		configMap = {
			main_html: String()
				+'<ul class="list-reset">'
				+'</ul>',
			settable_map: {}
		},
		stateMap = {$container: null},
		jqueryMap = {},

		setJqueryMap, configModule, initModule, getBorrow, infoModalShow;
// Utility functions
	getBorrow = function ($container,tab_type) {
		$.ajax({
			url:"borrow_lend/ajax",
			datatype: "json",
			data: {'tab_type':tab_type},
			success: function(data){
				var data = data
				console.log(data[0].fields)
				for (var i = 0; i < data.length; i++)
					{
					var loan_id = '<li><h4><a class="loan_id">'+data[i].pk+'</a></h4></li>'
					if (data[i].fields.lender != undefined) {var lender_borrower = '<li><h4>'+data[i].fields.lender+'</h4></li>'}

					else {var lender_borrower = '<li><h4>'+data[i].fields.borrower+'</h4></li>'}
					var loan_amount = '<li><h4>'+data[i].fields.initial_amount+'</h4></li>'
					var start_date = '<li><h4>'+data[i].fields.start_date+'</h4></li>'
					$container.find(".item-header1").append(loan_id);
					$container.find(".item-header2").append(lender_borrower);
					$container.find(".item-header3").append(loan_amount);
					$container.find(".item-header4").append(start_date);
					$(".loan_id").avgrund({
						showClose: true,
						showCloseText:'X',
						template: '<table><tr><th>Lender</th><th>Interest Rate</th><th>Amount Remaining</th><th>Start Date</th>'
			});

			}
		}
	});
}

// DOM Methods
	setJqueryMap = function () {
		var $container = stateMap.$container;
		jqueryMap = {
			$container: $container,
			$loan_id: $container.find('.loan_id')
		};
	};
	
// Public Config Methods
	configModule = function (input_map) {
		p2p.util.setConfigMap({
		input_map: input_map,
		settable_map: configMap.settable_map,
		config_map: configMap
	});
	return true;
	};
	initModule = function ($container) {
		$container.html(configMap.main_html);
		stateMap.$container = $container;
		setJqueryMap();
		return true;
	};
	return {
		configModule: configModule,
		initModule: initModule,
		getBorrow: getBorrow,
		infoModalShow: infoModalShow
	};
}());
