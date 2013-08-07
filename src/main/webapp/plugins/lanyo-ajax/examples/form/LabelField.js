Ext.onReady(function(){
	/*
	 *	LabelField示例 
	 */
	var form = new Ext.form.FormPanel({
		title : '员工管理',
		renderTo:'example',
		width : 300, height : 300,
		labelWidth:60,
		frame:true,
		labelAlign:'right',
		waitMsgTarget: true,
		defaultType:'labelfield',
		defaults:{anchor:'-20'},
		bodyStyle : 'padding:5px;',
		items:[
			{fieldLabel:'姓名',name:'name',allowBlank:false},
			{
				fieldLabel:'性别',name:'sex',
				renderer:function(v){
					switch(v){
						case 0 : 
						  return '女' ;
						case 1 : 
						  return '男' ;
						default :
						  return '未知';
					}
				}
			},
			{name:'age',fieldLabel:'年龄'},
			{
				fieldLabel:'部门',
				name:'dept',
				renderer:function(v){
					return Ext.getObjVal(v,'name')
				}
			},
			{
				fieldLabel:'当前时间',
				name:'nowDate',
				renderer:Ext.util.Format.dateRenderer('Y-m-d H:m:s')
			},
			{fieldLabel:'备注',name : 'remark'}
		],
		buttons:[
			{
				itemId : 'reload_btn' ,
				text : '重新加载数据' ,
				disabled : true,
				handler:function(){
					var btn = form.getFooterToolbar().get('reload_btn');
					btn.disable();
					form.getForm().load({
						waitMsg:'loadding...',url : 'data/labelField-data.json',
						success:function(){
							btn.enable();
						}
					});
				}
			}
		],
		listeners:{
			render : {
				delay : 300 ,
				fn : function(){
					var btn = form.getFooterToolbar().get('reload_btn');
					form.getForm().load({
							waitMsg:'loadding...',
							url : 'data/labelField-data.json',
							success:function(){
								btn.enable();
							}
						})
				}
			}
		}
	});
},this);
