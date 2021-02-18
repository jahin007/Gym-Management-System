"use strict";
var KTDatatablesDataSourceHtml = function() {

    var initTable1 = function() {
        var table = $('#kt_datatable');

        // begin first table
        table.DataTable({
            responsive: true,
            columnDefs: [{
                    targets: -1,
                    title: 'Actions',
                    orderable: false,
                    render: function(data, type, full, meta) {
                        return '\
							<div class="dropdown dropdown-inline">\
								<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" data-toggle="dropdown">\
	                                <i class="la la-cog"></i>\
	                            </a>\
							  	<div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\
									<ul class="nav nav-hoverable flex-column">\
							    		<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-edit"></i><span class="nav-text">Edit Details</span></a></li>\
							    		<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-leaf"></i><span class="nav-text">Update Status</span></a></li>\
							    		<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-print"></i><span class="nav-text">Print</span></a></li>\
									</ul>\
							  	</div>\
							</div>\
							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Edit details">\
								<i class="la la-edit"></i>\
							</a>\
							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Delete">\
								<i class="la la-trash"></i>\
							</a>\
						';
                    },
                },
                {
                    width: '75px',
                    targets: 8,
                    render: function(data, type, full, meta) {
                        var status = {
                            1: { 'title': 'Member', 'class': 'label-light-primary' },
                            2: { 'title': 'Owner', 'class': ' label-light-danger' },
                            3: { 'title': 'Trainer', 'class': ' label-light-primary' },
                            4: { 'title': 'Visitor', 'class': ' label-light-success' },
                            5: { 'title': 'VIP Member', 'class': ' label-light-info' },

                        };
                        if (typeof status[data] === 'undefined') {
                            return data;
                        }
                        return '<span class="label label-lg font-weight-bold' + status[data].class + ' label-inline">' + status[data].title + '</span>';
                    },
                },
                {
                    width: '75px',
                    targets: 9,
                    render: function(data, type, full, meta) {
                        var status = {
                            1: { 'title': 'Inactive', 'state': 'danger' },
                            2: { 'title': 'Active', 'state': 'primary' },
                        };
                        if (typeof status[data] === 'undefined') {
                            return data;
                        }
                        return '<span class="label label-' + status[data].state + ' label-dot mr-2"></span>' +
                            '<span class="font-weight-bold text-' + status[data].state + '">' + status[data].title + '</span>';
                    },
                },
            ],
        });

    };

    var initTable2 = function() {
        var table = $('#kt_datatable_2');

        // begin first table
        table.DataTable({
            responsive: true,
            columnDefs: [{
                    targets: -1,
                    title: 'Actions',
                    orderable: false,
                    render: function(data, type, full, meta) {
                        return '\
							<div class="dropdown dropdown-inline">\
								<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" data-toggle="dropdown">\
	                                <i class="la la-cog"></i>\
	                            </a>\
							  	<div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\
									<ul class="nav nav-hoverable flex-column">\
							    		<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-edit"></i><span class="nav-text">Edit Details</span></a></li>\
							    		<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-leaf"></i><span class="nav-text">Update Status</span></a></li>\
							    		<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-print"></i><span class="nav-text">Print</span></a></li>\
									</ul>\
							  	</div>\
							</div>\
							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Edit details">\
								<i class="la la-edit"></i>\
							</a>\
							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Delete">\
								<i class="la la-trash"></i>\
							</a>\
						';
                    },
                },
                // {
                //     width: '75px',
                //     targets: 6,
                //     title: 'Network Setting',
                //     orderable: false,
                //     render: function(data, type, full, meta) {
                //         return '\
                //         <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">\
                //          Network\
                //         </button>\
                //         <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\
                //         <div class="modal-dialog" role="document">\
                //             <div class="modal-content">\
                //                 <div class="modal-header">\
                //                     <h5 class="modal-title" id="exampleModalLabel">Modal Title</h5>\
                //                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
                //                         <i aria-hidden="true" class="ki ki-close"></i>\
                //                     </button>\
                //                 </div>\
                //                 <div class="modal-body">\
                //                     ...\
                //                 </div>\
                //                 <div class="modal-footer">\
                //                     <button type="button" class="btn btn-light-primary font-weight-bold" data-dismiss="modal">Close</button>\
                //                     <button type="button" class="btn btn-primary font-weight-bold">Save changes</button>\
                //                 </div>\
                //             </div>\
                //         </div>\
                //     </div>\
                // 		';
                //     },
                // },
                // {
                //     width: '75px',
                //     targets: 9,
                //     render: function(data, type, full, meta) {
                //         var status = {
                //             1: { 'title': 'Inactive', 'state': 'danger' },
                //             2: { 'title': 'Active', 'state': 'primary' },
                //         };
                //         if (typeof status[data] === 'undefined') {
                //             return data;
                //         }
                //         return '<span class="label label-' + status[data].state + ' label-dot mr-2"></span>' +
                //             '<span class="font-weight-bold text-' + status[data].state + '">' + status[data].title + '</span>';
                //     },
                // },
            ],
        });

    };

    var initTable3 = function() {
        var table = $('#kt_datatable_3');

        // begin first table
        table.DataTable({
            responsive: true,
            columnDefs: [
                // {
                //     targets: -1,
                //     title: 'Actions',
                //     orderable: false,
                //     render: function(data, type, full, meta) {
                //         return '\
				// 			<div class="dropdown dropdown-inline">\
				// 				<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" data-toggle="dropdown">\
	            //                     <i class="la la-cog"></i>\
	            //                 </a>\
				// 			  	<div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\
				// 					<ul class="nav nav-hoverable flex-column">\
				// 			    		<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-edit"></i><span class="nav-text">Edit Details</span></a></li>\
				// 			    		<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-leaf"></i><span class="nav-text">Update Status</span></a></li>\
				// 			    		<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-print"></i><span class="nav-text">Print</span></a></li>\
				// 					</ul>\
				// 			  	</div>\
				// 			</div>\
				// 			<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Edit details">\
				// 				<i class="la la-edit"></i>\
				// 			</a>\
				// 			<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Delete">\
				// 				<i class="la la-trash"></i>\
				// 			</a>\
				// 		';
                //     },
                // },
                // {
                //     width: '75px',
                //     targets: 6,
                //     title: 'Network Setting',
                //     orderable: false,
                //     render: function(data, type, full, meta) {
                //         return '\
                //         <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">\
                //          Network\
                //         </button>\
                //         <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\
                //         <div class="modal-dialog" role="document">\
                //             <div class="modal-content">\
                //                 <div class="modal-header">\
                //                     <h5 class="modal-title" id="exampleModalLabel">Modal Title</h5>\
                //                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
                //                         <i aria-hidden="true" class="ki ki-close"></i>\
                //                     </button>\
                //                 </div>\
                //                 <div class="modal-body">\
                //                     ...\
                //                 </div>\
                //                 <div class="modal-footer">\
                //                     <button type="button" class="btn btn-light-primary font-weight-bold" data-dismiss="modal">Close</button>\
                //                     <button type="button" class="btn btn-primary font-weight-bold">Save changes</button>\
                //                 </div>\
                //             </div>\
                //         </div>\
                //     </div>\
                // 		';
                //     },
                // },
                // {
                //     width: '75px',
                //     targets: 9,
                //     render: function(data, type, full, meta) {
                //         var status = {
                //             1: { 'title': 'Inactive', 'state': 'danger' },
                //             2: { 'title': 'Active', 'state': 'primary' },
                //         };
                //         if (typeof status[data] === 'undefined') {
                //             return data;
                //         }
                //         return '<span class="label label-' + status[data].state + ' label-dot mr-2"></span>' +
                //             '<span class="font-weight-bold text-' + status[data].state + '">' + status[data].title + '</span>';
                //     },
                // },
            ],
        });

    };
    return {

        //main function to initiate the module
        init: function() {
            initTable1();
            initTable2();
            initTable3();
        },

    };

}();

jQuery(document).ready(function() {
    KTDatatablesDataSourceHtml.init();
});