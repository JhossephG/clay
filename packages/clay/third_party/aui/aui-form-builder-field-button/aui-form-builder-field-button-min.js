YUI.add("aui-form-builder-field-button",function(e,t){var n=e.Lang,r=e.cached(function(e){return e.substring(0,1).toUpperCase()+e.substring(1)}),i=e.getClassName,s=i("btn"),o=i("btn","default"),u=i("form-builder-field"),a=i("form-builder-field","node"),f='<button id="{id}" class="'+[a,s,o].join(" ")+'" type="{type}">{value}</button>',l=["submit","reset","button"],c=e.Component.create({NAME:"form-builder-button-field",ATTRS:{acceptChildren:{readOnly:!0,value:!1},buttonType:{validator:function(t){return e.Array(l).indexOf(t.toLowerCase())>-1},value:"submit"},predefinedValue:{value:r("submit")},showLabel:{value:!1},template:{valueFn:function(){return f}}},UI_ATTRS:e.FormBuilderField.UI_ATTRS.concat(["buttonType"]),CSS_PREFIX:u,EXTENDS:e.FormBuilderField,prototype:{getHTML:function(){var e=this;return n.sub(e.get("template"),{id:e.get("id"),label:e.get("label"),name:e.get("name"),type:e.get("buttonType"),value:e.get("predefinedValue")})},getPropertyModel:function(){var t=this,n=t.getStrings(),r=e.FormBuilderButtonField.superclass.getPropertyModel.apply(t,arguments);return r.push({attributeName:"buttonType",editor:new e.RadioCellEditor({options:{button:n.button,reset:n.reset,submit:n.submit}}),name:n.buttonType}),r},_uiSetButtonType:function(e){var t=this,n=t.get("templateNode");n.setAttribute("type",e)},_uiSetPredefinedValue:function(e){var t=this,n=t.get("templateNode");n.setContent(e)}}});e.FormBuilderButtonField=c,e.FormBuilder.types.button=e.FormBuilderButtonField},"2.5.0",{requires:["aui-form-builder-field-base"]});
