"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=rewriteThis;function rewriteThis(programPath){programPath.traverse(rewriteThisVisitor);}var rewriteThisVisitor={ThisExpression:function ThisExpression(path){path.replaceWith(path.scope.buildUndefinedNode());},Function:function Function(path){if(!path.isArrowFunctionExpression())path.skip();},ClassProperty:function ClassProperty(path){path.skip();}};