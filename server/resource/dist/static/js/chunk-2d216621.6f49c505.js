(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216621"],{c1da:function(e,o,t){"use strict";t.r(o),t.d(o,"createWorkflowProcess",(function(){return n})),t.d(o,"deleteWorkflowProcess",(function(){return u})),t.d(o,"deleteWorkflowProcessByIds",(function(){return s})),t.d(o,"updateWorkflowProcess",(function(){return f})),t.d(o,"findWorkflowProcess",(function(){return c})),t.d(o,"getWorkflowProcessList",(function(){return d})),t.d(o,"findWorkflowStep",(function(){return l})),t.d(o,"startWorkflow",(function(){return w})),t.d(o,"completeWorkflowMove",(function(){return a})),t.d(o,"getMyStated",(function(){return i})),t.d(o,"getMyNeed",(function(){return k})),t.d(o,"getWorkflowMoveByID",(function(){return p}));var r=t("b775"),n=function(e){return Object(r["default"])({url:"/workflowProcess/createWorkflowProcess",method:"post",data:e})},u=function(e){return Object(r["default"])({url:"/workflowProcess/deleteWorkflowProcess",method:"delete",data:e})},s=function(e){return Object(r["default"])({url:"/workflowProcess/deleteWorkflowProcessByIds",method:"delete",data:e})},f=function(e){return Object(r["default"])({url:"/workflowProcess/updateWorkflowProcess",method:"put",data:e})},c=function(e){return Object(r["default"])({url:"/workflowProcess/findWorkflowProcess",method:"get",params:e})},d=function(e){return Object(r["default"])({url:"/workflowProcess/getWorkflowProcessList",method:"get",params:e})},l=function(e){return Object(r["default"])({url:"/workflowProcess/findWorkflowStep",method:"get",params:e})},w=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{businessType:e.wf.businessType};return Object(r["default"])({url:"/workflowProcess/startWorkflow",method:"post",data:e,params:o})},a=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{businessType:e.wf.businessType};return Object(r["default"])({url:"/workflowProcess/completeWorkflowMove",method:"post",data:e,params:o})},i=function(){return Object(r["default"])({url:"/workflowProcess/getMyStated",method:"get"})},k=function(){return Object(r["default"])({url:"/workflowProcess/getMyNeed",method:"get"})},p=function(e){return Object(r["default"])({url:"/workflowProcess/getWorkflowMoveByID",method:"get",params:e})}}}]);