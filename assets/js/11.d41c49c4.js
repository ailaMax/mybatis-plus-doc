(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{180:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("解决了繁琐的配置，让 mybatis 优雅的使用枚举属性！")]),t._v(" "),t._m(1),t._v(" "),a("blockquote",[a("p",[t._v("方式一： 使用 @EnumValue 注解枚举属性 "),a("a",{attrs:{href:"https://gitee.com/baomidou/mybatis-plus-samples/blob/master/mybatis-plus-sample-enum/src/main/java/com/baomidou/mybatisplus/samples/enums/enums/GradeEnum.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("完整示例"),a("OutboundLink")],1)])]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),a("blockquote",[a("p",[t._v("自3.0.8开始,可通过配置默认枚举处理类来省略扫描通用枚举配置. "),a("a",{attrs:{href:"https://mp.baomidou.com/config/#defaultEnumTypeHandler",target:"_blank",rel:"noopener noreferrer"}},[t._v("默认枚举配置"),a("OutboundLink")],1)])]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("示例工程：")]),t._v(" "),a("p",[t._v("👉 "),a("a",{attrs:{href:"https://git.oschina.net/baomidou/mybatisplus-spring-boot",target:"_blank",rel:"noopener noreferrer"}},[t._v("mybatisplus-spring-boot"),a("OutboundLink")],1)]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("1.全局处理方式")]),t._v(" "),t._m(13),a("p",[t._v("2.局部处理方式")]),t._v(" "),t._m(14),a("p",[t._v("以上两种方式任选其一,然后在枚举中复写toString方法即可.")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"通用枚举扫描并自动关联注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通用枚举扫描并自动关联注入","aria-hidden":"true"}},[this._v("#")]),this._v(" 通用枚举扫描并自动关联注入")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"_1、申明通用枚举属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、申明通用枚举属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 1、申明通用枚举属性")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" GradeEnum "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{attrs:{class:"token function"}},[t._v("PRIMARY")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"小学"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{attrs:{class:"token function"}},[t._v("SECONDORY")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"中学"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{attrs:{class:"token function"}},[t._v("HIGH")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"高中"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token function"}},[t._v("GradeEnum")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" code"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String descp"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" code"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("descp "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" descp"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@EnumValue")]),a("span",{attrs:{class:"token comment"}},[t._v("//标记数据库存的值是code")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" code"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//。。。")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("方式二： 枚举属性，实现 IEnum 接口如下：")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" AgeEnum "),a("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("IEnum")]),a("span",{attrs:{class:"token generics function"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" String "),a("span",{attrs:{class:"token function"}},[t._v("getValue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"_2、配置扫描通用枚举"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、配置扫描通用枚举","aria-hidden":"true"}},[this._v("#")]),this._v(" 2、配置扫描通用枚举")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("注意!! spring mvc 配置参考，安装集成 MybatisSqlSessionFactoryBean 枚举包扫描，spring boot 例子配置如下：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("配置文件 resources/application.yml")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("mybatis-plus:\n    # 支持统配符 * 或者 ; 分割\n    typeEnumsPackage: com.baomidou.springboot.entity.enums\n  ....\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"_3、json序列化处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、json序列化处理","aria-hidden":"true"}},[this._v("#")]),this._v(" 3、JSON序列化处理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"一、jackson"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、jackson","aria-hidden":"true"}},[this._v("#")]),this._v(" 一、Jackson")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",[s("code",[this._v("1.在需要响应描述字段的get方法上添加@JsonValue注解即可\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"二、fastjson"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、fastjson","aria-hidden":"true"}},[this._v("#")]),this._v(" 二、Fastjson")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("\t\tFastJsonConfig config = new FastJsonConfig();\n\t\t//设置WriteEnumUsingToString\n\t\tconfig.setSerializerFeatures(SerializerFeature.WriteEnumUsingToString);\n\t\tconverter.setFastJsonConfig(config);\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("\t\t@JSONField(serialzeFeatures= SerializerFeature.WriteEnumUsingToString)\n\t\tprivate UserStatus status;\n")])])])}],!1,null,null,null);e.options.__file="enum.md";s.default=e.exports}}]);