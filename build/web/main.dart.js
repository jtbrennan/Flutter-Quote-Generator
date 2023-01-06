define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const convert = dart_sdk.convert;
  const typed_data = dart_sdk.typed_data;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const _native_typed_data = dart_sdk._native_typed_data;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = flutter_sdk.src__material__app;
  const framework = flutter_sdk.src__widgets__framework;
  const safe_area = flutter_sdk.src__widgets__safe_area;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const text = flutter_sdk.src__widgets__text;
  const basic = flutter_sdk.src__widgets__basic;
  const elevated_button = flutter_sdk.src__material__elevated_button;
  const navigator = flutter_sdk.src__widgets__navigator;
  const page = flutter_sdk.src__material__page;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const text_style = flutter_sdk.src__painting__text_style;
  const alignment = flutter_sdk.src__painting__alignment;
  const binding = flutter_sdk.src__widgets__binding;
  const object = flutter_sdk.src__rendering__object;
  const ticker = flutter_sdk.src__scheduler__ticker;
  const assertions = flutter_sdk.src__foundation__assertions;
  const diagnostics = flutter_sdk.src__foundation__diagnostics;
  const debug = flutter_sdk.src__widgets__debug;
  const box = flutter_sdk.src__rendering__box;
  const proxy_box = flutter_sdk.src__rendering__proxy_box;
  const colors = flutter_sdk.src__painting__colors;
  const gesture_detector = flutter_sdk.src__widgets__gesture_detector;
  const tap = flutter_sdk.src__gestures__tap;
  const image = flutter_sdk.src__widgets__image;
  const image_provider = flutter_sdk.src__painting__image_provider;
  const decoration_image = flutter_sdk.src__painting__decoration_image;
  const drag_details = flutter_sdk.src__gestures__drag_details;
  const vector_math_64 = flutter_sdk.vector_math_64;
  const image_stream = flutter_sdk.src__painting__image_stream;
  const string_scanner = flutter_sdk.src__string_scanner;
  const canonicalized_map = flutter_sdk.src__canonicalized_map;
  const span_exception = flutter_sdk.src__span_exception;
  const queue_list = flutter_sdk.src__queue_list;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var http = Object.create(dart.library);
  var animated_background = Object.create(dart.library);
  var client$ = Object.create(dart.library);
  var exception = Object.create(dart.library);
  var request$ = Object.create(dart.library);
  var response$ = Object.create(dart.library);
  var streamed_request = Object.create(dart.library);
  var base_client = Object.create(dart.library);
  var base_request = Object.create(dart.library);
  var base_response = Object.create(dart.library);
  var byte_stream = Object.create(dart.library);
  var multipart_file = Object.create(dart.library);
  var multipart_request = Object.create(dart.library);
  var streamed_response = Object.create(dart.library);
  var bubbles = Object.create(dart.library);
  var lines = Object.create(dart.library);
  var particles = Object.create(dart.library);
  var rectangles = Object.create(dart.library);
  var space = Object.create(dart.library);
  var browser_client = Object.create(dart.library);
  var http_parser = Object.create(dart.library);
  var utils = Object.create(dart.library);
  var multipart_file_stub = Object.create(dart.library);
  var boundary_characters = Object.create(dart.library);
  var image_helper = Object.create(dart.library);
  var authentication_challenge = Object.create(dart.library);
  var case_insensitive_map = Object.create(dart.library);
  var chunked_coding = Object.create(dart.library);
  var http_date = Object.create(dart.library);
  var media_type = Object.create(dart.library);
  var scan = Object.create(dart.library);
  var utils$ = Object.create(dart.library);
  var decoder = Object.create(dart.library);
  var encoder = Object.create(dart.library);
  var typed_data$ = Object.create(dart.library);
  var charcodes = Object.create(dart.library);
  var typed_queue = Object.create(dart.library);
  var typed_buffers = Object.create(dart.library);
  var typed_buffer = Object.create(dart.library);
  var $toString = dartx.toString;
  var $_equals = dartx._equals;
  var $length = dartx.length;
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $remove = dartx.remove;
  var $_set = dartx._set;
  var $toLowerCase = dartx.toLowerCase;
  var $hashCode = dartx.hashCode;
  var $addAll = dartx.addAll;
  var $cast = dartx.cast;
  var $forEach = dartx.forEach;
  var $entries = dartx.entries;
  var $replaceAll = dartx.replaceAll;
  var $removeRange = dartx.removeRange;
  var $toDouble = dartx.toDouble;
  var $noSuchMethod = dartx.noSuchMethod;
  var $abs = dartx.abs;
  var $sign = dartx.sign;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $modulo = dartx['%'];
  var $insert = dartx.insert;
  var $floor = dartx.floor;
  var $responseType = dartx.responseType;
  var $onLoad = dartx.onLoad;
  var $response = dartx.response;
  var $asUint8List = dartx.asUint8List;
  var $responseHeaders = dartx.responseHeaders;
  var $onError = dartx.onError;
  var $add = dartx.add;
  var $join = dartx.join;
  var $buffer = dartx.buffer;
  var $contains = dartx.contains;
  var $indexOf = dartx.indexOf;
  var $split = dartx.split;
  var $replaceAllMapped = dartx.replaceAllMapped;
  var $substring = dartx.substring;
  var $isNotEmpty = dartx.isNotEmpty;
  var $toRadixString = dartx.toRadixString;
  var $toUpperCase = dartx.toUpperCase;
  var $codeUnits = dartx.codeUnits;
  var $setRange = dartx.setRange;
  var $fillRange = dartx.fillRange;
  var $rightShift = dartx['>>'];
  var $sublist = dartx.sublist;
  var $isEmpty = dartx.isEmpty;
  var $elementSizeInBytes = dartx.elementSizeInBytes;
  var $offsetInBytes = dartx.offsetInBytes;
  var $insertAll = dartx.insertAll;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    BuildContextToSecondScreen: () => (T.BuildContextToSecondScreen = dart.constFn(dart.fnType(main.SecondScreen, [framework.BuildContext])))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    VoidToFutureOfvoid: () => (T.VoidToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    FutureOfResponse: () => (T.FutureOfResponse = dart.constFn(async.Future$(response$.Response)))(),
    ClientToFutureOfResponse: () => (T.ClientToFutureOfResponse = dart.constFn(dart.fnType(T.FutureOfResponse(), [client$.Client])))(),
    FutureOfString: () => (T.FutureOfString = dart.constFn(async.Future$(core.String)))(),
    ClientToFutureOfString: () => (T.ClientToFutureOfString = dart.constFn(dart.fnType(T.FutureOfString(), [client$.Client])))(),
    FutureOfUint8List: () => (T.FutureOfUint8List = dart.constFn(async.Future$(typed_data.Uint8List)))(),
    ClientToFutureOfUint8List: () => (T.ClientToFutureOfUint8List = dart.constFn(dart.fnType(T.FutureOfUint8List(), [client$.Client])))(),
    DiagnosticsNodeN: () => (T.DiagnosticsNodeN = dart.constFn(dart.nullable(diagnostics.DiagnosticsNode)))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    LinkedMapOfObjectN$ObjectN: () => (T.LinkedMapOfObjectN$ObjectN = dart.constFn(_js_helper.LinkedMap$(T.ObjectN(), T.ObjectN())))(),
    VoidToClient: () => (T.VoidToClient = dart.constFn(dart.fnType(client$.Client, [])))(),
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    LinkedHashMapOfString$String: () => (T.LinkedHashMapOfString$String = dart.constFn(collection.LinkedHashMap$(core.String, core.String)))(),
    StringAndStringTobool: () => (T.StringAndStringTobool = dart.constFn(dart.fnType(core.bool, [core.String, core.String])))(),
    StringToint: () => (T.StringToint = dart.constFn(dart.fnType(core.int, [core.String])))(),
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))(),
    _EmptyStreamOfListOfint: () => (T._EmptyStreamOfListOfint = dart.constFn(async._EmptyStream$(T.ListOfint())))(),
    StreamControllerOfListOfint: () => (T.StreamControllerOfListOfint = dart.constFn(async.StreamController$(T.ListOfint())))(),
    StreamOfListOfint: () => (T.StreamOfListOfint = dart.constFn(async.Stream$(T.ListOfint())))(),
    CompleterOfUint8List: () => (T.CompleterOfUint8List = dart.constFn(async.Completer$(typed_data.Uint8List)))(),
    ListOfintTovoid: () => (T.ListOfintTovoid = dart.constFn(dart.fnType(dart.void, [T.ListOfint()])))(),
    JSArrayOfMultipartFile: () => (T.JSArrayOfMultipartFile = dart.constFn(_interceptors.JSArray$(multipart_file.MultipartFile)))(),
    StringAndStringTovoid: () => (T.StringAndStringTovoid = dart.constFn(dart.fnType(dart.void, [core.String, core.String])))(),
    _AsyncStarImplOfListOfint: () => (T._AsyncStarImplOfListOfint = dart.constFn(async._AsyncStarImpl$(T.ListOfint())))(),
    intToint: () => (T.intToint = dart.constFn(dart.fnType(core.int, [core.int])))(),
    ListOfBubble: () => (T.ListOfBubble = dart.constFn(core.List$(bubbles.Bubble)))(),
    intToBubble: () => (T.intToBubble = dart.constFn(dart.fnType(bubbles.Bubble, [core.int])))(),
    TapDownDetailsTovoid: () => (T.TapDownDetailsTovoid = dart.constFn(dart.fnType(dart.void, [tap.TapDownDetails])))(),
    intN: () => (T.intN = dart.constFn(dart.nullable(core.int)))(),
    ListOfLine: () => (T.ListOfLine = dart.constFn(core.List$(lines.Line)))(),
    intToLine: () => (T.intToLine = dart.constFn(dart.fnType(lines.Line, [core.int])))(),
    JSArrayOfColor: () => (T.JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))(),
    FutureOf_NotSetImageProvider: () => (T.FutureOf_NotSetImageProvider = dart.constFn(async.Future$(particles._NotSetImageProvider)))(),
    intToParticle: () => (T.intToParticle = dart.constFn(dart.fnType(particles.Particle, [core.int])))(),
    ImageToNull: () => (T.ImageToNull = dart.constFn(dart.fnType(core.Null, [ui.Image])))(),
    RectangleN: () => (T.RectangleN = dart.constFn(dart.nullable(rectangles.Rectangle)))(),
    JSArrayOfRectangleN: () => (T.JSArrayOfRectangleN = dart.constFn(_interceptors.JSArray$(T.RectangleN())))(),
    ListOfStar: () => (T.ListOfStar = dart.constFn(core.List$(space.Star)))(),
    intToStar: () => (T.intToStar = dart.constFn(dart.fnType(space.Star, [core.int])))(),
    DragUpdateDetailsTovoid: () => (T.DragUpdateDetailsTovoid = dart.constFn(dart.fnType(dart.void, [drag_details.DragUpdateDetails])))(),
    LinkedHashSetOfHttpRequest: () => (T.LinkedHashSetOfHttpRequest = dart.constFn(collection.LinkedHashSet$(html.HttpRequest)))(),
    CompleterOfStreamedResponse: () => (T.CompleterOfStreamedResponse = dart.constFn(async.Completer$(streamed_response.StreamedResponse)))(),
    ProgressEventToNull: () => (T.ProgressEventToNull = dart.constFn(dart.fnType(core.Null, [html.ProgressEvent])))(),
    JSArrayOfListOfString: () => (T.JSArrayOfListOfString = dart.constFn(_interceptors.JSArray$(T.ListOfString())))(),
    ListOfStringToString: () => (T.ListOfStringToString = dart.constFn(dart.fnType(core.String, [T.ListOfString()])))(),
    VoidToImageStreamListener: () => (T.VoidToImageStreamListener = dart.constFn(dart.fnType(image_stream.ImageStreamListener, [])))(),
    ImageStreamListenerTodynamic: () => (T.ImageStreamListenerTodynamic = dart.constFn(dart.fnType(dart.dynamic, [image_stream.ImageStreamListener])))(),
    ImageInfoAndboolTovoid: () => (T.ImageInfoAndboolTovoid = dart.constFn(dart.fnType(dart.void, [image_stream.ImageInfo, core.bool])))(),
    UnmodifiableMapViewOfString$String: () => (T.UnmodifiableMapViewOfString$String = dart.constFn(collection.UnmodifiableMapView$(core.String, core.String)))(),
    CaseInsensitiveMapOfString: () => (T.CaseInsensitiveMapOfString = dart.constFn(case_insensitive_map.CaseInsensitiveMap$(core.String)))(),
    ListOfAuthenticationChallenge: () => (T.ListOfAuthenticationChallenge = dart.constFn(core.List$(authentication_challenge.AuthenticationChallenge)))(),
    VoidToAuthenticationChallenge: () => (T.VoidToAuthenticationChallenge = dart.constFn(dart.fnType(authentication_challenge.AuthenticationChallenge, [])))(),
    VoidToListOfAuthenticationChallenge: () => (T.VoidToListOfAuthenticationChallenge = dart.constFn(dart.fnType(T.ListOfAuthenticationChallenge(), [])))(),
    StringToString: () => (T.StringToString = dart.constFn(dart.fnType(core.String, [core.String])))(),
    VoidToDateTime: () => (T.VoidToDateTime = dart.constFn(dart.fnType(core.DateTime, [])))(),
    VoidToMediaType: () => (T.VoidToMediaType = dart.constFn(dart.fnType(media_type.MediaType, [])))(),
    MatchToString: () => (T.MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))(),
    SinkOfListOfint: () => (T.SinkOfListOfint = dart.constFn(core.Sink$(T.ListOfint())))(),
    intAndStringTovoid: () => (T.intAndStringTovoid = dart.constFn(dart.fnType(dart.void, [core.int, core.String])))(),
    JSArrayOfint: () => (T.JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))(),
    ListOfintN: () => (T.ListOfintN = dart.constFn(core.List$(T.intN())))(),
    doubleN: () => (T.doubleN = dart.constFn(dart.nullable(core.double)))(),
    ListOfdoubleN: () => (T.ListOfdoubleN = dart.constFn(core.List$(T.doubleN())))(),
    Int32x4N: () => (T.Int32x4N = dart.constFn(dart.nullable(typed_data.Int32x4)))(),
    ListOfInt32x4N: () => (T.ListOfInt32x4N = dart.constFn(core.List$(T.Int32x4N())))(),
    Float32x4N: () => (T.Float32x4N = dart.constFn(dart.nullable(typed_data.Float32x4)))(),
    ListOfFloat32x4N: () => (T.ListOfFloat32x4N = dart.constFn(core.List$(T.Float32x4N())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: main.HomeScreen.prototype,
        [Widget_key]: null
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 15,
        [EdgeInsets_right]: 15,
        [EdgeInsets_top]: 15,
        [EdgeInsets_left]: 15
      });
    },
    get C3() {
      return C[3] = dart.const(new _js_helper.PrivateSymbol.new('_clientToken', _clientToken));
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: T._EmptyStreamOfListOfint().prototype
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: byte_stream.ByteStream.prototype,
        [StreamView__stream]: C[5] || CT.C5
      });
    },
    get C6() {
      return C[6] = dart.constMap(core.String, core.String, []);
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: convert.Utf8Codec.prototype,
        [Utf8Codec__allowMalformed]: false
      });
    },
    get C8() {
      return C[8] = dart.constList([13, 10], core.int);
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: bubbles.BubbleOptions.prototype,
        [popRate$]: 150,
        [growthRate$]: 10,
        [maxTargetRadius$]: 50,
        [minTargetRadius$]: 15,
        [bubbleCount$]: 20
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: lines.LineDirection.prototype,
        [_Enum__name]: "Ltr",
        [_Enum_index]: 0
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: lines.LineDirection.prototype,
        [_Enum__name]: "Rtl",
        [_Enum_index]: 1
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: lines.LineDirection.prototype,
        [_Enum__name]: "Ttb",
        [_Enum_index]: 2
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: lines.LineDirection.prototype,
        [_Enum__name]: "Btt",
        [_Enum_index]: 3
      });
    },
    get C10() {
      return C[10] = dart.constList([C[11] || CT.C11, C[12] || CT.C12, C[13] || CT.C13, C[14] || CT.C14], lines.LineDirection);
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: particles._NotSetImageProvider.prototype
      });
    },
    get C16() {
      return C[16] = dart.const(new _internal.Symbol.new('obtainKey'));
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: decoration_image.ImageRepeat.prototype,
        [_Enum__name]: "noRepeat",
        [_Enum_index]: 3
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: ui.FilterQuality.prototype,
        [_Enum__name]: "low",
        [_Enum_index]: 1
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: particles._NotSetImage.prototype,
        [Widget_key]: null,
        [Image_isAntiAlias]: false,
        [Image_excludeFromSemantics]: false,
        [Image_semanticLabel]: null,
        [Image_gaplessPlayback]: false,
        [Image_matchTextDirection]: false,
        [Image_centerSlice]: null,
        [Image_repeat]: C[19] || CT.C19,
        [Image_alignment]: C[20] || CT.C20,
        [Image_fit]: null,
        [Image_colorBlendMode]: null,
        [Image_filterQuality]: C[21] || CT.C21,
        [Image_opacity]: null,
        [Image_color]: null,
        [Image_height]: null,
        [Image_width]: null,
        [Image_errorBuilder]: null,
        [Image_loadingBuilder]: null,
        [Image_frameBuilder]: null,
        [Image_image]: C[15] || CT.C15
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: particles.ParticleOptions.prototype,
        [particleCount$]: 100,
        [opacityChangeRate$]: 0.25,
        [maxOpacity$]: 0.4,
        [minOpacity$]: 0.1,
        [spawnOpacity$]: 0,
        [spawnMaxSpeed$]: 300,
        [spawnMinSpeed$]: 150,
        [spawnMaxRadius$]: 10,
        [spawnMinRadius$]: 1,
        [baseColor$]: C[17] || CT.C17,
        [image$]: null
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: convert.Latin1Codec.prototype,
        [Latin1Codec__allowInvalid]: false
      });
    },
    get C24() {
      return C[24] = dart.constList([43, 95, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122], core.int);
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: chunked_coding.ChunkedCodingCodec.prototype
      });
    },
    get C26() {
      return C[26] = dart.constList(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], core.String);
    },
    get C27() {
      return C[27] = dart.constList(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], core.String);
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "boundary"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "size"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "size before LF"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "body"
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "body before CR"
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "body before LF"
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "end before CR"
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "end before LF"
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "end"
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: decoder.ChunkedCodingDecoder.prototype
      });
    },
    get C38() {
      return C[38] = dart.constList([], core.int);
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: encoder.ChunkedCodingEncoder.prototype
      });
    },
    get C40() {
      return C[40] = dart.const(new _js_helper.PrivateSymbol.new('_add', _add));
    },
    get C41() {
      return C[41] = dart.const(new _js_helper.PrivateSymbol.new('_head', _head$));
    },
    get C42() {
      return C[42] = dart.const(new _js_helper.PrivateSymbol.new('_writeToList', _writeToList));
    },
    get C43() {
      return C[43] = dart.const(new _js_helper.PrivateSymbol.new('_grow', _grow));
    },
    get C44() {
      return C[44] = dart.const(new _js_helper.PrivateSymbol.new('_preGrow', _preGrow));
    },
    get C45() {
      return C[45] = dart.const(new _js_helper.PrivateSymbol.new('_table', _table$));
    },
    get C46() {
      return C[46] = dart.const(new _js_helper.PrivateSymbol.new('_tail', _tail$));
    },
    get C47() {
      return C[47] = dart.const(new _js_helper.PrivateSymbol.new('_head=', _head_));
    },
    get C48() {
      return C[48] = dart.const(new _js_helper.PrivateSymbol.new('_table=', _table_));
    },
    get C49() {
      return C[49] = dart.const(new _js_helper.PrivateSymbol.new('_tail=', _tail_));
    }
  }, false);
  var C = Array(50).fill(void 0);
  var I = [
    "file:///zapp/project/lib/main.dart",
    "package:animated_background/animated_background.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/animated_background-2.0.0/lib/animated_background.dart",
    "package:http/src/client.dart",
    "package:http/src/exception.dart",
    "package:http/src/base_request.dart",
    "package:http/src/request.dart",
    "package:http/src/base_response.dart",
    "package:http/src/response.dart",
    "package:http/src/streamed_request.dart",
    "package:http/src/base_client.dart",
    "package:http/src/byte_stream.dart",
    "package:http/src/multipart_file.dart",
    "package:http/src/multipart_request.dart",
    "package:http/src/streamed_response.dart",
    "package:animated_background/bubbles.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/animated_background-2.0.0/lib/bubbles.dart",
    "package:animated_background/lines.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/animated_background-2.0.0/lib/lines.dart",
    "package:animated_background/particles.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/animated_background-2.0.0/lib/particles.dart",
    "package:animated_background/rectangles.dart",
    "package:animated_background/space.dart",
    "package:http/src/browser_client.dart",
    "package:http_parser/src/authentication_challenge.dart",
    "package:http_parser/src/case_insensitive_map.dart",
    "package:http_parser/src/chunked_coding.dart",
    "package:http_parser/src/media_type.dart",
    "package:http_parser/src/chunked_coding/decoder.dart",
    "package:http_parser/src/chunked_coding/encoder.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/typed_data-1.3.1/lib/src/typed_queue.dart",
    "package:typed_data/src/typed_queue.dart",
    "package:typed_data/src/typed_buffer.dart"
  ];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  var Widget_key = dart.privateName(framework, "Widget.key");
  main.MyApp = class MyApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({home: C[1] || CT.C1});
    }
    static ['_#new#tearOff']() {
      return new main.MyApp.new();
    }
  };
  (main.MyApp.new = function() {
    main.MyApp.__proto__.new.call(this);
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, I[0]);
  main.HomeScreen = class HomeScreen extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main.HomeScreen.new({key: key});
    }
    build(context) {
      return new safe_area.SafeArea.new({child: new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Quote Generator")}), body: new basic.Center.new({child: new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => async.async(dart.void, function*() {
                let url = core.Uri.parse("https://api.quotable.io/random");
                let response = (yield http.get(url));
                core.print("Response status: " + dart.str(response.statusCode));
                core.print("Response body: " + response.body);
                let data = convert.jsonDecode(response.body);
                let quote = core.String.as(dart.dsend(data, '_get', ["content"]));
                let author = core.String.as(dart.dsend(data, '_get', ["author"]));
                core.print(quote);
                core.print(author);
                navigator.Navigator.of(context).push(dart.dynamic, new page.MaterialPageRoute.new({builder: dart.fn(context => new main.SecondScreen.new({quoteText: quote, authorName: author}), T.BuildContextToSecondScreen())}));
              }), T.VoidToFutureOfvoid()), child: new text.Text.new("Generate Quote")})})})});
    }
  };
  (main.HomeScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    main.HomeScreen.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.HomeScreen.prototype;
  dart.addTypeTests(main.HomeScreen);
  dart.addTypeCaches(main.HomeScreen);
  dart.setMethodSignature(main.HomeScreen, () => ({
    __proto__: dart.getMethods(main.HomeScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.HomeScreen, I[0]);
  var quoteText$ = dart.privateName(main, "SecondScreen.quoteText");
  var authorName$ = dart.privateName(main, "SecondScreen.authorName");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  main.SecondScreen = class SecondScreen extends framework.StatelessWidget {
    get quoteText() {
      return this[quoteText$];
    }
    set quoteText(value) {
      this[quoteText$] = value;
    }
    get authorName() {
      return this[authorName$];
    }
    set authorName(value) {
      this[authorName$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let authorName = opts && 'authorName' in opts ? opts.authorName : null;
      let quoteText = opts && 'quoteText' in opts ? opts.quoteText : null;
      return new main.SecondScreen.new({key: key, authorName: authorName, quoteText: quoteText});
    }
    build(context) {
      return new safe_area.SafeArea.new({child: new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new(), body: new basic.Center.new({child: new basic.Column.new({children: T.JSArrayOfWidget().of([new basic.Padding.new({padding: C[2] || CT.C2}), new text.Text.new(this.quoteText, {style: new text_style.TextStyle.new({fontSize: 22})}), new basic.Align.new({alignment: alignment.Alignment.bottomCenter, child: new text.Text.new("- " + this.authorName, {style: new text_style.TextStyle.new({fontSize: 15})})})])})})})});
    }
  };
  (main.SecondScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let authorName = opts && 'authorName' in opts ? opts.authorName : null;
    let quoteText = opts && 'quoteText' in opts ? opts.quoteText : null;
    this[authorName$] = authorName;
    this[quoteText$] = quoteText;
    main.SecondScreen.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.SecondScreen.prototype;
  dart.addTypeTests(main.SecondScreen);
  dart.addTypeCaches(main.SecondScreen);
  dart.setMethodSignature(main.SecondScreen, () => ({
    __proto__: dart.getMethods(main.SecondScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.SecondScreen, I[0]);
  dart.setFieldSignature(main.SecondScreen, () => ({
    __proto__: dart.getFields(main.SecondScreen.__proto__),
    quoteText: dart.fieldType(core.String),
    authorName: dart.fieldType(core.String)
  }));
  main.main = function main$0() {
    return binding.runApp(new main.MyApp.new());
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  http.head = function head(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(response$.Response, dart.fn(client => client.head(url, {headers: headers}), T.ClientToFutureOfResponse()));
  };
  http.get = function get(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(response$.Response, dart.fn(client => client.get(url, {headers: headers}), T.ClientToFutureOfResponse()));
  };
  http.post = function post(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(response$.Response, dart.fn(client => client.post(url, {headers: headers, body: body, encoding: encoding}), T.ClientToFutureOfResponse()));
  };
  http.put = function put(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(response$.Response, dart.fn(client => client.put(url, {headers: headers, body: body, encoding: encoding}), T.ClientToFutureOfResponse()));
  };
  http.patch = function patch(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(response$.Response, dart.fn(client => client.patch(url, {headers: headers, body: body, encoding: encoding}), T.ClientToFutureOfResponse()));
  };
  http.delete = function $delete(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(response$.Response, dart.fn(client => client.delete(url, {headers: headers, body: body, encoding: encoding}), T.ClientToFutureOfResponse()));
  };
  http.read = function read(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(core.String, dart.fn(client => client.read(url, {headers: headers}), T.ClientToFutureOfString()));
  };
  http.readBytes = function readBytes(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(typed_data.Uint8List, dart.fn(client => client.readBytes(url, {headers: headers}), T.ClientToFutureOfUint8List()));
  };
  http._withClient = function _withClient(T, fn) {
    return async.async(T, function* _withClient() {
      let client = client$.Client.new();
      try {
        return yield fn(client);
      } finally {
        client.close();
      }
    });
  };
  var child$ = dart.privateName(animated_background, "AnimatedBackground.child");
  var vsync$ = dart.privateName(animated_background, "AnimatedBackground.vsync");
  var behaviour$ = dart.privateName(animated_background, "AnimatedBackground.behaviour");
  animated_background.AnimatedBackground = class AnimatedBackground extends framework.RenderObjectWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get vsync() {
      return this[vsync$];
    }
    set vsync(value) {
      super.vsync = value;
    }
    get behaviour() {
      return this[behaviour$];
    }
    set behaviour(value) {
      super.behaviour = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let vsync = opts && 'vsync' in opts ? opts.vsync : null;
      let behaviour = opts && 'behaviour' in opts ? opts.behaviour : null;
      return new animated_background.AnimatedBackground.new({key: key, child: child, vsync: vsync, behaviour: behaviour});
    }
    createRenderObject(context) {
      return new animated_background.RenderAnimatedBackground.new({vsync: this.vsync, behaviour: this.behaviour});
    }
    updateRenderObject(context, renderObject) {
      let t0;
      animated_background.RenderAnimatedBackground.as(renderObject);
      t0 = renderObject;
      (() => {
        t0.behaviour = this.behaviour;
        return t0;
      })();
    }
    createElement() {
      return new animated_background._AnimatedBackgroundElement.new(this);
    }
  };
  (animated_background.AnimatedBackground.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    let behaviour = opts && 'behaviour' in opts ? opts.behaviour : null;
    this[child$] = child;
    this[vsync$] = vsync;
    this[behaviour$] = behaviour;
    animated_background.AnimatedBackground.__proto__.new.call(this, {key: key});
    ;
  }).prototype = animated_background.AnimatedBackground.prototype;
  dart.addTypeTests(animated_background.AnimatedBackground);
  dart.addTypeCaches(animated_background.AnimatedBackground);
  dart.setMethodSignature(animated_background.AnimatedBackground, () => ({
    __proto__: dart.getMethods(animated_background.AnimatedBackground.__proto__),
    createRenderObject: dart.fnType(object.RenderObject, [framework.BuildContext]),
    createElement: dart.fnType(animated_background._AnimatedBackgroundElement, [])
  }));
  dart.setLibraryUri(animated_background.AnimatedBackground, I[1]);
  dart.setFieldSignature(animated_background.AnimatedBackground, () => ({
    __proto__: dart.getFields(animated_background.AnimatedBackground.__proto__),
    child: dart.finalFieldType(framework.Widget),
    vsync: dart.finalFieldType(ticker.TickerProvider),
    behaviour: dart.finalFieldType(animated_background.Behaviour)
  }));
  var _child = dart.privateName(animated_background, "_child");
  var _useDiagnosticsNode = dart.privateName(animated_background, "_useDiagnosticsNode");
  var _layoutCallback = dart.privateName(animated_background, "_layoutCallback");
  var _debugReportException = dart.privateName(animated_background, "_debugReportException");
  var _safeContext = dart.privateName(animated_background, "_safeContext");
  animated_background._AnimatedBackgroundElement = class _AnimatedBackgroundElement extends framework.RenderObjectElement {
    static ['_#new#tearOff'](widget) {
      return new animated_background._AnimatedBackgroundElement.new(widget);
    }
    get widget() {
      return animated_background.AnimatedBackground.as(super.widget);
    }
    get renderObject() {
      return animated_background.RenderAnimatedBackground.as(super.renderObject);
    }
    forgetChild(child) {
      super.forgetChild(child);
      if (!child._equals(this[_child])) dart.assertFailed(null, I[2], 65, 12, "child == _child");
      this[_child] = null;
    }
    insertRenderObjectChild(child, slot) {
      object.RenderObject.as(child);
      let renderObject = this.renderObject;
      if (!(slot == null)) dart.assertFailed(null, I[2], 73, 12, "slot == null");
      if (!renderObject.debugValidateChild(child)) dart.assertFailed(null, I[2], 74, 12, "renderObject.debugValidateChild(child)");
      renderObject.child = child;
      if (!renderObject[$_equals](this.renderObject)) dart.assertFailed(null, I[2], 76, 12, "renderObject == this.renderObject");
    }
    moveRenderObjectChild(child, oldSlot, newSlot) {
      object.RenderObject.as(child);
      if (!false) dart.assertFailed(null, I[2], 81, 12, "false");
    }
    removeRenderObjectChild(child, slot) {
      object.RenderObject.as(child);
      let renderObject = this.renderObject;
      if (!dart.equals(renderObject.child, child)) dart.assertFailed(null, I[2], 86, 12, "renderObject.child == child");
      renderObject.child = null;
      if (!renderObject[$_equals](this.renderObject)) dart.assertFailed(null, I[2], 88, 12, "renderObject == this.renderObject");
    }
    visitChildren(visitor) {
      if (this[_child] != null) visitor(dart.nullCheck(this[_child]));
    }
    mount(parent, newSlot) {
      super.mount(parent, newSlot);
      this.renderObject.callback = dart.bind(this, _layoutCallback);
    }
    update(newWidget) {
      animated_background.AnimatedBackground.as(newWidget);
      if (!!this.widget._equals(newWidget)) dart.assertFailed(null, I[2], 104, 12, "widget != newWidget");
      super.update(newWidget);
      if (!this.widget._equals(newWidget)) dart.assertFailed(null, I[2], 106, 12, "widget == newWidget");
      this.renderObject.callback = dart.bind(this, _layoutCallback);
      this.renderObject.markNeedsLayout();
    }
    performRebuild() {
      this.renderObject.markNeedsLayout();
      super.performRebuild();
    }
    unmount() {
      this.renderObject.callback = null;
      super.unmount();
    }
    [_layoutCallback](constraints) {
      dart.nullCheck(this.owner).buildScope(this, dart.fn(() => {
        let built = null;
        try {
          built = this.widget.behaviour.builder(this, constraints, this.widget.child);
          debug.debugWidgetBuilderValue(this.widget, built);
        } catch (e$) {
          let e = dart.getThrown(e$);
          let stack = dart.stackTrace(e$);
          if (core.Object.is(e)) {
            built = framework.ErrorWidget.builder(this[_debugReportException]("building " + dart.str(this.widget), e, stack));
          } else
            throw e$;
        }
        try {
          this[_child] = this.updateChild(this[_child], built, null);
          if (!(this[_child] != null)) dart.assertFailed(null, I[2], 139, 16, "_child != null");
        } catch (e$0) {
          let e = dart.getThrown(e$0);
          let stack = dart.stackTrace(e$0);
          if (core.Object.is(e)) {
            built = framework.ErrorWidget.builder(this[_debugReportException]("building " + dart.str(this.widget), e, stack));
            this[_child] = this.updateChild(null, built, this.slot);
          } else
            throw e$0;
        }
      }, T.VoidTovoid()));
    }
    [_safeContext](context) {
      return this[_useDiagnosticsNode] ? diagnostics.DiagnosticsNode.message(context) : context;
    }
    [_debugReportException](context, exception, stack) {
      let details = new assertions.FlutterErrorDetails.new({exception: core.Object.as(exception), stack: stack, library: "animated background library", context: T.DiagnosticsNodeN().as(this[_safeContext](context))});
      assertions.FlutterError.reportError(details);
      return details;
    }
  };
  (animated_background._AnimatedBackgroundElement.new = function(widget) {
    this[_child] = null;
    this[_useDiagnosticsNode] = diagnostics.Diagnosticable.is(assertions.FlutterError.new("text"));
    animated_background._AnimatedBackgroundElement.__proto__.new.call(this, widget);
    ;
  }).prototype = animated_background._AnimatedBackgroundElement.prototype;
  dart.addTypeTests(animated_background._AnimatedBackgroundElement);
  dart.addTypeCaches(animated_background._AnimatedBackgroundElement);
  dart.setMethodSignature(animated_background._AnimatedBackgroundElement, () => ({
    __proto__: dart.getMethods(animated_background._AnimatedBackgroundElement.__proto__),
    [_layoutCallback]: dart.fnType(dart.void, [box.BoxConstraints]),
    [_safeContext]: dart.fnType(dart.dynamic, [core.String]),
    [_debugReportException]: dart.fnType(assertions.FlutterErrorDetails, [core.String, dart.dynamic, core.StackTrace])
  }));
  dart.setGetterSignature(animated_background._AnimatedBackgroundElement, () => ({
    __proto__: dart.getGetters(animated_background._AnimatedBackgroundElement.__proto__),
    widget: animated_background.AnimatedBackground,
    renderObject: animated_background.RenderAnimatedBackground
  }));
  dart.setLibraryUri(animated_background._AnimatedBackgroundElement, I[1]);
  dart.setFieldSignature(animated_background._AnimatedBackgroundElement, () => ({
    __proto__: dart.getFields(animated_background._AnimatedBackgroundElement.__proto__),
    [_child]: dart.fieldType(dart.nullable(framework.Element)),
    [_useDiagnosticsNode]: dart.finalFieldType(core.bool)
  }));
  var _lastTimeMs = dart.privateName(animated_background, "_lastTimeMs");
  var __RenderAnimatedBackground__ticker = dart.privateName(animated_background, "_#RenderAnimatedBackground#_ticker");
  var _callback = dart.privateName(animated_background, "_callback");
  var _vsync = dart.privateName(animated_background, "_vsync");
  var _behaviour = dart.privateName(animated_background, "_behaviour");
  var _ticker = dart.privateName(animated_background, "_ticker");
  var _tick = dart.privateName(animated_background, "_tick");
  animated_background.RenderAnimatedBackground = class RenderAnimatedBackground extends proxy_box.RenderProxyBox {
    get [_ticker]() {
      let t2;
      t2 = this[__RenderAnimatedBackground__ticker];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_ticker")) : t2;
    }
    set [_ticker](library$32package$58animated_background$47animated_background$46dart$58$58_ticker$35param) {
      this[__RenderAnimatedBackground__ticker] = library$32package$58animated_background$47animated_background$46dart$58$58_ticker$35param;
    }
    get behaviour() {
      return this[_behaviour];
    }
    set behaviour(value) {
      if (!(value != null)) dart.assertFailed(null, I[2], 187, 12, "value != null");
      let oldBehaviour = this[_behaviour];
      this[_behaviour] = animated_background.Behaviour.as(value);
      this[_behaviour].renderObject = this;
      this[_behaviour].initFrom(oldBehaviour);
    }
    get callback() {
      return dart.nullCheck(this[_callback]);
    }
    set callback(value) {
      if (dart.equals(value, this[_callback])) return;
      this[_callback] = value;
      this.markNeedsLayout();
    }
    static ['_#new#tearOff'](opts) {
      let vsync = opts && 'vsync' in opts ? opts.vsync : null;
      let behaviour = opts && 'behaviour' in opts ? opts.behaviour : null;
      return new animated_background.RenderAnimatedBackground.new({vsync: vsync, behaviour: behaviour});
    }
    attach(owner) {
      object.PipelineOwner.as(owner);
      this[_lastTimeMs] = 0;
      this[_ticker] = this[_vsync].createTicker(dart.bind(this, _tick));
      this[_ticker].start();
      super.attach(owner);
    }
    detach() {
      this[_ticker].dispose();
      super.detach();
    }
    [_tick](elapsed) {
      if (!this[_behaviour].isInitialized) return;
      let delta = (elapsed.inMilliseconds - this[_lastTimeMs]) / 1000;
      this[_lastTimeMs] = elapsed.inMilliseconds;
      if (this[_behaviour].tick(delta, elapsed)) this.markNeedsPaint();
    }
    performLayout() {
      this.invokeLayoutCallback(box.BoxConstraints, this.callback);
      if (this.child != null) dart.nullCheck(this.child).layout(this.constraints, {parentUsesSize: true});
      this.size = this.constraints.biggest;
    }
    paint(context, offset) {
      if (!this.behaviour.isInitialized) this.behaviour.init();
      let canvas = context.canvas;
      canvas.translate(offset.dx, offset.dy);
      this.behaviour.paint(context, offset);
      canvas.translate(-offset.dx, -offset.dy);
      super.paint(context, offset);
    }
  };
  (animated_background.RenderAnimatedBackground.new = function(opts) {
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    let behaviour = opts && 'behaviour' in opts ? opts.behaviour : null;
    this[_lastTimeMs] = 0;
    this[__RenderAnimatedBackground__ticker] = null;
    this[_callback] = null;
    this[_vsync] = vsync;
    this[_behaviour] = behaviour;
    animated_background.RenderAnimatedBackground.__proto__.new.call(this);
    this[_behaviour].renderObject = this;
  }).prototype = animated_background.RenderAnimatedBackground.prototype;
  dart.addTypeTests(animated_background.RenderAnimatedBackground);
  dart.addTypeCaches(animated_background.RenderAnimatedBackground);
  dart.setMethodSignature(animated_background.RenderAnimatedBackground, () => ({
    __proto__: dart.getMethods(animated_background.RenderAnimatedBackground.__proto__),
    [_tick]: dart.fnType(dart.void, [core.Duration])
  }));
  dart.setGetterSignature(animated_background.RenderAnimatedBackground, () => ({
    __proto__: dart.getGetters(animated_background.RenderAnimatedBackground.__proto__),
    [_ticker]: ticker.Ticker,
    behaviour: animated_background.Behaviour,
    callback: dart.fnType(dart.void, [box.BoxConstraints])
  }));
  dart.setSetterSignature(animated_background.RenderAnimatedBackground, () => ({
    __proto__: dart.getSetters(animated_background.RenderAnimatedBackground.__proto__),
    [_ticker]: ticker.Ticker,
    behaviour: dart.dynamic,
    callback: dart.nullable(dart.fnType(dart.void, [box.BoxConstraints]))
  }));
  dart.setLibraryUri(animated_background.RenderAnimatedBackground, I[1]);
  dart.setFieldSignature(animated_background.RenderAnimatedBackground, () => ({
    __proto__: dart.getFields(animated_background.RenderAnimatedBackground.__proto__),
    [_lastTimeMs]: dart.fieldType(core.int),
    [_vsync]: dart.fieldType(ticker.TickerProvider),
    [__RenderAnimatedBackground__ticker]: dart.fieldType(dart.nullable(ticker.Ticker)),
    [_behaviour]: dart.fieldType(animated_background.Behaviour),
    [_callback]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [box.BoxConstraints])))
  }));
  var renderObject = dart.privateName(animated_background, "Behaviour.renderObject");
  animated_background.Behaviour = class Behaviour extends core.Object {
    get renderObject() {
      return this[renderObject];
    }
    set renderObject(value) {
      this[renderObject] = value;
    }
    get size() {
      let t2;
      t2 = this.renderObject;
      return t2 == null ? null : t2.size;
    }
    builder(context, constraints, child) {
      return child;
    }
  };
  (animated_background.Behaviour.new = function() {
    this[renderObject] = null;
    ;
  }).prototype = animated_background.Behaviour.prototype;
  dart.addTypeTests(animated_background.Behaviour);
  dart.addTypeCaches(animated_background.Behaviour);
  dart.setMethodSignature(animated_background.Behaviour, () => ({
    __proto__: dart.getMethods(animated_background.Behaviour.__proto__),
    builder: dart.fnType(framework.Widget, [framework.BuildContext, box.BoxConstraints, framework.Widget])
  }));
  dart.setGetterSignature(animated_background.Behaviour, () => ({
    __proto__: dart.getGetters(animated_background.Behaviour.__proto__),
    size: dart.nullable(ui.Size)
  }));
  dart.setLibraryUri(animated_background.Behaviour, I[1]);
  dart.setFieldSignature(animated_background.Behaviour, () => ({
    __proto__: dart.getFields(animated_background.Behaviour.__proto__),
    renderObject: dart.fieldType(dart.nullable(animated_background.RenderAnimatedBackground))
  }));
  animated_background.EmptyBehaviour = class EmptyBehaviour extends animated_background.Behaviour {
    static ['_#_#tearOff']() {
      return new animated_background.EmptyBehaviour.__();
    }
    static new() {
      let t2;
      t2 = animated_background.EmptyBehaviour._empty;
      return t2 == null ? animated_background.EmptyBehaviour._empty = new animated_background.EmptyBehaviour.__() : t2;
    }
    static ['_#new#tearOff']() {
      return animated_background.EmptyBehaviour.new();
    }
    init() {
    }
    initFrom(oldBehaviour) {
    }
    get isInitialized() {
      return true;
    }
    paint(context, offset) {
    }
    tick(delta, elapsed) {
      return false;
    }
  };
  (animated_background.EmptyBehaviour.__ = function() {
    animated_background.EmptyBehaviour.__proto__.new.call(this);
    ;
  }).prototype = animated_background.EmptyBehaviour.prototype;
  dart.addTypeTests(animated_background.EmptyBehaviour);
  dart.addTypeCaches(animated_background.EmptyBehaviour);
  dart.setMethodSignature(animated_background.EmptyBehaviour, () => ({
    __proto__: dart.getMethods(animated_background.EmptyBehaviour.__proto__),
    init: dart.fnType(dart.void, []),
    initFrom: dart.fnType(dart.void, [animated_background.Behaviour]),
    paint: dart.fnType(dart.void, [object.PaintingContext, ui.Offset]),
    tick: dart.fnType(core.bool, [core.double, core.Duration])
  }));
  dart.setStaticMethodSignature(animated_background.EmptyBehaviour, () => ['new']);
  dart.setGetterSignature(animated_background.EmptyBehaviour, () => ({
    __proto__: dart.getGetters(animated_background.EmptyBehaviour.__proto__),
    isInitialized: core.bool
  }));
  dart.setLibraryUri(animated_background.EmptyBehaviour, I[1]);
  dart.setStaticFieldSignature(animated_background.EmptyBehaviour, () => ['_empty']);
  dart.defineLazy(animated_background.EmptyBehaviour, {
    /*animated_background.EmptyBehaviour._empty*/get _empty() {
      return null;
    },
    set _empty(_) {}
  }, false);
  client$.Client = class Client extends core.Object {
    static new() {
      let t2;
      t2 = client$.zoneClient;
      return t2 == null ? browser_client.createClient() : t2;
    }
    static ['_#new#tearOff']() {
      return client$.Client.new();
    }
  };
  (client$.Client[dart.mixinNew] = function() {
  }).prototype = client$.Client.prototype;
  dart.addTypeTests(client$.Client);
  dart.addTypeCaches(client$.Client);
  dart.setStaticMethodSignature(client$.Client, () => ['new']);
  dart.setLibraryUri(client$.Client, I[3]);
  var _clientToken = dart.privateName(client$, "_clientToken");
  client$.runWithClient = function runWithClient(R, body, clientFactory, opts) {
    let zoneSpecification = opts && 'zoneSpecification' in opts ? opts.zoneSpecification : null;
    return async.runZoned(R, body, {zoneValues: new (T.LinkedMapOfObjectN$ObjectN()).from([C[3] || CT.C3, async.Zone.current.bindCallback(client$.Client, clientFactory)]), zoneSpecification: zoneSpecification});
  };
  dart.copyProperties(client$, {
    get zoneClient() {
      let client = async.Zone.current._get(C[3] || CT.C3);
      return client == null ? null : T.VoidToClient().as(client)();
    }
  });
  var message$ = dart.privateName(exception, "ClientException.message");
  var uri$ = dart.privateName(exception, "ClientException.uri");
  exception.ClientException = class ClientException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get uri() {
      return this[uri$];
    }
    set uri(value) {
      super.uri = value;
    }
    static ['_#new#tearOff'](message, uri = null) {
      return new exception.ClientException.new(message, uri);
    }
    toString() {
      return this.message;
    }
  };
  (exception.ClientException.new = function(message, uri = null) {
    this[message$] = message;
    this[uri$] = uri;
    ;
  }).prototype = exception.ClientException.prototype;
  dart.addTypeTests(exception.ClientException);
  dart.addTypeCaches(exception.ClientException);
  exception.ClientException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(exception.ClientException, I[4]);
  dart.setFieldSignature(exception.ClientException, () => ({
    __proto__: dart.getFields(exception.ClientException.__proto__),
    message: dart.finalFieldType(core.String),
    uri: dart.finalFieldType(dart.nullable(core.Uri))
  }));
  dart.defineExtensionMethods(exception.ClientException, ['toString']);
  var _defaultEncoding = dart.privateName(request$, "_defaultEncoding");
  var _bodyBytes = dart.privateName(request$, "_bodyBytes");
  var _contentType = dart.privateName(request$, "_contentType");
  var _checkFinalized = dart.privateName(request$, "_checkFinalized");
  var method$ = dart.privateName(base_request, "BaseRequest.method");
  var url$ = dart.privateName(base_request, "BaseRequest.url");
  var headers = dart.privateName(base_request, "BaseRequest.headers");
  var _contentLength = dart.privateName(base_request, "_contentLength");
  var _persistentConnection = dart.privateName(base_request, "_persistentConnection");
  var _followRedirects = dart.privateName(base_request, "_followRedirects");
  var _maxRedirects = dart.privateName(base_request, "_maxRedirects");
  var _finalized = dart.privateName(base_request, "_finalized");
  var _checkFinalized$ = dart.privateName(base_request, "_checkFinalized");
  var StreamView__stream = dart.privateName(async, "StreamView._stream");
  base_request.BaseRequest = class BaseRequest extends core.Object {
    get method() {
      return this[method$];
    }
    set method(value) {
      super.method = value;
    }
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get headers() {
      return this[headers];
    }
    set headers(value) {
      super.headers = value;
    }
    get contentLength() {
      return this[_contentLength];
    }
    set contentLength(value) {
      if (value != null && dart.notNull(value) < 0) {
        dart.throw(new core.ArgumentError.new("Invalid content length " + dart.str(value) + "."));
      }
      this[_checkFinalized$]();
      this[_contentLength] = value;
    }
    get persistentConnection() {
      return this[_persistentConnection];
    }
    set persistentConnection(value) {
      this[_checkFinalized$]();
      this[_persistentConnection] = value;
    }
    get followRedirects() {
      return this[_followRedirects];
    }
    set followRedirects(value) {
      this[_checkFinalized$]();
      this[_followRedirects] = value;
    }
    get maxRedirects() {
      return this[_maxRedirects];
    }
    set maxRedirects(value) {
      this[_checkFinalized$]();
      this[_maxRedirects] = value;
    }
    get finalized() {
      return this[_finalized];
    }
    static _validateMethod(method) {
      if (!base_request.BaseRequest._tokenRE.hasMatch(method)) {
        dart.throw(new core.ArgumentError.value(method, "method", "Not a valid method"));
      }
      return method;
    }
    finalize() {
      if (this.finalized) dart.throw(new core.StateError.new("Can't finalize a finalized Request."));
      this[_finalized] = true;
      return C[4] || CT.C4;
    }
    send() {
      return async.async(streamed_response.StreamedResponse, (function* send() {
        let client = client$.Client.new();
        try {
          let response = (yield client.send(this));
          let stream = utils.onDone(T.ListOfint(), response.stream, dart.bind(client, 'close'));
          return new streamed_response.StreamedResponse.new(new byte_stream.ByteStream.new(stream), response.statusCode, {contentLength: response.contentLength, request: response.request, headers: response.headers, isRedirect: response.isRedirect, persistentConnection: response.persistentConnection, reasonPhrase: response.reasonPhrase});
        } catch (e) {
          let _ = dart.getThrown(e);
          if (core.Object.is(_)) {
            client.close();
            dart.rethrow(e);
          } else
            throw e;
        }
      }).bind(this));
    }
    [_checkFinalized$]() {
      if (!this.finalized) return;
      dart.throw(new core.StateError.new("Can't modify a finalized Request."));
    }
    toString() {
      return this.method + " " + dart.str(this.url);
    }
  };
  (base_request.BaseRequest.new = function(method, url) {
    this[_contentLength] = null;
    this[_persistentConnection] = true;
    this[_followRedirects] = true;
    this[_maxRedirects] = 5;
    this[_finalized] = false;
    this[url$] = url;
    this[method$] = base_request.BaseRequest._validateMethod(method);
    this[headers] = T.LinkedHashMapOfString$String().new({equals: dart.fn((key1, key2) => key1[$toLowerCase]() === key2[$toLowerCase](), T.StringAndStringTobool()), hashCode: dart.fn(key => key[$toLowerCase]()[$hashCode], T.StringToint())});
    ;
  }).prototype = base_request.BaseRequest.prototype;
  dart.addTypeTests(base_request.BaseRequest);
  dart.addTypeCaches(base_request.BaseRequest);
  dart.setMethodSignature(base_request.BaseRequest, () => ({
    __proto__: dart.getMethods(base_request.BaseRequest.__proto__),
    finalize: dart.fnType(byte_stream.ByteStream, []),
    send: dart.fnType(async.Future$(streamed_response.StreamedResponse), []),
    [_checkFinalized$]: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(base_request.BaseRequest, () => ['_validateMethod']);
  dart.setGetterSignature(base_request.BaseRequest, () => ({
    __proto__: dart.getGetters(base_request.BaseRequest.__proto__),
    contentLength: dart.nullable(core.int),
    persistentConnection: core.bool,
    followRedirects: core.bool,
    maxRedirects: core.int,
    finalized: core.bool
  }));
  dart.setSetterSignature(base_request.BaseRequest, () => ({
    __proto__: dart.getSetters(base_request.BaseRequest.__proto__),
    contentLength: dart.nullable(core.int),
    persistentConnection: core.bool,
    followRedirects: core.bool,
    maxRedirects: core.int
  }));
  dart.setLibraryUri(base_request.BaseRequest, I[5]);
  dart.setFieldSignature(base_request.BaseRequest, () => ({
    __proto__: dart.getFields(base_request.BaseRequest.__proto__),
    method: dart.finalFieldType(core.String),
    url: dart.finalFieldType(core.Uri),
    [_contentLength]: dart.fieldType(dart.nullable(core.int)),
    [_persistentConnection]: dart.fieldType(core.bool),
    [_followRedirects]: dart.fieldType(core.bool),
    [_maxRedirects]: dart.fieldType(core.int),
    headers: dart.finalFieldType(core.Map$(core.String, core.String)),
    [_finalized]: dart.fieldType(core.bool)
  }));
  dart.setStaticFieldSignature(base_request.BaseRequest, () => ['_tokenRE']);
  dart.defineExtensionMethods(base_request.BaseRequest, ['toString']);
  dart.defineLazy(base_request.BaseRequest, {
    /*base_request.BaseRequest._tokenRE*/get _tokenRE() {
      return core.RegExp.new("^[\\w!#%&'*+\\-.^`|~]+$");
    }
  }, false);
  request$.Request = class Request extends base_request.BaseRequest {
    get contentLength() {
      return this.bodyBytes[$length];
    }
    set contentLength(value) {
      dart.throw(new core.UnsupportedError.new("Cannot set the contentLength property of " + "non-streaming Request objects."));
    }
    get encoding() {
      if (this[_contentType] == null || !dart.nullCheck(this[_contentType]).parameters[$containsKey]("charset")) {
        return this[_defaultEncoding];
      }
      return utils.requiredEncodingForCharset(dart.nullCheck(dart.nullCheck(this[_contentType]).parameters[$_get]("charset")));
    }
    set encoding(value) {
      this[_checkFinalized]();
      this[_defaultEncoding] = value;
      let contentType = this[_contentType];
      if (contentType == null) return;
      this[_contentType] = contentType.change({parameters: new (T.IdentityMapOfString$String()).from(["charset", value.name])});
    }
    get bodyBytes() {
      return this[_bodyBytes];
    }
    set bodyBytes(value) {
      this[_checkFinalized]();
      this[_bodyBytes] = utils.toUint8List(value);
    }
    get body() {
      return this.encoding.decode(this.bodyBytes);
    }
    set body(value) {
      this.bodyBytes = this.encoding.encode(value);
      let contentType = this[_contentType];
      if (contentType == null) {
        this[_contentType] = new media_type.MediaType.new("text", "plain", new (T.IdentityMapOfString$String()).from(["charset", this.encoding.name]));
      } else if (!contentType.parameters[$containsKey]("charset")) {
        this[_contentType] = contentType.change({parameters: new (T.IdentityMapOfString$String()).from(["charset", this.encoding.name])});
      }
    }
    get bodyFields() {
      let contentType = this[_contentType];
      if (contentType == null || contentType.mimeType !== "application/x-www-form-urlencoded") {
        dart.throw(new core.StateError.new("Cannot access the body fields of a Request without " + "content-type \"application/x-www-form-urlencoded\"."));
      }
      return core.Uri.splitQueryString(this.body, {encoding: this.encoding});
    }
    set bodyFields(fields) {
      let contentType = this[_contentType];
      if (contentType == null) {
        this[_contentType] = new media_type.MediaType.new("application", "x-www-form-urlencoded");
      } else if (contentType.mimeType !== "application/x-www-form-urlencoded") {
        dart.throw(new core.StateError.new("Cannot set the body fields of a Request with " + "content-type \"" + contentType.mimeType + "\"."));
      }
      this.body = utils.mapToQuery(fields, {encoding: this.encoding});
    }
    static ['_#new#tearOff'](method, url) {
      return new request$.Request.new(method, url);
    }
    finalize() {
      super.finalize();
      return byte_stream.ByteStream.fromBytes(this.bodyBytes);
    }
    get [_contentType]() {
      let contentType = this.headers[$_get]("content-type");
      if (contentType == null) return null;
      return media_type.MediaType.parse(contentType);
    }
    set [_contentType](value) {
      if (value == null) {
        this.headers[$remove]("content-type");
      } else {
        this.headers[$_set]("content-type", dart.toString(value));
      }
    }
    [_checkFinalized]() {
      if (!this.finalized) return;
      dart.throw(new core.StateError.new("Can't modify a finalized Request."));
    }
  };
  (request$.Request.new = function(method, url) {
    this[_defaultEncoding] = convert.utf8;
    this[_bodyBytes] = _native_typed_data.NativeUint8List.new(0);
    request$.Request.__proto__.new.call(this, method, url);
    ;
  }).prototype = request$.Request.prototype;
  dart.addTypeTests(request$.Request);
  dart.addTypeCaches(request$.Request);
  dart.setMethodSignature(request$.Request, () => ({
    __proto__: dart.getMethods(request$.Request.__proto__),
    [_checkFinalized]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(request$.Request, () => ({
    __proto__: dart.getGetters(request$.Request.__proto__),
    contentLength: core.int,
    encoding: convert.Encoding,
    bodyBytes: typed_data.Uint8List,
    body: core.String,
    bodyFields: core.Map$(core.String, core.String),
    [_contentType]: dart.nullable(media_type.MediaType)
  }));
  dart.setSetterSignature(request$.Request, () => ({
    __proto__: dart.getSetters(request$.Request.__proto__),
    encoding: convert.Encoding,
    bodyBytes: core.List$(core.int),
    body: core.String,
    bodyFields: core.Map$(core.String, core.String),
    [_contentType]: dart.nullable(media_type.MediaType)
  }));
  dart.setLibraryUri(request$.Request, I[6]);
  dart.setFieldSignature(request$.Request, () => ({
    __proto__: dart.getFields(request$.Request.__proto__),
    [_defaultEncoding]: dart.fieldType(convert.Encoding),
    [_bodyBytes]: dart.fieldType(typed_data.Uint8List)
  }));
  var bodyBytes$ = dart.privateName(response$, "Response.bodyBytes");
  var request$0 = dart.privateName(base_response, "BaseResponse.request");
  var statusCode$ = dart.privateName(base_response, "BaseResponse.statusCode");
  var reasonPhrase$ = dart.privateName(base_response, "BaseResponse.reasonPhrase");
  var contentLength$ = dart.privateName(base_response, "BaseResponse.contentLength");
  var headers$ = dart.privateName(base_response, "BaseResponse.headers");
  var isRedirect$ = dart.privateName(base_response, "BaseResponse.isRedirect");
  var persistentConnection$ = dart.privateName(base_response, "BaseResponse.persistentConnection");
  base_response.BaseResponse = class BaseResponse extends core.Object {
    get request() {
      return this[request$0];
    }
    set request(value) {
      super.request = value;
    }
    get statusCode() {
      return this[statusCode$];
    }
    set statusCode(value) {
      super.statusCode = value;
    }
    get reasonPhrase() {
      return this[reasonPhrase$];
    }
    set reasonPhrase(value) {
      super.reasonPhrase = value;
    }
    get contentLength() {
      return this[contentLength$];
    }
    set contentLength(value) {
      super.contentLength = value;
    }
    get headers() {
      return this[headers$];
    }
    set headers(value) {
      super.headers = value;
    }
    get isRedirect() {
      return this[isRedirect$];
    }
    set isRedirect(value) {
      super.isRedirect = value;
    }
    get persistentConnection() {
      return this[persistentConnection$];
    }
    set persistentConnection(value) {
      super.persistentConnection = value;
    }
  };
  (base_response.BaseResponse.new = function(statusCode, opts) {
    let contentLength = opts && 'contentLength' in opts ? opts.contentLength : null;
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : C[6] || CT.C6;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[statusCode$] = statusCode;
    this[contentLength$] = contentLength;
    this[request$0] = request;
    this[headers$] = headers;
    this[isRedirect$] = isRedirect;
    this[persistentConnection$] = persistentConnection;
    this[reasonPhrase$] = reasonPhrase;
    if (this.statusCode < 100) {
      dart.throw(new core.ArgumentError.new("Invalid status code " + dart.str(this.statusCode) + "."));
    } else if (this.contentLength != null && dart.nullCheck(this.contentLength) < 0) {
      dart.throw(new core.ArgumentError.new("Invalid content length " + dart.str(this.contentLength) + "."));
    }
  }).prototype = base_response.BaseResponse.prototype;
  dart.addTypeTests(base_response.BaseResponse);
  dart.addTypeCaches(base_response.BaseResponse);
  dart.setLibraryUri(base_response.BaseResponse, I[7]);
  dart.setFieldSignature(base_response.BaseResponse, () => ({
    __proto__: dart.getFields(base_response.BaseResponse.__proto__),
    request: dart.finalFieldType(dart.nullable(base_request.BaseRequest)),
    statusCode: dart.finalFieldType(core.int),
    reasonPhrase: dart.finalFieldType(dart.nullable(core.String)),
    contentLength: dart.finalFieldType(dart.nullable(core.int)),
    headers: dart.finalFieldType(core.Map$(core.String, core.String)),
    isRedirect: dart.finalFieldType(core.bool),
    persistentConnection: dart.finalFieldType(core.bool)
  }));
  response$.Response = class Response extends base_response.BaseResponse {
    get bodyBytes() {
      return this[bodyBytes$];
    }
    set bodyBytes(value) {
      super.bodyBytes = value;
    }
    get body() {
      return response$._encodingForHeaders(this.headers).decode(this.bodyBytes);
    }
    static ['_#new#tearOff'](body, statusCode, opts) {
      let request = opts && 'request' in opts ? opts.request : null;
      let headers = opts && 'headers' in opts ? opts.headers : C[6] || CT.C6;
      let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
      let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
      let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
      return new response$.Response.new(body, statusCode, {request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
    }
    static ['_#bytes#tearOff'](bodyBytes, statusCode, opts) {
      let request = opts && 'request' in opts ? opts.request : null;
      let headers = opts && 'headers' in opts ? opts.headers : C[6] || CT.C6;
      let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
      let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
      let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
      return new response$.Response.bytes(bodyBytes, statusCode, {request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
    }
    static fromStream(response) {
      return async.async(response$.Response, function* fromStream() {
        let body = (yield response.stream.toBytes());
        return new response$.Response.bytes(body, response.statusCode, {request: response.request, headers: response.headers, isRedirect: response.isRedirect, persistentConnection: response.persistentConnection, reasonPhrase: response.reasonPhrase});
      });
    }
  };
  (response$.Response.new = function(body, statusCode, opts) {
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : C[6] || CT.C6;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    response$.Response.bytes.call(this, response$._encodingForHeaders(headers).encode(body), statusCode, {request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
  }).prototype = response$.Response.prototype;
  (response$.Response.bytes = function(bodyBytes, statusCode, opts) {
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : C[6] || CT.C6;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[bodyBytes$] = utils.toUint8List(bodyBytes);
    response$.Response.__proto__.new.call(this, statusCode, {contentLength: bodyBytes[$length], request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
    ;
  }).prototype = response$.Response.prototype;
  dart.addTypeTests(response$.Response);
  dart.addTypeCaches(response$.Response);
  dart.setStaticMethodSignature(response$.Response, () => ['fromStream']);
  dart.setGetterSignature(response$.Response, () => ({
    __proto__: dart.getGetters(response$.Response.__proto__),
    body: core.String
  }));
  dart.setLibraryUri(response$.Response, I[8]);
  dart.setFieldSignature(response$.Response, () => ({
    __proto__: dart.getFields(response$.Response.__proto__),
    bodyBytes: dart.finalFieldType(typed_data.Uint8List)
  }));
  response$._encodingForHeaders = function _encodingForHeaders(headers) {
    return utils.encodingForCharset(response$._contentTypeForHeaders(headers).parameters[$_get]("charset"));
  };
  response$._contentTypeForHeaders = function _contentTypeForHeaders(headers) {
    let contentType = headers[$_get]("content-type");
    if (contentType != null) return media_type.MediaType.parse(contentType);
    return new media_type.MediaType.new("application", "octet-stream");
  };
  var _controller = dart.privateName(streamed_request, "_controller");
  streamed_request.StreamedRequest = class StreamedRequest extends base_request.BaseRequest {
    get sink() {
      return this[_controller].sink;
    }
    static ['_#new#tearOff'](method, url) {
      return new streamed_request.StreamedRequest.new(method, url);
    }
    finalize() {
      super.finalize();
      return new byte_stream.ByteStream.new(this[_controller].stream);
    }
  };
  (streamed_request.StreamedRequest.new = function(method, url) {
    this[_controller] = T.StreamControllerOfListOfint().new({sync: true});
    streamed_request.StreamedRequest.__proto__.new.call(this, method, url);
    ;
  }).prototype = streamed_request.StreamedRequest.prototype;
  dart.addTypeTests(streamed_request.StreamedRequest);
  dart.addTypeCaches(streamed_request.StreamedRequest);
  dart.setGetterSignature(streamed_request.StreamedRequest, () => ({
    __proto__: dart.getGetters(streamed_request.StreamedRequest.__proto__),
    sink: async.EventSink$(core.List$(core.int))
  }));
  dart.setLibraryUri(streamed_request.StreamedRequest, I[9]);
  dart.setFieldSignature(streamed_request.StreamedRequest, () => ({
    __proto__: dart.getFields(streamed_request.StreamedRequest.__proto__),
    [_controller]: dart.finalFieldType(async.StreamController$(core.List$(core.int)))
  }));
  var _sendUnstreamed = dart.privateName(base_client, "_sendUnstreamed");
  var _checkResponseSuccess = dart.privateName(base_client, "_checkResponseSuccess");
  base_client.BaseClient = class BaseClient extends core.Object {
    head(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this[_sendUnstreamed]("HEAD", url, headers);
    }
    get(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this[_sendUnstreamed]("GET", url, headers);
    }
    post(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("POST", url, headers, body, encoding);
    }
    put(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("PUT", url, headers, body, encoding);
    }
    patch(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("PATCH", url, headers, body, encoding);
    }
    delete(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("DELETE", url, headers, body, encoding);
    }
    read(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return async.async(core.String, (function* read() {
        let response = (yield this.get(url, {headers: headers}));
        this[_checkResponseSuccess](url, response);
        return response.body;
      }).bind(this));
    }
    readBytes(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return async.async(typed_data.Uint8List, (function* readBytes() {
        let response = (yield this.get(url, {headers: headers}));
        this[_checkResponseSuccess](url, response);
        return response.bodyBytes;
      }).bind(this));
    }
    [_sendUnstreamed](method, url, headers, body = null, encoding = null) {
      return async.async(response$.Response, (function* _sendUnstreamed() {
        let request = new request$.Request.new(method, url);
        if (headers != null) request.headers[$addAll](headers);
        if (encoding != null) request.encoding = encoding;
        if (body != null) {
          if (typeof body == 'string') {
            request.body = body;
          } else if (core.List.is(body)) {
            request.bodyBytes = body[$cast](core.int);
          } else if (core.Map.is(body)) {
            request.bodyFields = body[$cast](core.String, core.String);
          } else {
            dart.throw(new core.ArgumentError.new("Invalid request body \"" + dart.str(body) + "\"."));
          }
        }
        return response$.Response.fromStream(yield this.send(request));
      }).bind(this));
    }
    [_checkResponseSuccess](url, response) {
      if (response.statusCode < 400) return;
      let message = "Request to " + dart.str(url) + " failed with status " + dart.str(response.statusCode);
      if (response.reasonPhrase != null) {
        message = message + ": " + dart.str(response.reasonPhrase);
      }
      dart.throw(new exception.ClientException.new(message + ".", url));
    }
    close() {
    }
  };
  (base_client.BaseClient.new = function() {
    ;
  }).prototype = base_client.BaseClient.prototype;
  dart.addTypeTests(base_client.BaseClient);
  dart.addTypeCaches(base_client.BaseClient);
  base_client.BaseClient[dart.implements] = () => [client$.Client];
  dart.setMethodSignature(base_client.BaseClient, () => ({
    __proto__: dart.getMethods(base_client.BaseClient.__proto__),
    head: dart.fnType(async.Future$(response$.Response), [core.Uri], {headers: dart.nullable(core.Map$(core.String, core.String))}, {}),
    get: dart.fnType(async.Future$(response$.Response), [core.Uri], {headers: dart.nullable(core.Map$(core.String, core.String))}, {}),
    post: dart.fnType(async.Future$(response$.Response), [core.Uri], {body: dart.nullable(core.Object), encoding: dart.nullable(convert.Encoding), headers: dart.nullable(core.Map$(core.String, core.String))}, {}),
    put: dart.fnType(async.Future$(response$.Response), [core.Uri], {body: dart.nullable(core.Object), encoding: dart.nullable(convert.Encoding), headers: dart.nullable(core.Map$(core.String, core.String))}, {}),
    patch: dart.fnType(async.Future$(response$.Response), [core.Uri], {body: dart.nullable(core.Object), encoding: dart.nullable(convert.Encoding), headers: dart.nullable(core.Map$(core.String, core.String))}, {}),
    delete: dart.fnType(async.Future$(response$.Response), [core.Uri], {body: dart.nullable(core.Object), encoding: dart.nullable(convert.Encoding), headers: dart.nullable(core.Map$(core.String, core.String))}, {}),
    read: dart.fnType(async.Future$(core.String), [core.Uri], {headers: dart.nullable(core.Map$(core.String, core.String))}, {}),
    readBytes: dart.fnType(async.Future$(typed_data.Uint8List), [core.Uri], {headers: dart.nullable(core.Map$(core.String, core.String))}, {}),
    [_sendUnstreamed]: dart.fnType(async.Future$(response$.Response), [core.String, core.Uri, dart.nullable(core.Map$(core.String, core.String))], [dart.nullable(core.Object), dart.nullable(convert.Encoding)]),
    [_checkResponseSuccess]: dart.fnType(dart.void, [core.Uri, response$.Response]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(base_client.BaseClient, I[10]);
  var Utf8Codec__allowMalformed = dart.privateName(convert, "Utf8Codec._allowMalformed");
  byte_stream.ByteStream = class ByteStream extends async.StreamView$(core.List$(core.int)) {
    static ['_#new#tearOff'](stream) {
      return new byte_stream.ByteStream.new(stream);
    }
    static fromBytes(bytes) {
      return new byte_stream.ByteStream.new(T.StreamOfListOfint().value(bytes));
    }
    static ['_#fromBytes#tearOff'](bytes) {
      return byte_stream.ByteStream.fromBytes(bytes);
    }
    toBytes() {
      let completer = T.CompleterOfUint8List().new();
      let sink = new convert._ByteCallbackSink.new(dart.fn(bytes => completer.complete(_native_typed_data.NativeUint8List.fromList(bytes)), T.ListOfintTovoid()));
      this.listen(T.ListOfintTovoid().as(dart.bind(sink, 'add')), {onError: dart.bind(completer, 'completeError'), onDone: dart.bind(sink, 'close'), cancelOnError: true});
      return completer.future;
    }
    bytesToString(encoding = C[7] || CT.C7) {
      return encoding.decodeStream(this);
    }
    toStringStream(encoding = C[7] || CT.C7) {
      return encoding.decoder.bind(this);
    }
  };
  (byte_stream.ByteStream.new = function(stream) {
    byte_stream.ByteStream.__proto__.new.call(this, stream);
    ;
  }).prototype = byte_stream.ByteStream.prototype;
  dart.addTypeTests(byte_stream.ByteStream);
  dart.addTypeCaches(byte_stream.ByteStream);
  dart.setMethodSignature(byte_stream.ByteStream, () => ({
    __proto__: dart.getMethods(byte_stream.ByteStream.__proto__),
    toBytes: dart.fnType(async.Future$(typed_data.Uint8List), []),
    bytesToString: dart.fnType(async.Future$(core.String), [], [convert.Encoding]),
    toStringStream: dart.fnType(async.Stream$(core.String), [], [convert.Encoding])
  }));
  dart.setStaticMethodSignature(byte_stream.ByteStream, () => ['fromBytes']);
  dart.setLibraryUri(byte_stream.ByteStream, I[11]);
  var field$ = dart.privateName(multipart_file, "MultipartFile.field");
  var length$ = dart.privateName(multipart_file, "MultipartFile.length");
  var filename$ = dart.privateName(multipart_file, "MultipartFile.filename");
  var contentType$ = dart.privateName(multipart_file, "MultipartFile.contentType");
  var _isFinalized = dart.privateName(multipart_file, "_isFinalized");
  var _stream = dart.privateName(multipart_file, "_stream");
  multipart_file.MultipartFile = class MultipartFile extends core.Object {
    get field() {
      return this[field$];
    }
    set field(value) {
      super.field = value;
    }
    get length() {
      return this[length$];
    }
    set length(value) {
      super.length = value;
    }
    get filename() {
      return this[filename$];
    }
    set filename(value) {
      super.filename = value;
    }
    get contentType() {
      return this[contentType$];
    }
    set contentType(value) {
      super.contentType = value;
    }
    get isFinalized() {
      return this[_isFinalized];
    }
    static ['_#new#tearOff'](field, stream, length, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      return new multipart_file.MultipartFile.new(field, stream, length, {filename: filename, contentType: contentType});
    }
    static fromBytes(field, value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      let stream = byte_stream.ByteStream.fromBytes(value);
      return new multipart_file.MultipartFile.new(field, stream, value[$length], {filename: filename, contentType: contentType});
    }
    static ['_#fromBytes#tearOff'](field, value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      return multipart_file.MultipartFile.fromBytes(field, value, {filename: filename, contentType: contentType});
    }
    static fromString(field, value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      contentType == null ? contentType = new media_type.MediaType.new("text", "plain") : null;
      let encoding = utils.encodingForCharset(contentType.parameters[$_get]("charset"), convert.utf8);
      contentType = contentType.change({parameters: new (T.IdentityMapOfString$String()).from(["charset", encoding.name])});
      return multipart_file.MultipartFile.fromBytes(field, encoding.encode(value), {filename: filename, contentType: contentType});
    }
    static ['_#fromString#tearOff'](field, value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      return multipart_file.MultipartFile.fromString(field, value, {filename: filename, contentType: contentType});
    }
    static fromPath(field, filePath, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      return multipart_file_stub.multipartFileFromPath(field, filePath, {filename: filename, contentType: contentType});
    }
    finalize() {
      if (this.isFinalized) {
        dart.throw(new core.StateError.new("Can't finalize a finalized MultipartFile."));
      }
      this[_isFinalized] = true;
      return this[_stream];
    }
  };
  (multipart_file.MultipartFile.new = function(field, stream, length, opts) {
    let t3;
    let filename = opts && 'filename' in opts ? opts.filename : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    this[_isFinalized] = false;
    this[field$] = field;
    this[length$] = length;
    this[filename$] = filename;
    this[_stream] = utils.toByteStream(stream);
    this[contentType$] = (t3 = contentType, t3 == null ? new media_type.MediaType.new("application", "octet-stream") : t3);
    ;
  }).prototype = multipart_file.MultipartFile.prototype;
  dart.addTypeTests(multipart_file.MultipartFile);
  dart.addTypeCaches(multipart_file.MultipartFile);
  dart.setMethodSignature(multipart_file.MultipartFile, () => ({
    __proto__: dart.getMethods(multipart_file.MultipartFile.__proto__),
    finalize: dart.fnType(byte_stream.ByteStream, [])
  }));
  dart.setStaticMethodSignature(multipart_file.MultipartFile, () => ['fromBytes', 'fromString', 'fromPath']);
  dart.setGetterSignature(multipart_file.MultipartFile, () => ({
    __proto__: dart.getGetters(multipart_file.MultipartFile.__proto__),
    isFinalized: core.bool
  }));
  dart.setLibraryUri(multipart_file.MultipartFile, I[12]);
  dart.setFieldSignature(multipart_file.MultipartFile, () => ({
    __proto__: dart.getFields(multipart_file.MultipartFile.__proto__),
    field: dart.finalFieldType(core.String),
    length: dart.finalFieldType(core.int),
    filename: dart.finalFieldType(dart.nullable(core.String)),
    contentType: dart.finalFieldType(media_type.MediaType),
    [_stream]: dart.finalFieldType(byte_stream.ByteStream),
    [_isFinalized]: dart.fieldType(core.bool)
  }));
  var fields = dart.privateName(multipart_request, "MultipartRequest.fields");
  var files = dart.privateName(multipart_request, "MultipartRequest.files");
  var _headerForField = dart.privateName(multipart_request, "_headerForField");
  var _headerForFile = dart.privateName(multipart_request, "_headerForFile");
  var _boundaryString = dart.privateName(multipart_request, "_boundaryString");
  var _finalize = dart.privateName(multipart_request, "_finalize");
  var _browserEncode = dart.privateName(multipart_request, "_browserEncode");
  multipart_request.MultipartRequest = class MultipartRequest extends base_request.BaseRequest {
    get fields() {
      return this[fields];
    }
    set fields(value) {
      super.fields = value;
    }
    get files() {
      return this[files];
    }
    set files(value) {
      super.files = value;
    }
    static ['_#new#tearOff'](method, url) {
      return new multipart_request.MultipartRequest.new(method, url);
    }
    get contentLength() {
      let length = 0;
      this.fields[$forEach](dart.fn((name, value) => {
        length = length + ("--".length + 70 + "\r\n".length + convert.utf8.encode(this[_headerForField](name, value))[$length] + convert.utf8.encode(value)[$length] + "\r\n".length);
      }, T.StringAndStringTovoid()));
      for (let file of this.files) {
        length = length + ("--".length + 70 + "\r\n".length + convert.utf8.encode(this[_headerForFile](file))[$length] + file.length + "\r\n".length);
      }
      return length + "--".length + 70 + "--\r\n".length;
    }
    set contentLength(value) {
      dart.throw(new core.UnsupportedError.new("Cannot set the contentLength property of " + "multipart requests."));
    }
    finalize() {
      let boundary = this[_boundaryString]();
      this.headers[$_set]("content-type", "multipart/form-data; boundary=" + boundary);
      super.finalize();
      return new byte_stream.ByteStream.new(this[_finalize](boundary));
    }
    [_finalize](boundary) {
      return new (T._AsyncStarImplOfListOfint()).new((function* _finalize(stream) {
        let line = C[8] || CT.C8;
        let separator = convert.utf8.encode("--" + boundary + "\r\n");
        let close = convert.utf8.encode("--" + boundary + "--\r\n");
        for (let field of this.fields[$entries]) {
          if (stream.add(separator)) return;
          yield;
          if (stream.add(convert.utf8.encode(this[_headerForField](field.key, field.value)))) return;
          yield;
          if (stream.add(convert.utf8.encode(field.value))) return;
          yield;
          if (stream.add(line)) return;
          yield;
        }
        for (let file of this.files) {
          if (stream.add(separator)) return;
          yield;
          if (stream.add(convert.utf8.encode(this[_headerForFile](file)))) return;
          yield;
          if (stream.addStream(file.finalize())) return;
          yield;
          if (stream.add(line)) return;
          yield;
        }
        if (stream.add(close)) return;
        yield;
      }).bind(this)).stream;
    }
    [_headerForField](name, value) {
      let header = "content-disposition: form-data; name=\"" + this[_browserEncode](name) + "\"";
      if (!utils.isPlainAscii(value)) {
        header = header + "\r\n" + "content-type: text/plain; charset=utf-8\r\n" + "content-transfer-encoding: binary";
      }
      return header + "\r\n\r\n";
    }
    [_headerForFile](file) {
      let header = "content-type: " + dart.str(file.contentType) + "\r\n" + "content-disposition: form-data; name=\"" + this[_browserEncode](file.field) + "\"";
      if (file.filename != null) {
        header = header + "; filename=\"" + this[_browserEncode](dart.nullCheck(file.filename)) + "\"";
      }
      return header + "\r\n\r\n";
    }
    [_browserEncode](value) {
      return value[$replaceAll](multipart_request._newlineRegExp, "%0D%0A")[$replaceAll]("\"", "%22");
    }
    [_boundaryString]() {
      let prefix = "dart-http-boundary-";
      let list = T.ListOfint().generate(70 - prefix.length, dart.fn(index => boundary_characters.boundaryCharacters[$_get](multipart_request.MultipartRequest._random.nextInt(boundary_characters.boundaryCharacters[$length])), T.intToint()), {growable: false});
      return prefix + core.String.fromCharCodes(list);
    }
  };
  (multipart_request.MultipartRequest.new = function(method, url) {
    this[fields] = new (T.IdentityMapOfString$String()).new();
    this[files] = T.JSArrayOfMultipartFile().of([]);
    multipart_request.MultipartRequest.__proto__.new.call(this, method, url);
    ;
  }).prototype = multipart_request.MultipartRequest.prototype;
  dart.addTypeTests(multipart_request.MultipartRequest);
  dart.addTypeCaches(multipart_request.MultipartRequest);
  dart.setMethodSignature(multipart_request.MultipartRequest, () => ({
    __proto__: dart.getMethods(multipart_request.MultipartRequest.__proto__),
    [_finalize]: dart.fnType(async.Stream$(core.List$(core.int)), [core.String]),
    [_headerForField]: dart.fnType(core.String, [core.String, core.String]),
    [_headerForFile]: dart.fnType(core.String, [multipart_file.MultipartFile]),
    [_browserEncode]: dart.fnType(core.String, [core.String]),
    [_boundaryString]: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(multipart_request.MultipartRequest, () => ({
    __proto__: dart.getGetters(multipart_request.MultipartRequest.__proto__),
    contentLength: core.int
  }));
  dart.setLibraryUri(multipart_request.MultipartRequest, I[13]);
  dart.setFieldSignature(multipart_request.MultipartRequest, () => ({
    __proto__: dart.getFields(multipart_request.MultipartRequest.__proto__),
    fields: dart.finalFieldType(core.Map$(core.String, core.String)),
    files: dart.finalFieldType(core.List$(multipart_file.MultipartFile))
  }));
  dart.setStaticFieldSignature(multipart_request.MultipartRequest, () => ['_boundaryLength', '_random']);
  dart.defineLazy(multipart_request.MultipartRequest, {
    /*multipart_request.MultipartRequest._boundaryLength*/get _boundaryLength() {
      return 70;
    },
    /*multipart_request.MultipartRequest._random*/get _random() {
      return math.Random.new();
    }
  }, false);
  dart.defineLazy(multipart_request, {
    /*multipart_request._newlineRegExp*/get _newlineRegExp() {
      return core.RegExp.new("\\r\\n|\\r|\\n");
    }
  }, false);
  var stream$ = dart.privateName(streamed_response, "StreamedResponse.stream");
  streamed_response.StreamedResponse = class StreamedResponse extends base_response.BaseResponse {
    get stream() {
      return this[stream$];
    }
    set stream(value) {
      super.stream = value;
    }
    static ['_#new#tearOff'](stream, statusCode, opts) {
      let contentLength = opts && 'contentLength' in opts ? opts.contentLength : null;
      let request = opts && 'request' in opts ? opts.request : null;
      let headers = opts && 'headers' in opts ? opts.headers : C[6] || CT.C6;
      let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
      let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
      let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
      return new streamed_response.StreamedResponse.new(stream, statusCode, {contentLength: contentLength, request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
    }
  };
  (streamed_response.StreamedResponse.new = function(stream, statusCode, opts) {
    let contentLength = opts && 'contentLength' in opts ? opts.contentLength : null;
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : C[6] || CT.C6;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[stream$] = utils.toByteStream(stream);
    streamed_response.StreamedResponse.__proto__.new.call(this, statusCode, {contentLength: contentLength, request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
    ;
  }).prototype = streamed_response.StreamedResponse.prototype;
  dart.addTypeTests(streamed_response.StreamedResponse);
  dart.addTypeCaches(streamed_response.StreamedResponse);
  dart.setLibraryUri(streamed_response.StreamedResponse, I[14]);
  dart.setFieldSignature(streamed_response.StreamedResponse, () => ({
    __proto__: dart.getFields(streamed_response.StreamedResponse.__proto__),
    stream: dart.finalFieldType(byte_stream.ByteStream)
  }));
  var radius = dart.privateName(bubbles, "Bubble.radius");
  var color = dart.privateName(bubbles, "Bubble.color");
  var __Bubble_position = dart.privateName(bubbles, "_#Bubble#position");
  var __Bubble_targetRadius = dart.privateName(bubbles, "_#Bubble#targetRadius");
  var __Bubble_popping = dart.privateName(bubbles, "_#Bubble#popping");
  bubbles.Bubble = class Bubble extends core.Object {
    get radius() {
      return this[radius];
    }
    set radius(value) {
      this[radius] = value;
    }
    get color() {
      return this[color];
    }
    set color(value) {
      this[color] = value;
    }
    get position() {
      let t3;
      t3 = this[__Bubble_position];
      return t3 == null ? dart.throw(new _internal.LateError.fieldNI("position")) : t3;
    }
    set position(position$35param) {
      this[__Bubble_position] = position$35param;
    }
    get targetRadius() {
      let t3;
      t3 = this[__Bubble_targetRadius];
      return t3 == null ? dart.throw(new _internal.LateError.fieldNI("targetRadius")) : t3;
    }
    set targetRadius(targetRadius$35param) {
      this[__Bubble_targetRadius] = targetRadius$35param;
    }
    get popping() {
      let t3;
      t3 = this[__Bubble_popping];
      return t3 == null ? dart.throw(new _internal.LateError.fieldNI("popping")) : t3;
    }
    set popping(popping$35param) {
      this[__Bubble_popping] = popping$35param;
    }
    static ['_#new#tearOff']() {
      return new bubbles.Bubble.new();
    }
  };
  (bubbles.Bubble.new = function() {
    this[__Bubble_position] = null;
    this[radius] = null;
    this[__Bubble_targetRadius] = null;
    this[color] = null;
    this[__Bubble_popping] = null;
    ;
  }).prototype = bubbles.Bubble.prototype;
  dart.addTypeTests(bubbles.Bubble);
  dart.addTypeCaches(bubbles.Bubble);
  dart.setGetterSignature(bubbles.Bubble, () => ({
    __proto__: dart.getGetters(bubbles.Bubble.__proto__),
    position: ui.Offset,
    targetRadius: core.double,
    popping: core.bool
  }));
  dart.setSetterSignature(bubbles.Bubble, () => ({
    __proto__: dart.getSetters(bubbles.Bubble.__proto__),
    position: ui.Offset,
    targetRadius: core.double,
    popping: core.bool
  }));
  dart.setLibraryUri(bubbles.Bubble, I[15]);
  dart.setFieldSignature(bubbles.Bubble, () => ({
    __proto__: dart.getFields(bubbles.Bubble.__proto__),
    [__Bubble_position]: dart.fieldType(dart.nullable(ui.Offset)),
    radius: dart.fieldType(dart.nullable(core.double)),
    [__Bubble_targetRadius]: dart.fieldType(dart.nullable(core.double)),
    color: dart.fieldType(dart.nullable(ui.Color)),
    [__Bubble_popping]: dart.fieldType(dart.nullable(core.bool))
  }));
  var bubbleCount$ = dart.privateName(bubbles, "BubbleOptions.bubbleCount");
  var minTargetRadius$ = dart.privateName(bubbles, "BubbleOptions.minTargetRadius");
  var maxTargetRadius$ = dart.privateName(bubbles, "BubbleOptions.maxTargetRadius");
  var growthRate$ = dart.privateName(bubbles, "BubbleOptions.growthRate");
  var popRate$ = dart.privateName(bubbles, "BubbleOptions.popRate");
  bubbles.BubbleOptions = class BubbleOptions extends core.Object {
    get bubbleCount() {
      return this[bubbleCount$];
    }
    set bubbleCount(value) {
      super.bubbleCount = value;
    }
    get minTargetRadius() {
      return this[minTargetRadius$];
    }
    set minTargetRadius(value) {
      super.minTargetRadius = value;
    }
    get maxTargetRadius() {
      return this[maxTargetRadius$];
    }
    set maxTargetRadius(value) {
      super.maxTargetRadius = value;
    }
    get growthRate() {
      return this[growthRate$];
    }
    set growthRate(value) {
      super.growthRate = value;
    }
    get popRate() {
      return this[popRate$];
    }
    set popRate(value) {
      super.popRate = value;
    }
    static ['_#new#tearOff'](opts) {
      let bubbleCount = opts && 'bubbleCount' in opts ? opts.bubbleCount : 20;
      let minTargetRadius = opts && 'minTargetRadius' in opts ? opts.minTargetRadius : 15;
      let maxTargetRadius = opts && 'maxTargetRadius' in opts ? opts.maxTargetRadius : 50;
      let growthRate = opts && 'growthRate' in opts ? opts.growthRate : 10;
      let popRate = opts && 'popRate' in opts ? opts.popRate : 150;
      return new bubbles.BubbleOptions.new({bubbleCount: bubbleCount, minTargetRadius: minTargetRadius, maxTargetRadius: maxTargetRadius, growthRate: growthRate, popRate: popRate});
    }
    copyWith(opts) {
      let t3, t3$, t3$0, t3$1, t3$2;
      let bubbleCount = opts && 'bubbleCount' in opts ? opts.bubbleCount : null;
      let minTargetRadius = opts && 'minTargetRadius' in opts ? opts.minTargetRadius : null;
      let maxTargetRadius = opts && 'maxTargetRadius' in opts ? opts.maxTargetRadius : null;
      let growthRate = opts && 'growthRate' in opts ? opts.growthRate : null;
      let popRate = opts && 'popRate' in opts ? opts.popRate : null;
      return new bubbles.BubbleOptions.new({bubbleCount: (t3 = bubbleCount, t3 == null ? this.bubbleCount : t3), minTargetRadius: (t3$ = minTargetRadius, t3$ == null ? this.minTargetRadius : t3$), maxTargetRadius: (t3$0 = maxTargetRadius, t3$0 == null ? this.maxTargetRadius : t3$0), growthRate: (t3$1 = growthRate, t3$1 == null ? this.growthRate : t3$1), popRate: (t3$2 = popRate, t3$2 == null ? this.popRate : t3$2)});
    }
  };
  (bubbles.BubbleOptions.new = function(opts) {
    let bubbleCount = opts && 'bubbleCount' in opts ? opts.bubbleCount : 20;
    let minTargetRadius = opts && 'minTargetRadius' in opts ? opts.minTargetRadius : 15;
    let maxTargetRadius = opts && 'maxTargetRadius' in opts ? opts.maxTargetRadius : 50;
    let growthRate = opts && 'growthRate' in opts ? opts.growthRate : 10;
    let popRate = opts && 'popRate' in opts ? opts.popRate : 150;
    this[bubbleCount$] = bubbleCount;
    this[minTargetRadius$] = minTargetRadius;
    this[maxTargetRadius$] = maxTargetRadius;
    this[growthRate$] = growthRate;
    this[popRate$] = popRate;
    if (!(bubbleCount >= 0)) dart.assertFailed(null, I[16], 51, 16, "bubbleCount >= 0");
    if (!(minTargetRadius > 0)) dart.assertFailed(null, I[16], 52, 16, "minTargetRadius > 0");
    if (!(maxTargetRadius > 0)) dart.assertFailed(null, I[16], 53, 16, "maxTargetRadius > 0");
    if (!(growthRate > 0)) dart.assertFailed(null, I[16], 54, 16, "growthRate > 0");
    if (!(popRate > 0)) dart.assertFailed(null, I[16], 55, 16, "popRate > 0");
    ;
  }).prototype = bubbles.BubbleOptions.prototype;
  dart.addTypeTests(bubbles.BubbleOptions);
  dart.addTypeCaches(bubbles.BubbleOptions);
  dart.setMethodSignature(bubbles.BubbleOptions, () => ({
    __proto__: dart.getMethods(bubbles.BubbleOptions.__proto__),
    copyWith: dart.fnType(bubbles.BubbleOptions, [], {bubbleCount: dart.nullable(core.int), growthRate: dart.nullable(core.double), maxTargetRadius: dart.nullable(core.double), minTargetRadius: dart.nullable(core.double), popRate: dart.nullable(core.double)}, {})
  }));
  dart.setLibraryUri(bubbles.BubbleOptions, I[15]);
  dart.setFieldSignature(bubbles.BubbleOptions, () => ({
    __proto__: dart.getFields(bubbles.BubbleOptions.__proto__),
    bubbleCount: dart.finalFieldType(core.int),
    minTargetRadius: dart.finalFieldType(core.double),
    maxTargetRadius: dart.finalFieldType(core.double),
    growthRate: dart.finalFieldType(core.double),
    popRate: dart.finalFieldType(core.double)
  }));
  var bubbles$ = dart.privateName(bubbles, "BubblesBehaviour.bubbles");
  var deltaTargetRadius = dart.privateName(bubbles, "BubblesBehaviour.deltaTargetRadius");
  var onPop$ = dart.privateName(bubbles, "BubblesBehaviour.onPop");
  var _options = dart.privateName(bubbles, "_options");
  var _initBubble = dart.privateName(bubbles, "_initBubble");
  var _popBubble = dart.privateName(bubbles, "_popBubble");
  var _onTap = dart.privateName(bubbles, "_onTap");
  bubbles.BubblesBehaviour = class BubblesBehaviour extends animated_background.Behaviour {
    get bubbles() {
      return this[bubbles$];
    }
    set bubbles(value) {
      this[bubbles$] = value;
    }
    get deltaTargetRadius() {
      return this[deltaTargetRadius];
    }
    set deltaTargetRadius(value) {
      this[deltaTargetRadius] = value;
    }
    get onPop() {
      return this[onPop$];
    }
    set onPop(value) {
      this[onPop$] = value;
    }
    get options() {
      return dart.nullCheck(this[_options]);
    }
    set options(value) {
      if (value[$_equals](this[_options])) return;
      let oldOptions = this[_options];
      this[_options] = value;
      this.onOptionsUpdate(oldOptions);
    }
    static ['_#new#tearOff'](opts) {
      let options = opts && 'options' in opts ? opts.options : C[9] || CT.C9;
      let onPop = opts && 'onPop' in opts ? opts.onPop : null;
      return new bubbles.BubblesBehaviour.new({options: options, onPop: onPop});
    }
    init() {
      this.bubbles = this.generateBubbles(this.options.bubbleCount);
    }
    generateBubbles(num) {
      return T.ListOfBubble().generate(num, dart.fn(_ => {
        let bubble = new bubbles.Bubble.new();
        this[_initBubble](bubble);
        return bubble;
      }, T.intToBubble()));
    }
    [_initBubble](bubble) {
      bubble.position = new ui.Offset.new(bubbles.BubblesBehaviour.random.nextDouble() * dart.nullCheck(this.size).width, bubbles.BubblesBehaviour.random.nextDouble() * dart.nullCheck(this.size).height);
      let deltaTargetRadius = this.options.maxTargetRadius - this.options.minTargetRadius;
      bubble.targetRadius = bubbles.BubblesBehaviour.random.nextDouble() * deltaTargetRadius + this.options.minTargetRadius;
      if (bubble.radius == null) {
        bubble.radius = bubbles.BubblesBehaviour.random.nextDouble() * bubble.targetRadius;
      } else {
        bubble.radius = 0;
      }
      bubble.color = new colors.HSVColor.fromAHSV(bubbles.BubblesBehaviour.random.nextDouble() * 0.3 + 0.2, bubbles.BubblesBehaviour.random.nextInt(45) * 8, bubbles.BubblesBehaviour.random.nextDouble() * 0.6 + 0.3, bubbles.BubblesBehaviour.random.nextDouble() * 0.6 + 0.3).toColor();
      bubble.popping = false;
    }
    [_popBubble](bubble, wasTap) {
      let t3;
      bubble.popping = true;
      bubble.radius = 0.2 * bubble.targetRadius;
      t3 = bubble;
      t3.targetRadius = t3.targetRadius * 0.5;
      if (this.onPop != null) dart.nullCheck(this.onPop)(wasTap);
    }
    initFrom(oldBehaviour) {
      if (bubbles.BubblesBehaviour.is(oldBehaviour)) {
        this.bubbles = oldBehaviour.bubbles;
        this.onOptionsUpdate(oldBehaviour.options);
      }
    }
    onOptionsUpdate(oldOptions) {
      if (this.bubbles == null) return;
      if (dart.nullCheck(this.bubbles)[$length] > this.options.bubbleCount)
        dart.nullCheck(this.bubbles)[$removeRange](0, dart.nullCheck(this.bubbles)[$length] - this.options.bubbleCount);
      else if (dart.nullCheck(this.bubbles)[$length] < this.options.bubbleCount) {
        let numToSpawn = this.options.bubbleCount - dart.nullCheck(this.bubbles)[$length];
        let newBubbles = this.generateBubbles(numToSpawn);
        dart.nullCheck(this.bubbles)[$addAll](newBubbles);
      }
    }
    get isInitialized() {
      return this.bubbles != null;
    }
    paint(context, offset) {
      let t3;
      let canvas = context.canvas;
      let paint = (t3 = ui.Paint.new(), (() => {
        t3.strokeWidth = 3;
        t3.strokeCap = ui.StrokeCap.round;
        t3.style = ui.PaintingStyle.stroke;
        return t3;
      })());
      for (let bubble of dart.nullCheck(this.bubbles)) {
        paint.color = dart.nullCheck(bubble.color);
        if (!bubble.popping) {
          canvas.drawCircle(bubble.position, dart.nullCheck(bubble.radius), paint);
        } else {
          let radiusSqrt = dart.nullCheck(bubble.radius) * 0.707;
          let targetRadiusSqrt = bubble.targetRadius * 0.707;
          canvas.drawLine(bubble.position['+'](new ui.Offset.new(radiusSqrt, radiusSqrt)), bubble.position['+'](new ui.Offset.new(targetRadiusSqrt, targetRadiusSqrt)), paint);
          canvas.drawLine(bubble.position['+'](new ui.Offset.new(radiusSqrt, -radiusSqrt)), bubble.position['+'](new ui.Offset.new(targetRadiusSqrt, -targetRadiusSqrt)), paint);
          canvas.drawLine(bubble.position['+'](new ui.Offset.new(-radiusSqrt, radiusSqrt)), bubble.position['+'](new ui.Offset.new(-targetRadiusSqrt, targetRadiusSqrt)), paint);
          canvas.drawLine(bubble.position['+'](new ui.Offset.new(-radiusSqrt, -radiusSqrt)), bubble.position['+'](new ui.Offset.new(-targetRadiusSqrt, -targetRadiusSqrt)), paint);
          canvas.drawLine(bubble.position['+'](new ui.Offset.new(0, dart.nullCheck(bubble.radius))), bubble.position['+'](new ui.Offset.new(0, bubble.targetRadius)), paint);
          canvas.drawLine(bubble.position['+'](new ui.Offset.new(0, -dart.nullCheck(bubble.radius))), bubble.position['+'](new ui.Offset.new(0, -bubble.targetRadius)), paint);
          canvas.drawLine(bubble.position['+'](new ui.Offset.new(dart.nullCheck(bubble.radius), 0)), bubble.position['+'](new ui.Offset.new(bubble.targetRadius, 0)), paint);
          canvas.drawLine(bubble.position['+'](new ui.Offset.new(-dart.nullCheck(bubble.radius), 0)), bubble.position['+'](new ui.Offset.new(-bubble.targetRadius, 0)), paint);
        }
      }
    }
    tick(delta, elapsed) {
      if (!this.isInitialized) return false;
      for (let bubble of dart.nullCheck(this.bubbles)) {
        bubble.radius = dart.nullCheck(bubble.radius) + delta * (bubble.popping ? this.options.popRate : this.options.growthRate);
        if (dart.nullCheck(bubble.radius) >= bubble.targetRadius) {
          if (bubble.popping)
            this[_initBubble](bubble);
          else
            this[_popBubble](bubble, false);
        }
      }
      return true;
    }
    builder(context, constraints, child) {
      return new gesture_detector.GestureDetector.new({onTapDown: dart.fn(details => this[_onTap](context, details.globalPosition), T.TapDownDetailsTovoid()), child: new basic.ConstrainedBox.new({constraints: new box.BoxConstraints.new({minHeight: 1 / 0, minWidth: 1 / 0}), child: super.builder(context, constraints, child)})});
    }
    [_onTap](context, globalPosition) {
      let renderBox = box.RenderBox.as(context.findRenderObject());
      let localPosition = renderBox.globalToLocal(globalPosition);
      for (let bubble of dart.nullCheck(this.bubbles)) {
        if (bubble.position['-'](localPosition).distanceSquared < dart.nullCheck(bubble.radius) * dart.nullCheck(bubble.radius) * 1.2) {
          this[_popBubble](bubble, true);
        }
      }
    }
  };
  (bubbles.BubblesBehaviour.new = function(opts) {
    let options = opts && 'options' in opts ? opts.options : C[9] || CT.C9;
    let onPop = opts && 'onPop' in opts ? opts.onPop : null;
    this[bubbles$] = null;
    this[deltaTargetRadius] = null;
    this[_options] = null;
    this[onPop$] = onPop;
    bubbles.BubblesBehaviour.__proto__.new.call(this);
    this[_options] = options;
  }).prototype = bubbles.BubblesBehaviour.prototype;
  dart.addTypeTests(bubbles.BubblesBehaviour);
  dart.addTypeCaches(bubbles.BubblesBehaviour);
  dart.setMethodSignature(bubbles.BubblesBehaviour, () => ({
    __proto__: dart.getMethods(bubbles.BubblesBehaviour.__proto__),
    init: dart.fnType(dart.void, []),
    generateBubbles: dart.fnType(core.List$(bubbles.Bubble), [core.int]),
    [_initBubble]: dart.fnType(dart.void, [bubbles.Bubble]),
    [_popBubble]: dart.fnType(dart.void, [bubbles.Bubble, core.bool]),
    initFrom: dart.fnType(dart.void, [animated_background.Behaviour]),
    onOptionsUpdate: dart.fnType(dart.void, [dart.nullable(bubbles.BubbleOptions)]),
    paint: dart.fnType(dart.void, [object.PaintingContext, ui.Offset]),
    tick: dart.fnType(core.bool, [core.double, core.Duration]),
    [_onTap]: dart.fnType(dart.void, [framework.BuildContext, ui.Offset])
  }));
  dart.setGetterSignature(bubbles.BubblesBehaviour, () => ({
    __proto__: dart.getGetters(bubbles.BubblesBehaviour.__proto__),
    options: bubbles.BubbleOptions,
    isInitialized: core.bool
  }));
  dart.setSetterSignature(bubbles.BubblesBehaviour, () => ({
    __proto__: dart.getSetters(bubbles.BubblesBehaviour.__proto__),
    options: bubbles.BubbleOptions
  }));
  dart.setLibraryUri(bubbles.BubblesBehaviour, I[15]);
  dart.setFieldSignature(bubbles.BubblesBehaviour, () => ({
    __proto__: dart.getFields(bubbles.BubblesBehaviour.__proto__),
    bubbles: dart.fieldType(dart.nullable(core.List$(bubbles.Bubble))),
    deltaTargetRadius: dart.fieldType(dart.nullable(core.double)),
    onPop: dart.fieldType(dart.nullable(dart.fnType(dart.dynamic, [core.bool]))),
    [_options]: dart.fieldType(dart.nullable(bubbles.BubbleOptions))
  }));
  dart.setStaticFieldSignature(bubbles.BubblesBehaviour, () => ['random', 'sqrtInverse']);
  dart.defineLazy(bubbles.BubblesBehaviour, {
    /*bubbles.BubblesBehaviour.random*/get random() {
      return math.Random.new();
    },
    set random(_) {},
    /*bubbles.BubblesBehaviour.sqrtInverse*/get sqrtInverse() {
      return 0.707;
    }
  }, false);
  var position = dart.privateName(lines, "Line.position");
  var color$ = dart.privateName(lines, "Line.color");
  var __Line_speed = dart.privateName(lines, "_#Line#speed");
  var __Line_thickness = dart.privateName(lines, "_#Line#thickness");
  lines.Line = class Line extends core.Object {
    get position() {
      return this[position];
    }
    set position(value) {
      this[position] = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      this[color$] = value;
    }
    get speed() {
      let t3;
      t3 = this[__Line_speed];
      return t3 == null ? dart.throw(new _internal.LateError.fieldNI("speed")) : t3;
    }
    set speed(speed$35param) {
      this[__Line_speed] = speed$35param;
    }
    get thickness() {
      let t3;
      t3 = this[__Line_thickness];
      return t3 == null ? dart.throw(new _internal.LateError.fieldNI("thickness")) : t3;
    }
    set thickness(thickness$35param) {
      this[__Line_thickness] = thickness$35param;
    }
    static ['_#new#tearOff']() {
      return new lines.Line.new();
    }
  };
  (lines.Line.new = function() {
    this[position] = null;
    this[__Line_speed] = null;
    this[__Line_thickness] = null;
    this[color$] = null;
    ;
  }).prototype = lines.Line.prototype;
  dart.addTypeTests(lines.Line);
  dart.addTypeCaches(lines.Line);
  dart.setGetterSignature(lines.Line, () => ({
    __proto__: dart.getGetters(lines.Line.__proto__),
    speed: core.double,
    thickness: core.int
  }));
  dart.setSetterSignature(lines.Line, () => ({
    __proto__: dart.getSetters(lines.Line.__proto__),
    speed: core.double,
    thickness: core.int
  }));
  dart.setLibraryUri(lines.Line, I[17]);
  dart.setFieldSignature(lines.Line, () => ({
    __proto__: dart.getFields(lines.Line.__proto__),
    position: dart.fieldType(dart.nullable(ui.Offset)),
    [__Line_speed]: dart.fieldType(dart.nullable(core.double)),
    [__Line_thickness]: dart.fieldType(dart.nullable(core.int)),
    color: dart.fieldType(dart.nullable(ui.Color))
  }));
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  lines.LineDirection = class LineDirection extends core._Enum {
    toString() {
      return "LineDirection." + this[_name];
    }
  };
  (lines.LineDirection.new = function(index, name) {
    lines.LineDirection.__proto__.new.call(this, index, name);
    ;
  }).prototype = lines.LineDirection.prototype;
  dart.addTypeTests(lines.LineDirection);
  dart.addTypeCaches(lines.LineDirection);
  dart.setLibraryUri(lines.LineDirection, I[17]);
  dart.setStaticFieldSignature(lines.LineDirection, () => ['values', 'Ltr', 'Rtl', 'Ttb', 'Btt']);
  dart.defineExtensionMethods(lines.LineDirection, ['toString']);
  dart.defineLazy(lines.LineDirection, {
    /*lines.LineDirection.values*/get values() {
      return C[10] || CT.C10;
    },
    /*lines.LineDirection.Ltr*/get Ltr() {
      return C[11] || CT.C11;
    },
    /*lines.LineDirection.Rtl*/get Rtl() {
      return C[12] || CT.C12;
    },
    /*lines.LineDirection.Ttb*/get Ttb() {
      return C[13] || CT.C13;
    },
    /*lines.LineDirection.Btt*/get Btt() {
      return C[14] || CT.C14;
    }
  }, false);
  var lines$ = dart.privateName(lines, "RacingLinesBehaviour.lines");
  var direction$ = dart.privateName(lines, "RacingLinesBehaviour.direction");
  var _numLines = dart.privateName(lines, "_numLines");
  lines.RacingLinesBehaviour = class RacingLinesBehaviour extends animated_background.Behaviour {
    get lines() {
      return this[lines$];
    }
    set lines(value) {
      this[lines$] = value;
    }
    get direction() {
      return this[direction$];
    }
    set direction(value) {
      this[direction$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let direction = opts && 'direction' in opts ? opts.direction : C[11] || CT.C11;
      let numLines = opts && 'numLines' in opts ? opts.numLines : 50;
      return new lines.RacingLinesBehaviour.new({direction: direction, numLines: numLines});
    }
    get numLines() {
      return this[_numLines];
    }
    set numLines(value) {
      if (this.isInitialized) {
        if (dart.dtest(dart.dsend(value, '>', [dart.nullCheck(this.lines)[$length]])))
          dart.nullCheck(this.lines)[$addAll](this.generateLines(core.int.as(dart.dsend(value, '-', [dart.nullCheck(this.lines)[$length]]))));
        else if (dart.dtest(dart.dsend(value, '<', [dart.nullCheck(this.lines)[$length]]))) dart.nullCheck(this.lines)[$removeRange](0, dart.asInt(dart.nullCheck(this.lines)[$length] - core.num.as(value)));
      }
      this[_numLines] = T.intN().as(value);
    }
    generateLines(numLines) {
      return T.ListOfLine().generate(numLines, dart.fn(i => {
        let line = new lines.Line.new();
        this.initLine(line);
        return line;
      }, T.intToLine()));
    }
    initLine(line) {
      line.speed = lines.RacingLinesBehaviour.random.nextDouble() * 400 + 200;
      let axisHorizontal = this.direction === lines.LineDirection.Ltr || this.direction === lines.LineDirection.Rtl;
      let normalDirection = this.direction === lines.LineDirection.Ltr || this.direction === lines.LineDirection.Ttb;
      let sizeCrossAxis = axisHorizontal ? dart.nullCheck(this.size).height : dart.nullCheck(this.size).width;
      let sizeMainAxis = axisHorizontal ? dart.nullCheck(this.size).width : dart.nullCheck(this.size).height;
      let spawnCrossAxis = lines.RacingLinesBehaviour.random.nextInt(100) * (sizeCrossAxis / 100);
      let spawnMainAxis = 0;
      if (line.position == null) {
        spawnMainAxis = lines.RacingLinesBehaviour.random.nextDouble() * sizeMainAxis;
      } else {
        spawnMainAxis = normalDirection ? -line.speed / 2 : sizeMainAxis + line.speed / 2;
      }
      line.position = axisHorizontal ? new ui.Offset.new(spawnMainAxis, spawnCrossAxis) : new ui.Offset.new(spawnCrossAxis, spawnMainAxis);
      line.thickness = lines.RacingLinesBehaviour.random.nextInt(2) + 2;
      line.color = new colors.HSVColor.fromAHSV(lines.RacingLinesBehaviour.random.nextDouble() * 0.3 + 0.2, lines.RacingLinesBehaviour.random.nextInt(45) * 8, lines.RacingLinesBehaviour.random.nextDouble() * 0.6 + 0.3, lines.RacingLinesBehaviour.random.nextDouble() * 0.6 + 0.3).toColor();
    }
    init() {
      this.lines = this.generateLines(dart.nullCheck(this.numLines));
    }
    initFrom(oldBehaviour) {
      if (lines.RacingLinesBehaviour.is(oldBehaviour)) {
        this.lines = oldBehaviour.lines;
        this.numLines = this[_numLines];
      }
    }
    get isInitialized() {
      return this.lines != null;
    }
    paint(context, offset) {
      let t5, t5$;
      let canvas = context.canvas;
      let paint = (t5 = ui.Paint.new(), (() => {
        t5.strokeCap = ui.StrokeCap.round;
        return t5;
      })());
      let axisHorizontal = this.direction === lines.LineDirection.Ltr || this.direction === lines.LineDirection.Rtl;
      let sign = this.direction === lines.LineDirection.Ltr || this.direction === lines.LineDirection.Ttb ? 1 : -1;
      for (let line of dart.nullCheck(this.lines)) {
        let tailDirection = axisHorizontal ? new ui.Offset.new(sign * line.speed / 2, 0) : new ui.Offset.new(0, sign * line.speed / 2);
        let headDelta = axisHorizontal ? new ui.Offset.new(20 * sign, 0) : new ui.Offset.new(0, 20 * sign);
        let target = dart.nullCheck(line.position)['+'](tailDirection);
        t5$ = paint;
        (() => {
          t5$.shader = ui.Gradient.linear(dart.nullCheck(line.position), target['-'](headDelta), T.JSArrayOfColor().of([dart.nullCheck(line.color).withAlpha(0), dart.nullCheck(line.color)]));
          t5$.strokeWidth = line.thickness[$toDouble]();
          return t5$;
        })();
        canvas.drawLine(dart.nullCheck(line.position), target, paint);
      }
    }
    tick(delta, elapsed) {
      let axisHorizontal = this.direction === lines.LineDirection.Ltr || this.direction === lines.LineDirection.Rtl;
      let sign = this.direction === lines.LineDirection.Ltr || this.direction === lines.LineDirection.Ttb ? 1 : -1;
      if (axisHorizontal) {
        for (let line of dart.nullCheck(this.lines)) {
          line.position = dart.nullCheck(line.position).translate(delta * line.speed * sign, 0);
          if (this.direction === lines.LineDirection.Ltr && dart.nullCheck(line.position).dx > dart.nullCheck(this.size).width || this.direction === lines.LineDirection.Rtl && dart.nullCheck(line.position).dx < 0) this.initLine(line);
        }
      } else {
        for (let line of dart.nullCheck(this.lines)) {
          line.position = dart.nullCheck(line.position).translate(0, delta * line.speed * sign);
          if (this.direction === lines.LineDirection.Ttb && dart.nullCheck(line.position).dy > dart.nullCheck(this.size).height || this.direction === lines.LineDirection.Btt && dart.nullCheck(line.position).dy < 0) this.initLine(line);
        }
      }
      return true;
    }
  };
  (lines.RacingLinesBehaviour.new = function(opts) {
    let direction = opts && 'direction' in opts ? opts.direction : C[11] || CT.C11;
    let numLines = opts && 'numLines' in opts ? opts.numLines : 50;
    this[lines$] = null;
    this[_numLines] = null;
    this[direction$] = direction;
    if (!(numLines >= 0)) dart.assertFailed(null, I[18], 45, 16, "numLines >= 0");
    lines.RacingLinesBehaviour.__proto__.new.call(this);
    this[_numLines] = numLines;
  }).prototype = lines.RacingLinesBehaviour.prototype;
  dart.addTypeTests(lines.RacingLinesBehaviour);
  dart.addTypeCaches(lines.RacingLinesBehaviour);
  dart.setMethodSignature(lines.RacingLinesBehaviour, () => ({
    __proto__: dart.getMethods(lines.RacingLinesBehaviour.__proto__),
    generateLines: dart.fnType(core.List$(lines.Line), [core.int]),
    initLine: dart.fnType(dart.void, [lines.Line]),
    init: dart.fnType(dart.void, []),
    initFrom: dart.fnType(dart.void, [animated_background.Behaviour]),
    paint: dart.fnType(dart.void, [object.PaintingContext, ui.Offset]),
    tick: dart.fnType(core.bool, [core.double, core.Duration])
  }));
  dart.setGetterSignature(lines.RacingLinesBehaviour, () => ({
    __proto__: dart.getGetters(lines.RacingLinesBehaviour.__proto__),
    numLines: dart.nullable(core.int),
    isInitialized: core.bool
  }));
  dart.setSetterSignature(lines.RacingLinesBehaviour, () => ({
    __proto__: dart.getSetters(lines.RacingLinesBehaviour.__proto__),
    numLines: dart.dynamic
  }));
  dart.setLibraryUri(lines.RacingLinesBehaviour, I[17]);
  dart.setFieldSignature(lines.RacingLinesBehaviour, () => ({
    __proto__: dart.getFields(lines.RacingLinesBehaviour.__proto__),
    lines: dart.fieldType(dart.nullable(core.List$(lines.Line))),
    [_numLines]: dart.fieldType(dart.nullable(core.int)),
    direction: dart.fieldType(lines.LineDirection)
  }));
  dart.setStaticFieldSignature(lines.RacingLinesBehaviour, () => ['random']);
  dart.defineLazy(lines.RacingLinesBehaviour, {
    /*lines.RacingLinesBehaviour.random*/get random() {
      return math.Random.new();
    }
  }, false);
  particles._NotSetImage = class _NotSetImage extends image.Image {
    static ['_#new#tearOff']() {
      return new particles._NotSetImage.new();
    }
  };
  (particles._NotSetImage.new = function() {
    particles._NotSetImage.__proto__.new.call(this, {image: C[15] || CT.C15});
    ;
  }).prototype = particles._NotSetImage.prototype;
  dart.addTypeTests(particles._NotSetImage);
  dart.addTypeCaches(particles._NotSetImage);
  dart.setLibraryUri(particles._NotSetImage, I[19]);
  particles._NotSetImageProvider = class _NotSetImageProvider extends image_provider.ImageProvider {
    static ['_#new#tearOff']() {
      return new particles._NotSetImageProvider.new();
    }
    noSuchMethod(invocation) {
      return super[$noSuchMethod](invocation);
    }
    obtainKey(configuration) {
      return T.FutureOf_NotSetImageProvider().as(this.noSuchMethod(new core._Invocation.method(C[16] || CT.C16, null, [configuration])));
    }
  };
  (particles._NotSetImageProvider.new = function() {
    particles._NotSetImageProvider.__proto__.new.call(this);
    ;
  }).prototype = particles._NotSetImageProvider.prototype;
  dart.addTypeTests(particles._NotSetImageProvider);
  dart.addTypeCaches(particles._NotSetImageProvider);
  dart.setMethodSignature(particles._NotSetImageProvider, () => ({
    __proto__: dart.getMethods(particles._NotSetImageProvider.__proto__),
    obtainKey: dart.fnType(async.Future$(particles._NotSetImageProvider), [image_provider.ImageConfiguration])
  }));
  dart.setLibraryUri(particles._NotSetImageProvider, I[19]);
  dart.defineExtensionMethods(particles._NotSetImageProvider, ['noSuchMethod']);
  var image$ = dart.privateName(particles, "ParticleOptions.image");
  var baseColor$ = dart.privateName(particles, "ParticleOptions.baseColor");
  var spawnMinRadius$ = dart.privateName(particles, "ParticleOptions.spawnMinRadius");
  var spawnMaxRadius$ = dart.privateName(particles, "ParticleOptions.spawnMaxRadius");
  var spawnMinSpeed$ = dart.privateName(particles, "ParticleOptions.spawnMinSpeed");
  var spawnMaxSpeed$ = dart.privateName(particles, "ParticleOptions.spawnMaxSpeed");
  var spawnOpacity$ = dart.privateName(particles, "ParticleOptions.spawnOpacity");
  var minOpacity$ = dart.privateName(particles, "ParticleOptions.minOpacity");
  var maxOpacity$ = dart.privateName(particles, "ParticleOptions.maxOpacity");
  var opacityChangeRate$ = dart.privateName(particles, "ParticleOptions.opacityChangeRate");
  var particleCount$ = dart.privateName(particles, "ParticleOptions.particleCount");
  var Color_value = dart.privateName(ui, "Color.value");
  var Image_isAntiAlias = dart.privateName(image, "Image.isAntiAlias");
  var Image_excludeFromSemantics = dart.privateName(image, "Image.excludeFromSemantics");
  var Image_semanticLabel = dart.privateName(image, "Image.semanticLabel");
  var Image_gaplessPlayback = dart.privateName(image, "Image.gaplessPlayback");
  var Image_matchTextDirection = dart.privateName(image, "Image.matchTextDirection");
  var Image_centerSlice = dart.privateName(image, "Image.centerSlice");
  var Image_repeat = dart.privateName(image, "Image.repeat");
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var Image_alignment = dart.privateName(image, "Image.alignment");
  var Image_fit = dart.privateName(image, "Image.fit");
  var Image_colorBlendMode = dart.privateName(image, "Image.colorBlendMode");
  var Image_filterQuality = dart.privateName(image, "Image.filterQuality");
  var Image_opacity = dart.privateName(image, "Image.opacity");
  var Image_color = dart.privateName(image, "Image.color");
  var Image_height = dart.privateName(image, "Image.height");
  var Image_width = dart.privateName(image, "Image.width");
  var Image_errorBuilder = dart.privateName(image, "Image.errorBuilder");
  var Image_loadingBuilder = dart.privateName(image, "Image.loadingBuilder");
  var Image_frameBuilder = dart.privateName(image, "Image.frameBuilder");
  var Image_image = dart.privateName(image, "Image.image");
  particles.ParticleOptions = class ParticleOptions extends core.Object {
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    get baseColor() {
      return this[baseColor$];
    }
    set baseColor(value) {
      super.baseColor = value;
    }
    get spawnMinRadius() {
      return this[spawnMinRadius$];
    }
    set spawnMinRadius(value) {
      super.spawnMinRadius = value;
    }
    get spawnMaxRadius() {
      return this[spawnMaxRadius$];
    }
    set spawnMaxRadius(value) {
      super.spawnMaxRadius = value;
    }
    get spawnMinSpeed() {
      return this[spawnMinSpeed$];
    }
    set spawnMinSpeed(value) {
      super.spawnMinSpeed = value;
    }
    get spawnMaxSpeed() {
      return this[spawnMaxSpeed$];
    }
    set spawnMaxSpeed(value) {
      super.spawnMaxSpeed = value;
    }
    get spawnOpacity() {
      return this[spawnOpacity$];
    }
    set spawnOpacity(value) {
      super.spawnOpacity = value;
    }
    get minOpacity() {
      return this[minOpacity$];
    }
    set minOpacity(value) {
      super.minOpacity = value;
    }
    get maxOpacity() {
      return this[maxOpacity$];
    }
    set maxOpacity(value) {
      super.maxOpacity = value;
    }
    get opacityChangeRate() {
      return this[opacityChangeRate$];
    }
    set opacityChangeRate(value) {
      super.opacityChangeRate = value;
    }
    get particleCount() {
      return this[particleCount$];
    }
    set particleCount(value) {
      super.particleCount = value;
    }
    static ['_#new#tearOff'](opts) {
      let image = opts && 'image' in opts ? opts.image : null;
      let baseColor = opts && 'baseColor' in opts ? opts.baseColor : C[17] || CT.C17;
      let spawnMinRadius = opts && 'spawnMinRadius' in opts ? opts.spawnMinRadius : 1;
      let spawnMaxRadius = opts && 'spawnMaxRadius' in opts ? opts.spawnMaxRadius : 10;
      let spawnMinSpeed = opts && 'spawnMinSpeed' in opts ? opts.spawnMinSpeed : 150;
      let spawnMaxSpeed = opts && 'spawnMaxSpeed' in opts ? opts.spawnMaxSpeed : 300;
      let spawnOpacity = opts && 'spawnOpacity' in opts ? opts.spawnOpacity : 0;
      let minOpacity = opts && 'minOpacity' in opts ? opts.minOpacity : 0.1;
      let maxOpacity = opts && 'maxOpacity' in opts ? opts.maxOpacity : 0.4;
      let opacityChangeRate = opts && 'opacityChangeRate' in opts ? opts.opacityChangeRate : 0.25;
      let particleCount = opts && 'particleCount' in opts ? opts.particleCount : 100;
      return new particles.ParticleOptions.new({image: image, baseColor: baseColor, spawnMinRadius: spawnMinRadius, spawnMaxRadius: spawnMaxRadius, spawnMinSpeed: spawnMinSpeed, spawnMaxSpeed: spawnMaxSpeed, spawnOpacity: spawnOpacity, minOpacity: minOpacity, maxOpacity: maxOpacity, opacityChangeRate: opacityChangeRate, particleCount: particleCount});
    }
    copyWith(opts) {
      let t5, t5$, t5$0, t5$1, t5$2, t5$3, t5$4, t5$5, t5$6, t5$7;
      let image = opts && 'image' in opts ? opts.image : C[18] || CT.C18;
      let baseColor = opts && 'baseColor' in opts ? opts.baseColor : null;
      let spawnMinRadius = opts && 'spawnMinRadius' in opts ? opts.spawnMinRadius : null;
      let spawnMaxRadius = opts && 'spawnMaxRadius' in opts ? opts.spawnMaxRadius : null;
      let spawnMinSpeed = opts && 'spawnMinSpeed' in opts ? opts.spawnMinSpeed : null;
      let spawnMaxSpeed = opts && 'spawnMaxSpeed' in opts ? opts.spawnMaxSpeed : null;
      let spawnOpacity = opts && 'spawnOpacity' in opts ? opts.spawnOpacity : null;
      let minOpacity = opts && 'minOpacity' in opts ? opts.minOpacity : null;
      let maxOpacity = opts && 'maxOpacity' in opts ? opts.maxOpacity : null;
      let opacityChangeRate = opts && 'opacityChangeRate' in opts ? opts.opacityChangeRate : null;
      let particleCount = opts && 'particleCount' in opts ? opts.particleCount : null;
      return new particles.ParticleOptions.new({image: particles._NotSetImage.is(image) ? this.image : image, baseColor: (t5 = baseColor, t5 == null ? this.baseColor : t5), spawnMinRadius: (t5$ = spawnMinRadius, t5$ == null ? this.spawnMinRadius : t5$), spawnMaxRadius: (t5$0 = spawnMaxRadius, t5$0 == null ? this.spawnMaxRadius : t5$0), spawnMinSpeed: (t5$1 = spawnMinSpeed, t5$1 == null ? this.spawnMinSpeed : t5$1), spawnMaxSpeed: (t5$2 = spawnMaxSpeed, t5$2 == null ? this.spawnMaxSpeed : t5$2), spawnOpacity: (t5$3 = spawnOpacity, t5$3 == null ? this.spawnOpacity : t5$3), minOpacity: (t5$4 = minOpacity, t5$4 == null ? this.minOpacity : t5$4), maxOpacity: (t5$5 = maxOpacity, t5$5 == null ? this.maxOpacity : t5$5), opacityChangeRate: (t5$6 = opacityChangeRate, t5$6 == null ? this.opacityChangeRate : t5$6), particleCount: (t5$7 = particleCount, t5$7 == null ? this.particleCount : t5$7)});
    }
  };
  (particles.ParticleOptions.new = function(opts) {
    let image = opts && 'image' in opts ? opts.image : null;
    let baseColor = opts && 'baseColor' in opts ? opts.baseColor : C[17] || CT.C17;
    let spawnMinRadius = opts && 'spawnMinRadius' in opts ? opts.spawnMinRadius : 1;
    let spawnMaxRadius = opts && 'spawnMaxRadius' in opts ? opts.spawnMaxRadius : 10;
    let spawnMinSpeed = opts && 'spawnMinSpeed' in opts ? opts.spawnMinSpeed : 150;
    let spawnMaxSpeed = opts && 'spawnMaxSpeed' in opts ? opts.spawnMaxSpeed : 300;
    let spawnOpacity = opts && 'spawnOpacity' in opts ? opts.spawnOpacity : 0;
    let minOpacity = opts && 'minOpacity' in opts ? opts.minOpacity : 0.1;
    let maxOpacity = opts && 'maxOpacity' in opts ? opts.maxOpacity : 0.4;
    let opacityChangeRate = opts && 'opacityChangeRate' in opts ? opts.opacityChangeRate : 0.25;
    let particleCount = opts && 'particleCount' in opts ? opts.particleCount : 100;
    this[image$] = image;
    this[baseColor$] = baseColor;
    this[spawnMinRadius$] = spawnMinRadius;
    this[spawnMaxRadius$] = spawnMaxRadius;
    this[spawnMinSpeed$] = spawnMinSpeed;
    this[spawnMaxSpeed$] = spawnMaxSpeed;
    this[spawnOpacity$] = spawnOpacity;
    this[minOpacity$] = minOpacity;
    this[maxOpacity$] = maxOpacity;
    this[opacityChangeRate$] = opacityChangeRate;
    this[particleCount$] = particleCount;
    if (!(spawnMaxRadius >= spawnMinRadius)) dart.assertFailed(null, I[20], 87, 16, "spawnMaxRadius >= spawnMinRadius");
    if (!(spawnMinRadius >= 1)) dart.assertFailed(null, I[20], 88, 16, "spawnMinRadius >= 1.0");
    if (!(spawnMaxRadius >= 1)) dart.assertFailed(null, I[20], 89, 16, "spawnMaxRadius >= 1.0");
    if (!(spawnOpacity >= 0)) dart.assertFailed(null, I[20], 90, 16, "spawnOpacity >= 0.0");
    if (!(spawnOpacity <= 1)) dart.assertFailed(null, I[20], 91, 16, "spawnOpacity <= 1.0");
    if (!(maxOpacity >= minOpacity)) dart.assertFailed(null, I[20], 92, 16, "maxOpacity >= minOpacity");
    if (!(minOpacity >= 0)) dart.assertFailed(null, I[20], 93, 16, "minOpacity >= 0.0");
    if (!(minOpacity <= 1)) dart.assertFailed(null, I[20], 94, 16, "minOpacity <= 1.0");
    if (!(maxOpacity >= 0)) dart.assertFailed(null, I[20], 95, 16, "maxOpacity >= 0.0");
    if (!(maxOpacity <= 1)) dart.assertFailed(null, I[20], 96, 16, "maxOpacity <= 1.0");
    if (!(spawnMaxSpeed >= spawnMinSpeed)) dart.assertFailed(null, I[20], 97, 16, "spawnMaxSpeed >= spawnMinSpeed");
    if (!(spawnMinSpeed >= 0)) dart.assertFailed(null, I[20], 98, 16, "spawnMinSpeed >= 0.0");
    if (!(spawnMaxSpeed >= 0)) dart.assertFailed(null, I[20], 99, 16, "spawnMaxSpeed >= 0.0");
    if (!(particleCount >= 0)) dart.assertFailed(null, I[20], 100, 16, "particleCount >= 0");
    ;
  }).prototype = particles.ParticleOptions.prototype;
  dart.addTypeTests(particles.ParticleOptions);
  dart.addTypeCaches(particles.ParticleOptions);
  dart.setMethodSignature(particles.ParticleOptions, () => ({
    __proto__: dart.getMethods(particles.ParticleOptions.__proto__),
    copyWith: dart.fnType(particles.ParticleOptions, [], {baseColor: dart.nullable(ui.Color), image: dart.nullable(image.Image), maxOpacity: dart.nullable(core.double), minOpacity: dart.nullable(core.double), opacityChangeRate: dart.nullable(core.double), particleCount: dart.nullable(core.int), spawnMaxRadius: dart.nullable(core.double), spawnMaxSpeed: dart.nullable(core.double), spawnMinRadius: dart.nullable(core.double), spawnMinSpeed: dart.nullable(core.double), spawnOpacity: dart.nullable(core.double)}, {})
  }));
  dart.setLibraryUri(particles.ParticleOptions, I[19]);
  dart.setFieldSignature(particles.ParticleOptions, () => ({
    __proto__: dart.getFields(particles.ParticleOptions.__proto__),
    image: dart.finalFieldType(dart.nullable(image.Image)),
    baseColor: dart.finalFieldType(ui.Color),
    spawnMinRadius: dart.finalFieldType(core.double),
    spawnMaxRadius: dart.finalFieldType(core.double),
    spawnMinSpeed: dart.finalFieldType(core.double),
    spawnMaxSpeed: dart.finalFieldType(core.double),
    spawnOpacity: dart.finalFieldType(core.double),
    minOpacity: dart.finalFieldType(core.double),
    maxOpacity: dart.finalFieldType(core.double),
    opacityChangeRate: dart.finalFieldType(core.double),
    particleCount: dart.finalFieldType(core.int)
  }));
  var cx = dart.privateName(particles, "Particle.cx");
  var cy = dart.privateName(particles, "Particle.cy");
  var dx = dart.privateName(particles, "Particle.dx");
  var dy = dart.privateName(particles, "Particle.dy");
  var radius$ = dart.privateName(particles, "Particle.radius");
  var alpha = dart.privateName(particles, "Particle.alpha");
  var targetAlpha = dart.privateName(particles, "Particle.targetAlpha");
  var data = dart.privateName(particles, "Particle.data");
  particles.Particle = class Particle extends core.Object {
    get cx() {
      return this[cx];
    }
    set cx(value) {
      this[cx] = value;
    }
    get cy() {
      return this[cy];
    }
    set cy(value) {
      this[cy] = value;
    }
    get dx() {
      return this[dx];
    }
    set dx(value) {
      this[dx] = value;
    }
    get dy() {
      return this[dy];
    }
    set dy(value) {
      this[dy] = value;
    }
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      this[radius$] = value;
    }
    get alpha() {
      return this[alpha];
    }
    set alpha(value) {
      this[alpha] = value;
    }
    get targetAlpha() {
      return this[targetAlpha];
    }
    set targetAlpha(value) {
      this[targetAlpha] = value;
    }
    get data() {
      return this[data];
    }
    set data(value) {
      this[data] = value;
    }
    static ['_#new#tearOff']() {
      return new particles.Particle.new();
    }
    get speedSqr() {
      return this.dx * this.dx + this.dy * this.dy;
    }
    set speedSqr(value) {
      this.speed = math.sqrt(value[$abs]()) * value[$sign];
    }
    get speed() {
      return math.sqrt(this.speedSqr);
    }
    set speed(value) {
      let mag = this.speed;
      if (mag === 0) {
        this.dx = 0;
        this.dy = value;
      } else {
        this.dx = this.dx / mag * value;
        this.dy = this.dy / mag * value;
      }
    }
  };
  (particles.Particle.new = function() {
    this[cx] = 0;
    this[cy] = 0;
    this[dx] = 0;
    this[dy] = 1;
    this[radius$] = 0;
    this[alpha] = 0;
    this[targetAlpha] = 0;
    this[data] = null;
    ;
  }).prototype = particles.Particle.prototype;
  dart.addTypeTests(particles.Particle);
  dart.addTypeCaches(particles.Particle);
  dart.setGetterSignature(particles.Particle, () => ({
    __proto__: dart.getGetters(particles.Particle.__proto__),
    speedSqr: core.double,
    speed: core.double
  }));
  dart.setSetterSignature(particles.Particle, () => ({
    __proto__: dart.getSetters(particles.Particle.__proto__),
    speedSqr: core.double,
    speed: core.double
  }));
  dart.setLibraryUri(particles.Particle, I[19]);
  dart.setFieldSignature(particles.Particle, () => ({
    __proto__: dart.getFields(particles.Particle.__proto__),
    cx: dart.fieldType(core.double),
    cy: dart.fieldType(core.double),
    dx: dart.fieldType(core.double),
    dy: dart.fieldType(core.double),
    radius: dart.fieldType(core.double),
    alpha: dart.fieldType(core.double),
    targetAlpha: dart.fieldType(core.double),
    data: dart.fieldType(dart.dynamic)
  }));
  var particles$ = dart.privateName(particles, "ParticleBehaviour.particles");
  var _particleImageSrc = dart.privateName(particles, "_particleImageSrc");
  var _particleImage = dart.privateName(particles, "_particleImage");
  var _pendingConversion = dart.privateName(particles, "_pendingConversion");
  var _paint = dart.privateName(particles, "_paint");
  var _options$ = dart.privateName(particles, "_options");
  var _convertImage = dart.privateName(particles, "_convertImage");
  particles.ParticleBehaviour = class ParticleBehaviour extends animated_background.Behaviour {
    get particles() {
      return this[particles$];
    }
    set particles(value) {
      this[particles$] = value;
    }
    get isInitialized() {
      return this.particles != null;
    }
    get particlePaint() {
      return this[_paint];
    }
    set particlePaint(value) {
      let t5;
      if (value == null) {
        this[_paint] = (t5 = ui.Paint.new(), (() => {
          t5.strokeCap = ui.StrokeCap.round;
          t5.style = ui.PaintingStyle.fill;
          t5.strokeWidth = 1;
          return t5;
        })());
      } else {
        this[_paint] = value;
      }
      if (dart.nullCheck(this[_paint]).strokeWidth <= 0) dart.nullCheck(this[_paint]).strokeWidth = 1;
    }
    get options() {
      return dart.nullCheck(this[_options$]);
    }
    set options(value) {
      if (value[$_equals](this[_options$])) return;
      let oldOptions = this[_options$];
      this[_options$] = value;
      if (dart.nullCheck(this[_options$]).image == null)
        this[_particleImage] = null;
      else if (this[_particleImage] == null || !dart.equals(dart.nullCheck(oldOptions).image, dart.nullCheck(this[_options$]).image)) this[_convertImage](dart.nullCheck(dart.nullCheck(this[_options$]).image));
      this.onOptionsUpdate(oldOptions);
    }
    init() {
      this.particles = this.generateParticles(this.options.particleCount);
    }
    initFrom(oldBehaviour) {
      if (particles.ParticleBehaviour.is(oldBehaviour)) {
        this.particles = oldBehaviour.particles;
        if (this.options.image != null && this[_particleImage] == null) {
          this[_particleImage] = oldBehaviour[_particleImage];
          this[_particleImageSrc] = oldBehaviour[_particleImageSrc];
        }
        this.onOptionsUpdate(oldBehaviour.options);
      }
    }
    tick(delta, elapsed) {
      if (this.particles == null) return false;
      for (let particle of dart.nullCheck(this.particles)) {
        if (!dart.nullCheck(this.size).contains(new ui.Offset.new(particle.cx, particle.cy))) {
          this.initParticle(particle);
          continue;
        }
        this.updateParticle(particle, delta, elapsed);
      }
      return true;
    }
    paint(context, offset) {
      let canvas = context.canvas;
      for (let particle of dart.nullCheck(this.particles)) {
        if (particle.alpha === 0) continue;
        dart.nullCheck(this[_paint]).color = this.options.baseColor.withOpacity(particle.alpha);
        if (this[_particleImage] != null) {
          let dst = new ui.Rect.fromLTRB(particle.cx - particle.radius, particle.cy - particle.radius, particle.cx + particle.radius, particle.cy + particle.radius);
          canvas.drawImageRect(dart.nullCheck(this[_particleImage]), dart.nullCheck(this[_particleImageSrc]), dst, dart.nullCheck(this[_paint]));
        } else
          canvas.drawCircle(new ui.Offset.new(particle.cx, particle.cy), particle.radius, dart.nullCheck(this[_paint]));
      }
    }
    generateParticles(numParticles) {
      return T.ListOfint().generate(numParticles, dart.fn(i => i, T.intToint()))[$map](particles.Particle, dart.fn(i => {
        let p = new particles.Particle.new();
        this.initParticle(p);
        return p;
      }, T.intToParticle()))[$toList]();
    }
    updateParticle(particle, delta, elapsed) {
      let t5, t5$;
      t5 = particle;
      t5.cx = t5.cx + particle.dx * delta;
      t5$ = particle;
      t5$.cy = t5$.cy + particle.dy * delta;
      if (this.options.opacityChangeRate > 0 && particle.alpha < particle.targetAlpha || this.options.opacityChangeRate < 0 && particle.alpha > particle.targetAlpha) {
        particle.alpha = particle.alpha + delta * this.options.opacityChangeRate;
        if (this.options.opacityChangeRate > 0 && particle.alpha > particle.targetAlpha || this.options.opacityChangeRate < 0 && particle.alpha < particle.targetAlpha) particle.alpha = particle.targetAlpha;
      }
    }
    onOptionsUpdate(oldOptions) {
      if (this.particles == null) return;
      if (dart.nullCheck(this.particles)[$length] > this.options.particleCount)
        dart.nullCheck(this.particles)[$removeRange](0, dart.nullCheck(this.particles)[$length] - this.options.particleCount);
      else if (dart.nullCheck(this.particles)[$length] < this.options.particleCount) {
        let particlesToSpawn = this.options.particleCount - dart.nullCheck(this.particles)[$length];
        let newParticles = this.generateParticles(particlesToSpawn);
        dart.nullCheck(this.particles)[$addAll](newParticles);
      }
    }
    [_convertImage](image) {
      return async.async(dart.void, (function* _convertImage() {
        if (this[_pendingConversion] != null) dart.dcall(dart.nullCheck(this[_pendingConversion]), []);
        this[_pendingConversion] = image_helper.convertImage(image, dart.fn(outImage => {
          this[_pendingConversion] = null;
          this[_particleImageSrc] = new ui.Rect.fromLTRB(0, 0, outImage.width[$toDouble](), outImage.height[$toDouble]());
          this[_particleImage] = outImage;
        }, T.ImageToNull()));
      }).bind(this));
    }
  };
  (particles.ParticleBehaviour.new = function(opts) {
    let options = opts && 'options' in opts ? opts.options : C[22] || CT.C22;
    let paint = opts && 'paint' in opts ? opts.paint : null;
    this[particles$] = null;
    this[_particleImageSrc] = null;
    this[_particleImage] = null;
    this[_pendingConversion] = null;
    this[_paint] = null;
    this[_options$] = null;
    particles.ParticleBehaviour.__proto__.new.call(this);
    this[_options$] = options;
    this.particlePaint = paint;
    if (options.image != null) this[_convertImage](dart.nullCheck(options.image));
  }).prototype = particles.ParticleBehaviour.prototype;
  dart.addTypeTests(particles.ParticleBehaviour);
  dart.addTypeCaches(particles.ParticleBehaviour);
  dart.setMethodSignature(particles.ParticleBehaviour, () => ({
    __proto__: dart.getMethods(particles.ParticleBehaviour.__proto__),
    init: dart.fnType(dart.void, []),
    initFrom: dart.fnType(dart.void, [animated_background.Behaviour]),
    tick: dart.fnType(core.bool, [core.double, core.Duration]),
    paint: dart.fnType(dart.void, [object.PaintingContext, ui.Offset]),
    generateParticles: dart.fnType(core.List$(particles.Particle), [core.int]),
    updateParticle: dart.fnType(dart.void, [particles.Particle, core.double, core.Duration]),
    onOptionsUpdate: dart.fnType(dart.void, [dart.nullable(particles.ParticleOptions)]),
    [_convertImage]: dart.fnType(dart.void, [image.Image])
  }));
  dart.setGetterSignature(particles.ParticleBehaviour, () => ({
    __proto__: dart.getGetters(particles.ParticleBehaviour.__proto__),
    isInitialized: core.bool,
    particlePaint: dart.nullable(ui.Paint),
    options: particles.ParticleOptions
  }));
  dart.setSetterSignature(particles.ParticleBehaviour, () => ({
    __proto__: dart.getSetters(particles.ParticleBehaviour.__proto__),
    particlePaint: dart.nullable(ui.Paint),
    options: particles.ParticleOptions
  }));
  dart.setLibraryUri(particles.ParticleBehaviour, I[19]);
  dart.setFieldSignature(particles.ParticleBehaviour, () => ({
    __proto__: dart.getFields(particles.ParticleBehaviour.__proto__),
    particles: dart.fieldType(dart.nullable(core.List$(particles.Particle))),
    [_particleImageSrc]: dart.fieldType(dart.nullable(ui.Rect)),
    [_particleImage]: dart.fieldType(dart.nullable(ui.Image)),
    [_pendingConversion]: dart.fieldType(dart.nullable(core.Function)),
    [_paint]: dart.fieldType(dart.nullable(ui.Paint)),
    [_options$]: dart.fieldType(dart.nullable(particles.ParticleOptions))
  }));
  particles.RandomParticleBehaviour = class RandomParticleBehaviour extends particles.ParticleBehaviour {
    static ['_#new#tearOff'](opts) {
      let options = opts && 'options' in opts ? opts.options : C[22] || CT.C22;
      let paint = opts && 'paint' in opts ? opts.paint : null;
      return new particles.RandomParticleBehaviour.new({options: options, paint: paint});
    }
    initFrom(oldBehaviour) {
      super.initFrom(oldBehaviour);
      if (particles.RandomParticleBehaviour.is(oldBehaviour) || this.particles == null) return;
      for (let particle of dart.nullCheck(this.particles)) {
        this.initParticle(particle);
      }
    }
    initParticle(p) {
      this.initPosition(p);
      this.initRadius(p);
      let deltaSpeed = this.options.spawnMaxSpeed - this.options.spawnMinSpeed;
      let speed = particles.RandomParticleBehaviour.random.nextDouble() * deltaSpeed + this.options.spawnMinSpeed;
      this.initDirection(p, speed);
      let deltaOpacity = this.options.maxOpacity - this.options.minOpacity;
      p.alpha = this.options.spawnOpacity;
      p.targetAlpha = particles.RandomParticleBehaviour.random.nextDouble() * deltaOpacity + this.options.minOpacity;
    }
    initPosition(p) {
      p.cx = particles.RandomParticleBehaviour.random.nextDouble() * dart.nullCheck(this.size).width;
      p.cy = particles.RandomParticleBehaviour.random.nextDouble() * dart.nullCheck(this.size).height;
    }
    initRadius(p) {
      let deltaRadius = this.options.spawnMaxRadius - this.options.spawnMinRadius;
      p.radius = particles.RandomParticleBehaviour.random.nextDouble() * deltaRadius + this.options.spawnMinRadius;
    }
    initDirection(p, speed) {
      let dirX = particles.RandomParticleBehaviour.random.nextDouble() - 0.5;
      let dirY = particles.RandomParticleBehaviour.random.nextDouble() - 0.5;
      let magSq = dirX * dirX + dirY * dirY;
      let mag = magSq <= 0 ? 1 : math.sqrt(magSq);
      p.dx = dirX / mag * speed;
      p.dy = dirY / mag * speed;
    }
    onOptionsUpdate(oldOptions) {
      super.onOptionsUpdate(oldOptions);
      let minSpeedSqr = this.options.spawnMinSpeed * this.options.spawnMinSpeed;
      let maxSpeedSqr = this.options.spawnMaxSpeed * this.options.spawnMaxSpeed;
      if (this.particles == null) return;
      for (let p of dart.nullCheck(this.particles)) {
        let speedSqr = p.speedSqr;
        if (speedSqr > maxSpeedSqr)
          p.speed = this.options.spawnMaxSpeed;
        else if (speedSqr < minSpeedSqr) p.speed = this.options.spawnMinSpeed;
        if (p.radius < this.options.spawnMinRadius || p.radius > this.options.spawnMaxRadius) this.initRadius(p);
      }
    }
  };
  (particles.RandomParticleBehaviour.new = function(opts) {
    let options = opts && 'options' in opts ? opts.options : C[22] || CT.C22;
    let paint = opts && 'paint' in opts ? opts.paint : null;
    particles.RandomParticleBehaviour.__proto__.new.call(this, {options: options, paint: paint});
    ;
  }).prototype = particles.RandomParticleBehaviour.prototype;
  dart.addTypeTests(particles.RandomParticleBehaviour);
  dart.addTypeCaches(particles.RandomParticleBehaviour);
  dart.setMethodSignature(particles.RandomParticleBehaviour, () => ({
    __proto__: dart.getMethods(particles.RandomParticleBehaviour.__proto__),
    initParticle: dart.fnType(dart.void, [particles.Particle]),
    initPosition: dart.fnType(dart.void, [particles.Particle]),
    initRadius: dart.fnType(dart.void, [particles.Particle]),
    initDirection: dart.fnType(dart.void, [particles.Particle, core.double])
  }));
  dart.setLibraryUri(particles.RandomParticleBehaviour, I[19]);
  dart.setStaticFieldSignature(particles.RandomParticleBehaviour, () => ['random']);
  dart.defineLazy(particles.RandomParticleBehaviour, {
    /*particles.RandomParticleBehaviour.random*/get random() {
      return math.Random.new();
    },
    set random(_) {}
  }, false);
  var color$0 = dart.privateName(rectangles, "Rectangle.color");
  var initialColor = dart.privateName(rectangles, "Rectangle.initialColor");
  var fadeTo = dart.privateName(rectangles, "Rectangle.fadeTo");
  var t = dart.privateName(rectangles, "Rectangle.t");
  var __Rectangle_rect = dart.privateName(rectangles, "_#Rectangle#rect");
  rectangles.Rectangle = class Rectangle extends core.Object {
    get color() {
      return this[color$0];
    }
    set color(value) {
      this[color$0] = value;
    }
    get initialColor() {
      return this[initialColor];
    }
    set initialColor(value) {
      this[initialColor] = value;
    }
    get fadeTo() {
      return this[fadeTo];
    }
    set fadeTo(value) {
      this[fadeTo] = value;
    }
    get t() {
      return this[t];
    }
    set t(value) {
      this[t] = value;
    }
    get rect() {
      let t5;
      t5 = this[__Rectangle_rect];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("rect")) : t5;
    }
    set rect(rect$35param) {
      this[__Rectangle_rect] = rect$35param;
    }
    static ['_#new#tearOff']() {
      return new rectangles.Rectangle.new();
    }
  };
  (rectangles.Rectangle.new = function() {
    this[color$0] = null;
    this[initialColor] = null;
    this[fadeTo] = null;
    this[t] = 0;
    this[__Rectangle_rect] = null;
    ;
  }).prototype = rectangles.Rectangle.prototype;
  dart.addTypeTests(rectangles.Rectangle);
  dart.addTypeCaches(rectangles.Rectangle);
  dart.setGetterSignature(rectangles.Rectangle, () => ({
    __proto__: dart.getGetters(rectangles.Rectangle.__proto__),
    rect: ui.Rect
  }));
  dart.setSetterSignature(rectangles.Rectangle, () => ({
    __proto__: dart.getSetters(rectangles.Rectangle.__proto__),
    rect: ui.Rect
  }));
  dart.setLibraryUri(rectangles.Rectangle, I[21]);
  dart.setFieldSignature(rectangles.Rectangle, () => ({
    __proto__: dart.getFields(rectangles.Rectangle.__proto__),
    color: dart.fieldType(dart.nullable(colors.HSVColor)),
    initialColor: dart.fieldType(dart.nullable(colors.HSVColor)),
    fadeTo: dart.fieldType(dart.nullable(colors.HSVColor)),
    t: dart.fieldType(core.double),
    [__Rectangle_rect]: dart.fieldType(dart.nullable(ui.Rect))
  }));
  var _rectList = dart.privateName(rectangles, "_rectList");
  rectangles.RectanglesBehaviour = class RectanglesBehaviour extends animated_background.Behaviour {
    get isInitialized() {
      return this[_rectList] != null;
    }
    static randomColor() {
      return new colors.HSVColor.fromAHSV(1, (rectangles.RectanglesBehaviour.random.nextDouble() * 360)[$modulo](36) * 10, rectangles.RectanglesBehaviour.random.nextDouble() * 0.2 + 0.1, rectangles.RectanglesBehaviour.random.nextDouble() * 0.1 + 0.9);
    }
    init() {
      let t5;
      this[_rectList] = T.JSArrayOfRectangleN().of([]);
      let tileSize = dart.nullCheck(this.size)['/'](4);
      for (let x = 0; x < 4; x = x + 1) {
        for (let y = 0; y < 4; y = y + 1) {
          let rect = (t5 = new rectangles.Rectangle.new(), (() => {
            t5.initialColor = rectangles.RectanglesBehaviour.randomColor();
            t5.color = new colors.HSVColor.fromAHSV(0, 0, 0, 0);
            t5.fadeTo = rectangles.RectanglesBehaviour.randomColor();
            t5.rect = new ui.Offset.new(tileSize.width * x, tileSize.height * y)['&'](tileSize);
            return t5;
          })());
          dart.nullCheck(this[_rectList])[$insert](x * 4 + y, rect);
        }
      }
    }
    initFrom(oldBehaviour) {
      if (rectangles.RectanglesBehaviour.is(oldBehaviour)) {
        if (this[_rectList] != null) this[_rectList] = oldBehaviour[_rectList];
      }
    }
    paint(context, offset) {
      let t5;
      let canvas = context.canvas;
      let rectPaint = (t5 = ui.Paint.new(), (() => {
        t5.strokeWidth = 1;
        return t5;
      })());
      for (let rect of dart.nullCheck(this[_rectList])) {
        rectPaint.color = dart.nullCheck(dart.nullCheck(rect).color).toColor();
        canvas.drawRect(rect.rect, rectPaint);
      }
    }
    tick(delta, elapsed) {
      if (this[_rectList] == null) return false;
      for (let rect of dart.nullCheck(this[_rectList])) {
        dart.nullCheck(rect).t = math.min(core.double, rect.t + delta * 0.5, 1);
        rect.color = colors.HSVColor.lerp(rect.initialColor, rect.fadeTo, rect.t);
        if (dart.nullCheck(rect.fadeTo).toColor().value === dart.nullCheck(rect.color).toColor().value) {
          rect.initialColor = rect.fadeTo;
          rect.fadeTo = rectangles.RectanglesBehaviour.randomColor();
          rect.t = 0;
        }
      }
      return true;
    }
    static ['_#new#tearOff']() {
      return new rectangles.RectanglesBehaviour.new();
    }
  };
  (rectangles.RectanglesBehaviour.new = function() {
    this[_rectList] = null;
    rectangles.RectanglesBehaviour.__proto__.new.call(this);
    ;
  }).prototype = rectangles.RectanglesBehaviour.prototype;
  dart.addTypeTests(rectangles.RectanglesBehaviour);
  dart.addTypeCaches(rectangles.RectanglesBehaviour);
  dart.setMethodSignature(rectangles.RectanglesBehaviour, () => ({
    __proto__: dart.getMethods(rectangles.RectanglesBehaviour.__proto__),
    init: dart.fnType(dart.void, []),
    initFrom: dart.fnType(dart.void, [animated_background.Behaviour]),
    paint: dart.fnType(dart.void, [object.PaintingContext, ui.Offset]),
    tick: dart.fnType(core.bool, [core.double, core.Duration])
  }));
  dart.setStaticMethodSignature(rectangles.RectanglesBehaviour, () => ['randomColor']);
  dart.setGetterSignature(rectangles.RectanglesBehaviour, () => ({
    __proto__: dart.getGetters(rectangles.RectanglesBehaviour.__proto__),
    isInitialized: core.bool
  }));
  dart.setLibraryUri(rectangles.RectanglesBehaviour, I[21]);
  dart.setFieldSignature(rectangles.RectanglesBehaviour, () => ({
    __proto__: dart.getFields(rectangles.RectanglesBehaviour.__proto__),
    [_rectList]: dart.fieldType(dart.nullable(core.List$(dart.nullable(rectangles.Rectangle))))
  }));
  dart.setStaticFieldSignature(rectangles.RectanglesBehaviour, () => ['random']);
  dart.defineLazy(rectangles.RectanglesBehaviour, {
    /*rectangles.RectanglesBehaviour.random*/get random() {
      return math.Random.new();
    },
    set random(_) {}
  }, false);
  var position$ = dart.privateName(space, "Star.position");
  var __Star_targetPosition = dart.privateName(space, "_#Star#targetPosition");
  var __Star_distance = dart.privateName(space, "_#Star#distance");
  space.Star = class Star extends core.Object {
    get position() {
      return this[position$];
    }
    set position(value) {
      this[position$] = value;
    }
    get targetPosition() {
      let t5;
      t5 = this[__Star_targetPosition];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("targetPosition")) : t5;
    }
    set targetPosition(targetPosition$35param) {
      this[__Star_targetPosition] = targetPosition$35param;
    }
    get distance() {
      let t5;
      t5 = this[__Star_distance];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("distance")) : t5;
    }
    set distance(distance$35param) {
      this[__Star_distance] = distance$35param;
    }
    static ['_#new#tearOff']() {
      return new space.Star.new();
    }
  };
  (space.Star.new = function() {
    this[position$] = null;
    this[__Star_targetPosition] = null;
    this[__Star_distance] = null;
    ;
  }).prototype = space.Star.prototype;
  dart.addTypeTests(space.Star);
  dart.addTypeCaches(space.Star);
  dart.setGetterSignature(space.Star, () => ({
    __proto__: dart.getGetters(space.Star.__proto__),
    targetPosition: ui.Offset,
    distance: core.double
  }));
  dart.setSetterSignature(space.Star, () => ({
    __proto__: dart.getSetters(space.Star.__proto__),
    targetPosition: ui.Offset,
    distance: core.double
  }));
  dart.setLibraryUri(space.Star, I[22]);
  dart.setFieldSignature(space.Star, () => ({
    __proto__: dart.getFields(space.Star.__proto__),
    position: dart.fieldType(dart.nullable(ui.Offset)),
    [__Star_targetPosition]: dart.fieldType(dart.nullable(ui.Offset)),
    [__Star_distance]: dart.fieldType(dart.nullable(core.double))
  }));
  var center = dart.privateName(space, "SpaceBehaviour.center");
  var targetCenter = dart.privateName(space, "SpaceBehaviour.targetCenter");
  var stars = dart.privateName(space, "SpaceBehaviour.stars");
  var __SpaceBehaviour__backgroundColor = dart.privateName(space, "_#SpaceBehaviour#_backgroundColor");
  var _backgroundColor = dart.privateName(space, "_backgroundColor");
  var _initStar = dart.privateName(space, "_initStar");
  var _updateCenter = dart.privateName(space, "_updateCenter");
  space.SpaceBehaviour = class SpaceBehaviour extends animated_background.Behaviour {
    get center() {
      return this[center];
    }
    set center(value) {
      this[center] = value;
    }
    get targetCenter() {
      return this[targetCenter];
    }
    set targetCenter(value) {
      this[targetCenter] = value;
    }
    get stars() {
      return this[stars];
    }
    set stars(value) {
      this[stars] = value;
    }
    get [_backgroundColor]() {
      let t5;
      t5 = this[__SpaceBehaviour__backgroundColor];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_backgroundColor")) : t5;
    }
    set [_backgroundColor](library$32package$58animated_background$47space$46dart$58$58_backgroundColor$35param) {
      this[__SpaceBehaviour__backgroundColor] = library$32package$58animated_background$47space$46dart$58$58_backgroundColor$35param;
    }
    static ['_#new#tearOff'](opts) {
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : C[17] || CT.C17;
      return new space.SpaceBehaviour.new({backgroundColor: backgroundColor});
    }
    init() {
      this.center = new ui.Offset.new(dart.nullCheck(this.size).width / 2, dart.nullCheck(this.size).height / 2);
      this.targetCenter = this.center;
      this.stars = T.ListOfStar().generate(500, dart.fn(_ => {
        let star = new space.Star.new();
        this[_initStar](star);
        return star;
      }, T.intToStar()));
    }
    [_initStar](star) {
      star.targetPosition = new ui.Offset.new((space.SpaceBehaviour.random.nextDouble() * dart.nullCheck(this.size).width - dart.nullCheck(this.size).width / 2) * 1000, (space.SpaceBehaviour.random.nextDouble() * dart.nullCheck(this.size).height - dart.nullCheck(this.size).height / 2) * 1000);
      if (star.position != null) {
        star.distance = 1000;
        star.position = ui.Offset.zero;
      } else {
        star.distance = space.SpaceBehaviour.random.nextDouble() * 1000;
        star.position = new ui.Offset.new(star.targetPosition.dx / star.distance, star.targetPosition.dy / star.distance);
      }
    }
    initFrom(oldBehaviour) {
      if (space.SpaceBehaviour.is(oldBehaviour)) {
        this.stars = oldBehaviour.stars;
        this.center = oldBehaviour.center;
        this.targetCenter = oldBehaviour.targetCenter;
      }
    }
    get isInitialized() {
      return this.stars != null && this.center != null;
    }
    paint(context, offset) {
      let t5, t5$;
      let canvas = context.canvas;
      let paint = (t5 = ui.Paint.new(), (() => {
        t5.style = ui.PaintingStyle.fill;
        return t5;
      })());
      canvas.drawPaint((t5$ = ui.Paint.new(), (() => {
        t5$.color = this[_backgroundColor];
        return t5$;
      })()));
      canvas.translate(dart.nullCheck(this.center).dx, dart.nullCheck(this.center).dy);
      let i = 0;
      let time = new core.DateTime.now().millisecondsSinceEpoch[$toDouble]() / 1000;
      for (let star of dart.nullCheck(this.stars)) {
        if (dart.nullCheck(star.position).dx === 0 || star.distance <= 0) continue;
        paint.color = new ui.Color.fromARGB(128, (math.sin(0.3 * i + 0 + time) * 64 + 190)[$floor](), (math.sin(0.3 * i + 2 + time) * 64 + 190)[$floor](), (math.sin(0.3 * i + 4 + time) * 64 + 190)[$floor]());
        let x = star.targetPosition.dx / star.distance * 1.02;
        let y = star.targetPosition.dy / star.distance * 1.02;
        let z = 1 / star.distance * 6 + 1;
        paint.strokeWidth = z;
        canvas.drawLine(new ui.Offset.new(x, y), dart.nullCheck(star.position), paint);
        i = i + 1;
      }
      canvas.translate(-dart.nullCheck(this.center).dx, -dart.nullCheck(this.center).dy);
    }
    tick(delta, elapsed) {
      let t5;
      this.center = ui.Offset.lerp(this.center, this.targetCenter, delta * 5);
      for (let star of dart.nullCheck(this.stars)) {
        star.position = new ui.Offset.new(star.targetPosition.dx / star.distance, star.targetPosition.dy / star.distance);
        t5 = star;
        t5.distance = t5.distance - delta * 500;
        if (star.distance <= 0 || dart.nullCheck(star.position).dx > dart.nullCheck(this.size).width || dart.nullCheck(star.position).dy > dart.nullCheck(this.size).height) this[_initStar](star);
      }
      return true;
    }
    builder(context, constraints, child) {
      return new gesture_detector.GestureDetector.new({behavior: proxy_box.HitTestBehavior.translucent, onPanUpdate: dart.fn(details => this[_updateCenter](context, details.globalPosition), T.DragUpdateDetailsTovoid()), onTapDown: dart.fn(details => this[_updateCenter](context, details.globalPosition), T.TapDownDetailsTovoid()), child: new basic.ConstrainedBox.new({constraints: new box.BoxConstraints.new({minHeight: 1 / 0, minWidth: 1 / 0}), child: super.builder(context, constraints, child)})});
    }
    [_updateCenter](context, globalPosition) {
      let renderBox = box.RenderBox.as(context.findRenderObject());
      let localPosition = renderBox.globalToLocal(globalPosition);
      this.targetCenter = localPosition;
    }
  };
  (space.SpaceBehaviour.new = function(opts) {
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : C[17] || CT.C17;
    this[center] = null;
    this[targetCenter] = null;
    this[stars] = null;
    this[__SpaceBehaviour__backgroundColor] = null;
    space.SpaceBehaviour.__proto__.new.call(this);
    this[_backgroundColor] = backgroundColor;
  }).prototype = space.SpaceBehaviour.prototype;
  dart.addTypeTests(space.SpaceBehaviour);
  dart.addTypeCaches(space.SpaceBehaviour);
  dart.setMethodSignature(space.SpaceBehaviour, () => ({
    __proto__: dart.getMethods(space.SpaceBehaviour.__proto__),
    init: dart.fnType(dart.void, []),
    [_initStar]: dart.fnType(dart.void, [space.Star]),
    initFrom: dart.fnType(dart.void, [animated_background.Behaviour]),
    paint: dart.fnType(dart.void, [object.PaintingContext, ui.Offset]),
    tick: dart.fnType(core.bool, [core.double, core.Duration]),
    [_updateCenter]: dart.fnType(dart.void, [framework.BuildContext, ui.Offset])
  }));
  dart.setGetterSignature(space.SpaceBehaviour, () => ({
    __proto__: dart.getGetters(space.SpaceBehaviour.__proto__),
    [_backgroundColor]: ui.Color,
    isInitialized: core.bool
  }));
  dart.setSetterSignature(space.SpaceBehaviour, () => ({
    __proto__: dart.getSetters(space.SpaceBehaviour.__proto__),
    [_backgroundColor]: ui.Color
  }));
  dart.setLibraryUri(space.SpaceBehaviour, I[22]);
  dart.setFieldSignature(space.SpaceBehaviour, () => ({
    __proto__: dart.getFields(space.SpaceBehaviour.__proto__),
    center: dart.fieldType(dart.nullable(ui.Offset)),
    targetCenter: dart.fieldType(dart.nullable(ui.Offset)),
    stars: dart.fieldType(dart.nullable(core.List$(space.Star))),
    [__SpaceBehaviour__backgroundColor]: dart.fieldType(dart.nullable(ui.Color))
  }));
  dart.setStaticFieldSignature(space.SpaceBehaviour, () => ['random']);
  dart.defineLazy(space.SpaceBehaviour, {
    /*space.SpaceBehaviour.random*/get random() {
      return math.Random.new();
    },
    set random(_) {}
  }, false);
  var _flying = dart.privateName(space, "_flying");
  var _childZ = dart.privateName(space, "_childZ");
  space.ChildFlySpaceBehaviour = class ChildFlySpaceBehaviour extends space.SpaceBehaviour {
    tick(delta, elapsed) {
      if (this[_flying]) {
        this[_childZ] = math.max(core.double, 0, this[_childZ] - 50 * delta);
        dart.nullCheck(this.renderObject).markNeedsLayout();
        if (this[_childZ] === 0) this[_flying] = false;
      }
      return super.tick(delta, elapsed);
    }
    builder(context, constraints, child) {
      let t5;
      let widgetX = 0;
      let widgetY = 0;
      if (dart.nullCheck(this.renderObject).hasSize) {
        widgetX = dart.nullCheck(this.size).width / 2 * this[_childZ];
        widgetY = dart.nullCheck(this.size).height / 2 * this[_childZ];
      }
      return new basic.Opacity.new({opacity: (100 - this[_childZ]) / 100, child: new basic.Transform.new({transform: (t5 = vector_math_64.Matrix4.identity(), (() => {
            t5.setEntry(3, 2, 1);
            t5.translate(widgetX, widgetY, this[_childZ]);
            return t5;
          })()), child: super.builder(context, constraints, child)})});
    }
    static ['_#new#tearOff']() {
      return new space.ChildFlySpaceBehaviour.new();
    }
  };
  (space.ChildFlySpaceBehaviour.new = function() {
    this[_flying] = true;
    this[_childZ] = 100;
    space.ChildFlySpaceBehaviour.__proto__.new.call(this);
    ;
  }).prototype = space.ChildFlySpaceBehaviour.prototype;
  dart.addTypeTests(space.ChildFlySpaceBehaviour);
  dart.addTypeCaches(space.ChildFlySpaceBehaviour);
  dart.setLibraryUri(space.ChildFlySpaceBehaviour, I[22]);
  dart.setFieldSignature(space.ChildFlySpaceBehaviour, () => ({
    __proto__: dart.getFields(space.ChildFlySpaceBehaviour.__proto__),
    [_flying]: dart.fieldType(core.bool),
    [_childZ]: dart.fieldType(core.double)
  }));
  var withCredentials = dart.privateName(browser_client, "BrowserClient.withCredentials");
  var _xhrs = dart.privateName(browser_client, "_xhrs");
  browser_client.BrowserClient = class BrowserClient extends base_client.BaseClient {
    get withCredentials() {
      return this[withCredentials];
    }
    set withCredentials(value) {
      this[withCredentials] = value;
    }
    send(request) {
      return async.async(streamed_response.StreamedResponse, (function* send() {
        let t5;
        let bytes = (yield request.finalize().toBytes());
        let xhr = html.HttpRequest.new();
        this[_xhrs].add(xhr);
        t5 = xhr;
        (() => {
          t5.open(request.method, dart.str(request.url), {async: true});
          t5[$responseType] = "arraybuffer";
          t5.withCredentials = this.withCredentials;
          return t5;
        })();
        request.headers[$forEach](dart.bind(xhr, 'setRequestHeader'));
        let completer = T.CompleterOfStreamedResponse().new();
        async.unawaited(xhr[$onLoad].first.then(dart.void, dart.fn(_ => {
          let body = typed_data.ByteBuffer.as(xhr[$response])[$asUint8List]();
          completer.complete(new streamed_response.StreamedResponse.new(byte_stream.ByteStream.fromBytes(body), dart.nullCheck(xhr.status), {contentLength: body[$length], request: request, headers: xhr[$responseHeaders], reasonPhrase: xhr.statusText}));
        }, T.ProgressEventToNull())));
        async.unawaited(xhr[$onError].first.then(dart.void, dart.fn(_ => {
          completer.completeError(new exception.ClientException.new("XMLHttpRequest error.", request.url), core.StackTrace.current);
        }, T.ProgressEventToNull())));
        xhr.send(bytes);
        try {
          return yield completer.future;
        } finally {
          this[_xhrs].remove(xhr);
        }
      }).bind(this));
    }
    close() {
      for (let xhr of this[_xhrs]) {
        xhr.abort();
      }
    }
    static ['_#new#tearOff']() {
      return new browser_client.BrowserClient.new();
    }
  };
  (browser_client.BrowserClient.new = function() {
    this[_xhrs] = T.LinkedHashSetOfHttpRequest().new();
    this[withCredentials] = false;
    ;
  }).prototype = browser_client.BrowserClient.prototype;
  dart.addTypeTests(browser_client.BrowserClient);
  dart.addTypeCaches(browser_client.BrowserClient);
  dart.setMethodSignature(browser_client.BrowserClient, () => ({
    __proto__: dart.getMethods(browser_client.BrowserClient.__proto__),
    send: dart.fnType(async.Future$(streamed_response.StreamedResponse), [base_request.BaseRequest])
  }));
  dart.setLibraryUri(browser_client.BrowserClient, I[23]);
  dart.setFieldSignature(browser_client.BrowserClient, () => ({
    __proto__: dart.getFields(browser_client.BrowserClient.__proto__),
    [_xhrs]: dart.finalFieldType(core.Set$(html.HttpRequest)),
    withCredentials: dart.fieldType(core.bool)
  }));
  browser_client.createClient = function createClient() {
    return new browser_client.BrowserClient.new();
  };
  var Latin1Codec__allowInvalid = dart.privateName(convert, "Latin1Codec._allowInvalid");
  utils.mapToQuery = function mapToQuery(map, opts) {
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    let pairs = T.JSArrayOfListOfString().of([]);
    map[$forEach](dart.fn((key, value) => {
      let t5, t5$;
      return pairs[$add](T.JSArrayOfString().of([core.Uri.encodeQueryComponent(key, {encoding: (t5 = encoding, t5 == null ? convert.utf8 : t5)}), core.Uri.encodeQueryComponent(value, {encoding: (t5$ = encoding, t5$ == null ? convert.utf8 : t5$)})]));
    }, T.StringAndStringTovoid()));
    return pairs[$map](core.String, dart.fn(pair => pair[$_get](0) + "=" + pair[$_get](1), T.ListOfStringToString()))[$join]("&");
  };
  utils.encodingForCharset = function encodingForCharset(charset, fallback = C[23] || CT.C23) {
    let t5;
    if (charset == null) return fallback;
    t5 = convert.Encoding.getByName(charset);
    return t5 == null ? fallback : t5;
  };
  utils.requiredEncodingForCharset = function requiredEncodingForCharset(charset) {
    let t5;
    t5 = convert.Encoding.getByName(charset);
    return t5 == null ? dart.throw(new core.FormatException.new("Unsupported encoding \"" + charset + "\".")) : t5;
  };
  utils.isPlainAscii = function isPlainAscii(string) {
    return utils._asciiOnly.hasMatch(string);
  };
  utils.toUint8List = function toUint8List(input) {
    if (typed_data.Uint8List.is(input)) return input;
    if (typed_data.TypedData.is(input)) {
      return typed_data.Uint8List.view(typed_data.TypedData.as(input)[$buffer]);
    }
    return _native_typed_data.NativeUint8List.fromList(input);
  };
  utils.toByteStream = function toByteStream(stream) {
    if (byte_stream.ByteStream.is(stream)) return stream;
    return new byte_stream.ByteStream.new(stream);
  };
  utils.onDone = function onDone(T, stream, onDone) {
    return stream.transform(T, new (async._StreamHandlerTransformer$(T, T)).new({handleDone: dart.fn(sink => {
        sink.close();
        onDone();
      }, dart.fnType(dart.void, [async.EventSink$(T)]))}));
  };
  dart.defineLazy(utils, {
    /*utils._asciiOnly*/get _asciiOnly() {
      return core.RegExp.new("^[\\x00-\\x7F]+$");
    }
  }, false);
  multipart_file_stub.multipartFileFromPath = function multipartFileFromPath(field, filePath, opts) {
    let filename = opts && 'filename' in opts ? opts.filename : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    return dart.throw(new core.UnsupportedError.new("MultipartFile is only supported where dart:io is available."));
  };
  dart.defineLazy(boundary_characters, {
    /*boundary_characters.boundaryCharacters*/get boundaryCharacters() {
      return C[24] || CT.C24;
    }
  }, false);
  image_helper.convertImage = function convertImage(image, callback) {
    let newStream = image.image.resolve(image_provider.ImageConfiguration.empty);
    let imageListener = null;
    function imageListener$35get() {
      let t6;
      t6 = imageListener;
      return t6 == null ? dart.throw(new _internal.LateError.localNI("imageListener")) : t6;
    }
    dart.fn(imageListener$35get, T.VoidToImageStreamListener());
    function imageListener$35set(imageListener$35param) {
      return imageListener = imageListener$35param;
    }
    dart.fn(imageListener$35set, T.ImageStreamListenerTodynamic());
    imageListener$35set(new image_stream.ImageStreamListener.new(dart.fn((info, synchronousCall) => {
      callback(info.image);
      newStream.removeListener(imageListener$35get());
    }, T.ImageInfoAndboolTovoid())));
    newStream.addListener(imageListener$35get());
    return dart.fn(() => newStream.removeListener(imageListener$35get()), T.VoidTovoid());
  };
  var scheme$ = dart.privateName(authentication_challenge, "AuthenticationChallenge.scheme");
  var parameters$ = dart.privateName(authentication_challenge, "AuthenticationChallenge.parameters");
  authentication_challenge.AuthenticationChallenge = class AuthenticationChallenge extends core.Object {
    get scheme() {
      return this[scheme$];
    }
    set scheme(value) {
      super.scheme = value;
    }
    get parameters() {
      return this[parameters$];
    }
    set parameters(value) {
      super.parameters = value;
    }
    static parseHeader(header) {
      return utils$.wrapFormatException(T.ListOfAuthenticationChallenge(), "authentication header", header, dart.fn(() => {
        let scanner = new string_scanner.StringScanner.new(header);
        scanner.scan(scan.whitespace);
        let challenges = scan.parseList(authentication_challenge.AuthenticationChallenge, scanner, dart.fn(() => {
          let scheme = authentication_challenge.AuthenticationChallenge._scanScheme(scanner, {whitespaceName: "\" \" or \"=\""});
          let params = new (T.IdentityMapOfString$String()).new();
          while (scanner.scan(",")) {
            scanner.scan(scan.whitespace);
          }
          authentication_challenge.AuthenticationChallenge._scanAuthParam(scanner, params);
          let beforeComma = scanner.position;
          while (scanner.scan(",")) {
            scanner.scan(scan.whitespace);
            if (scanner.matches(",") || scanner.isDone) continue;
            scanner.expect(scan.token, {name: "a token"});
            let name = dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0));
            scanner.scan(scan.whitespace);
            if (!scanner.scan("=")) {
              scanner.position = beforeComma;
              break;
            }
            scanner.scan(scan.whitespace);
            if (scanner.scan(scan.token)) {
              params[$_set](name, dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0)));
            } else {
              params[$_set](name, scan.expectQuotedString(scanner, {name: "a token or a quoted string"}));
            }
            scanner.scan(scan.whitespace);
            beforeComma = scanner.position;
          }
          return new authentication_challenge.AuthenticationChallenge.new(scheme, params);
        }, T.VoidToAuthenticationChallenge()));
        scanner.expectDone();
        return challenges;
      }, T.VoidToListOfAuthenticationChallenge()));
    }
    static parse(challenge) {
      return utils$.wrapFormatException(authentication_challenge.AuthenticationChallenge, "authentication challenge", challenge, dart.fn(() => {
        let scanner = new string_scanner.StringScanner.new(challenge);
        scanner.scan(scan.whitespace);
        let scheme = authentication_challenge.AuthenticationChallenge._scanScheme(scanner);
        let params = new (T.IdentityMapOfString$String()).new();
        scan.parseList(dart.void, scanner, dart.fn(() => authentication_challenge.AuthenticationChallenge._scanAuthParam(scanner, params), T.VoidTovoid()));
        scanner.expectDone();
        return new authentication_challenge.AuthenticationChallenge.new(scheme, params);
      }, T.VoidToAuthenticationChallenge()));
    }
    static ['_#parse#tearOff'](challenge) {
      return authentication_challenge.AuthenticationChallenge.parse(challenge);
    }
    static _scanScheme(scanner, opts) {
      let whitespaceName = opts && 'whitespaceName' in opts ? opts.whitespaceName : null;
      scanner.expect(scan.token, {name: "a token"});
      let scheme = dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0))[$toLowerCase]();
      scanner.scan(scan.whitespace);
      if (scanner.lastMatch == null || !dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0))[$contains](" ")) {
        scanner.expect(" ", {name: whitespaceName});
      }
      return scheme;
    }
    static _scanAuthParam(scanner, params) {
      scanner.expect(scan.token, {name: "a token"});
      let name = dart.nullCheck(scanner.lastMatch)._get(0);
      scanner.scan(scan.whitespace);
      scanner.expect("=");
      scanner.scan(scan.whitespace);
      if (scanner.scan(scan.token)) {
        params[$_set](name, dart.nullCheck(scanner.lastMatch)._get(0));
      } else {
        params[$_set](name, scan.expectQuotedString(scanner, {name: "a token or a quoted string"}));
      }
      scanner.scan(scan.whitespace);
    }
    static ['_#new#tearOff'](scheme, parameters) {
      return new authentication_challenge.AuthenticationChallenge.new(scheme, parameters);
    }
  };
  (authentication_challenge.AuthenticationChallenge.new = function(scheme, parameters) {
    this[scheme$] = scheme;
    this[parameters$] = new (T.UnmodifiableMapViewOfString$String()).new(new (T.CaseInsensitiveMapOfString()).from(parameters));
    ;
  }).prototype = authentication_challenge.AuthenticationChallenge.prototype;
  dart.addTypeTests(authentication_challenge.AuthenticationChallenge);
  dart.addTypeCaches(authentication_challenge.AuthenticationChallenge);
  dart.setStaticMethodSignature(authentication_challenge.AuthenticationChallenge, () => ['parseHeader', 'parse', '_scanScheme', '_scanAuthParam']);
  dart.setLibraryUri(authentication_challenge.AuthenticationChallenge, I[24]);
  dart.setFieldSignature(authentication_challenge.AuthenticationChallenge, () => ({
    __proto__: dart.getFields(authentication_challenge.AuthenticationChallenge.__proto__),
    scheme: dart.finalFieldType(core.String),
    parameters: dart.finalFieldType(core.Map$(core.String, core.String))
  }));
  const _is_CaseInsensitiveMap_default = Symbol('_is_CaseInsensitiveMap_default');
  case_insensitive_map.CaseInsensitiveMap$ = dart.generic(V => {
    class CaseInsensitiveMap extends canonicalized_map.CanonicalizedMap$(core.String, core.String, V) {
      static ['_#new#tearOff'](V) {
        return new (case_insensitive_map.CaseInsensitiveMap$(V)).new();
      }
      static ['_#from#tearOff'](V, other) {
        return new (case_insensitive_map.CaseInsensitiveMap$(V)).from(other);
      }
    }
    (CaseInsensitiveMap.new = function() {
      CaseInsensitiveMap.__proto__.new.call(this, dart.fn(key => key[$toLowerCase](), T.StringToString()));
      ;
    }).prototype = CaseInsensitiveMap.prototype;
    (CaseInsensitiveMap.from = function(other) {
      CaseInsensitiveMap.__proto__.from.call(this, other, dart.fn(key => key[$toLowerCase](), T.StringToString()));
      ;
    }).prototype = CaseInsensitiveMap.prototype;
    dart.addTypeTests(CaseInsensitiveMap);
    CaseInsensitiveMap.prototype[_is_CaseInsensitiveMap_default] = true;
    dart.addTypeCaches(CaseInsensitiveMap);
    dart.setLibraryUri(CaseInsensitiveMap, I[25]);
    return CaseInsensitiveMap;
  });
  case_insensitive_map.CaseInsensitiveMap = case_insensitive_map.CaseInsensitiveMap$();
  dart.addTypeTests(case_insensitive_map.CaseInsensitiveMap, _is_CaseInsensitiveMap_default);
  chunked_coding.ChunkedCodingCodec = class ChunkedCodingCodec extends convert.Codec$(core.List$(core.int), core.List$(core.int)) {
    get encoder() {
      return encoder.chunkedCodingEncoder;
    }
    get decoder() {
      return decoder.chunkedCodingDecoder;
    }
    static ['_#_#tearOff']() {
      return new chunked_coding.ChunkedCodingCodec.__();
    }
  };
  (chunked_coding.ChunkedCodingCodec.__ = function() {
    chunked_coding.ChunkedCodingCodec.__proto__.new.call(this);
    ;
  }).prototype = chunked_coding.ChunkedCodingCodec.prototype;
  dart.addTypeTests(chunked_coding.ChunkedCodingCodec);
  dart.addTypeCaches(chunked_coding.ChunkedCodingCodec);
  dart.setGetterSignature(chunked_coding.ChunkedCodingCodec, () => ({
    __proto__: dart.getGetters(chunked_coding.ChunkedCodingCodec.__proto__),
    encoder: encoder.ChunkedCodingEncoder,
    decoder: decoder.ChunkedCodingDecoder
  }));
  dart.setLibraryUri(chunked_coding.ChunkedCodingCodec, I[26]);
  dart.defineLazy(chunked_coding, {
    /*chunked_coding.chunkedCoding*/get chunkedCoding() {
      return C[25] || CT.C25;
    }
  }, false);
  http_date.formatHttpDate = function formatHttpDate(date) {
    let t8;
    date = date.toUtc();
    let buffer = (t8 = new core.StringBuffer.new(), (() => {
      t8.write(http_date._weekdays[$_get](date.weekday - 1));
      t8.write(", ");
      t8.write(date.day <= 9 ? "0" : "");
      t8.write(date.day[$toString]());
      t8.write(" ");
      t8.write(http_date._months[$_get](date.month - 1));
      t8.write(" ");
      t8.write(date.year[$toString]());
      t8.write(date.hour <= 9 ? " 0" : " ");
      t8.write(date.hour[$toString]());
      t8.write(date.minute <= 9 ? ":0" : ":");
      t8.write(date.minute[$toString]());
      t8.write(date.second <= 9 ? ":0" : ":");
      t8.write(date.second[$toString]());
      t8.write(" GMT");
      return t8;
    })());
    return buffer.toString();
  };
  http_date.parseHttpDate = function parseHttpDate(date) {
    return utils$.wrapFormatException(core.DateTime, "HTTP date", date, dart.fn(() => {
      let scanner = new string_scanner.StringScanner.new(date);
      if (scanner.scan(http_date._longWeekdayRegExp)) {
        scanner.expect(", ");
        let day = http_date._parseInt(scanner, 2);
        scanner.expect("-");
        let month = http_date._parseMonth(scanner);
        scanner.expect("-");
        let year = 1900 + http_date._parseInt(scanner, 2);
        scanner.expect(" ");
        let time = http_date._parseTime(scanner);
        scanner.expect(" GMT");
        scanner.expectDone();
        return http_date._makeDateTime(year, month, day, time);
      }
      scanner.expect(http_date._shortWeekdayRegExp);
      if (scanner.scan(", ")) {
        let day = http_date._parseInt(scanner, 2);
        scanner.expect(" ");
        let month = http_date._parseMonth(scanner);
        scanner.expect(" ");
        let year = http_date._parseInt(scanner, 4);
        scanner.expect(" ");
        let time = http_date._parseTime(scanner);
        scanner.expect(" GMT");
        scanner.expectDone();
        return http_date._makeDateTime(year, month, day, time);
      }
      scanner.expect(" ");
      let month = http_date._parseMonth(scanner);
      scanner.expect(" ");
      let day = scanner.scan(" ") ? http_date._parseInt(scanner, 1) : http_date._parseInt(scanner, 2);
      scanner.expect(" ");
      let time = http_date._parseTime(scanner);
      scanner.expect(" ");
      let year = http_date._parseInt(scanner, 4);
      scanner.expectDone();
      return http_date._makeDateTime(year, month, day, time);
    }, T.VoidToDateTime()));
  };
  http_date._parseMonth = function _parseMonth(scanner) {
    scanner.expect(http_date._monthRegExp);
    return http_date._months[$indexOf](dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0))) + 1;
  };
  http_date._parseInt = function _parseInt(scanner, digits) {
    scanner.expect(http_date._digitRegExp);
    if (dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0)).length !== digits) {
      scanner.error("expected a " + dart.str(digits) + "-digit number.");
    }
    return core.int.parse(dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0)));
  };
  http_date._parseTime = function _parseTime(scanner) {
    let hours = http_date._parseInt(scanner, 2);
    if (hours >= 24) scanner.error("hours may not be greater than 24.");
    scanner.expect(":");
    let minutes = http_date._parseInt(scanner, 2);
    if (minutes >= 60) scanner.error("minutes may not be greater than 60.");
    scanner.expect(":");
    let seconds = http_date._parseInt(scanner, 2);
    if (seconds >= 60) scanner.error("seconds may not be greater than 60.");
    return new core.DateTime.new(1, 1, 1, hours, minutes, seconds);
  };
  http_date._makeDateTime = function _makeDateTime(year, month, day, time) {
    let dateTime = new core.DateTime.utc(year, month, day, time.hour, time.minute, time.second);
    if (dateTime.month !== month) {
      dart.throw(new core.FormatException.new("invalid day '" + dart.str(day) + "' for month '" + dart.str(month) + "'."));
    }
    return dateTime;
  };
  dart.defineLazy(http_date, {
    /*http_date._weekdays*/get _weekdays() {
      return C[26] || CT.C26;
    },
    /*http_date._months*/get _months() {
      return C[27] || CT.C27;
    },
    /*http_date._shortWeekdayRegExp*/get _shortWeekdayRegExp() {
      return core.RegExp.new("Mon|Tue|Wed|Thu|Fri|Sat|Sun");
    },
    /*http_date._longWeekdayRegExp*/get _longWeekdayRegExp() {
      return core.RegExp.new("Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday");
    },
    /*http_date._monthRegExp*/get _monthRegExp() {
      return core.RegExp.new("Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec");
    },
    /*http_date._digitRegExp*/get _digitRegExp() {
      return core.RegExp.new("\\d+");
    }
  }, false);
  var type$ = dart.privateName(media_type, "MediaType.type");
  var subtype$ = dart.privateName(media_type, "MediaType.subtype");
  var parameters$0 = dart.privateName(media_type, "MediaType.parameters");
  media_type.MediaType = class MediaType extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get subtype() {
      return this[subtype$];
    }
    set subtype(value) {
      super.subtype = value;
    }
    get parameters() {
      return this[parameters$0];
    }
    set parameters(value) {
      super.parameters = value;
    }
    get mimeType() {
      return this.type + "/" + this.subtype;
    }
    static parse(mediaType) {
      return utils$.wrapFormatException(media_type.MediaType, "media type", mediaType, dart.fn(() => {
        let scanner = new string_scanner.StringScanner.new(mediaType);
        scanner.scan(scan.whitespace);
        scanner.expect(scan.token);
        let type = dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0));
        scanner.expect("/");
        scanner.expect(scan.token);
        let subtype = dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0));
        scanner.scan(scan.whitespace);
        let parameters = new (T.IdentityMapOfString$String()).new();
        while (scanner.scan(";")) {
          scanner.scan(scan.whitespace);
          scanner.expect(scan.token);
          let attribute = dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0));
          scanner.expect("=");
          let value = null;
          if (scanner.scan(scan.token)) {
            value = dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0));
          } else {
            value = scan.expectQuotedString(scanner);
          }
          scanner.scan(scan.whitespace);
          parameters[$_set](attribute, value);
        }
        scanner.expectDone();
        return new media_type.MediaType.new(type, subtype, parameters);
      }, T.VoidToMediaType()));
    }
    static ['_#parse#tearOff'](mediaType) {
      return media_type.MediaType.parse(mediaType);
    }
    static ['_#new#tearOff'](type, subtype, parameters = null) {
      return new media_type.MediaType.new(type, subtype, parameters);
    }
    change(opts) {
      let type = opts && 'type' in opts ? opts.type : null;
      let subtype = opts && 'subtype' in opts ? opts.subtype : null;
      let mimeType = opts && 'mimeType' in opts ? opts.mimeType : null;
      let parameters = opts && 'parameters' in opts ? opts.parameters : null;
      let clearParameters = opts && 'clearParameters' in opts ? opts.clearParameters : false;
      if (mimeType != null) {
        if (type != null) {
          dart.throw(new core.ArgumentError.new("You may not pass both [type] and [mimeType]."));
        } else if (subtype != null) {
          dart.throw(new core.ArgumentError.new("You may not pass both [subtype] and " + "[mimeType]."));
        }
        let segments = mimeType[$split]("/");
        if (segments[$length] !== 2) {
          dart.throw(new core.FormatException.new("Invalid mime type \"" + dart.str(mimeType) + "\"."));
        }
        type = segments[$_get](0);
        subtype = segments[$_get](1);
      }
      type == null ? type = this.type : null;
      subtype == null ? subtype = this.subtype : null;
      parameters == null ? parameters = new (T.IdentityMapOfString$String()).new() : null;
      if (!clearParameters) {
        let newParameters = parameters;
        parameters = T.LinkedHashMapOfString$String().from(this.parameters);
        parameters[$addAll](newParameters);
      }
      return new media_type.MediaType.new(type, subtype, parameters);
    }
    toString() {
      let t8;
      let buffer = (t8 = new core.StringBuffer.new(), (() => {
        t8.write(this.type);
        t8.write("/");
        t8.write(this.subtype);
        return t8;
      })());
      this.parameters[$forEach](dart.fn((attribute, value) => {
        let t8;
        buffer.write("; " + attribute + "=");
        if (scan.nonToken.hasMatch(value)) {
          t8 = buffer;
          (() => {
            t8.write("\"");
            t8.write(value[$replaceAllMapped](media_type._escapedChar, dart.fn(match => "\\" + dart.str(match._get(0)), T.MatchToString())));
            t8.write("\"");
            return t8;
          })();
        } else {
          buffer.write(value);
        }
      }, T.StringAndStringTovoid()));
      return buffer.toString();
    }
  };
  (media_type.MediaType.new = function(type, subtype, parameters = null) {
    this[type$] = type[$toLowerCase]();
    this[subtype$] = subtype[$toLowerCase]();
    this[parameters$0] = new (T.UnmodifiableMapViewOfString$String()).new(parameters == null ? new (T.IdentityMapOfString$String()).new() : new (T.CaseInsensitiveMapOfString()).from(parameters));
    ;
  }).prototype = media_type.MediaType.prototype;
  dart.addTypeTests(media_type.MediaType);
  dart.addTypeCaches(media_type.MediaType);
  dart.setMethodSignature(media_type.MediaType, () => ({
    __proto__: dart.getMethods(media_type.MediaType.__proto__),
    change: dart.fnType(media_type.MediaType, [], {clearParameters: core.bool, mimeType: dart.nullable(core.String), parameters: dart.nullable(core.Map$(core.String, core.String)), subtype: dart.nullable(core.String), type: dart.nullable(core.String)}, {})
  }));
  dart.setStaticMethodSignature(media_type.MediaType, () => ['parse']);
  dart.setGetterSignature(media_type.MediaType, () => ({
    __proto__: dart.getGetters(media_type.MediaType.__proto__),
    mimeType: core.String
  }));
  dart.setLibraryUri(media_type.MediaType, I[27]);
  dart.setFieldSignature(media_type.MediaType, () => ({
    __proto__: dart.getFields(media_type.MediaType.__proto__),
    type: dart.finalFieldType(core.String),
    subtype: dart.finalFieldType(core.String),
    parameters: dart.finalFieldType(core.Map$(core.String, core.String))
  }));
  dart.defineExtensionMethods(media_type.MediaType, ['toString']);
  dart.defineLazy(media_type, {
    /*media_type._escapedChar*/get _escapedChar() {
      return core.RegExp.new("[\"\\x00-\\x1F\\x7F]");
    }
  }, false);
  scan.parseList = function parseList(T, scanner, parseElement) {
    let result = _interceptors.JSArray$(T).of([]);
    while (scanner.scan(",")) {
      scanner.scan(scan.whitespace);
    }
    result[$add](parseElement());
    scanner.scan(scan.whitespace);
    while (scanner.scan(",")) {
      scanner.scan(scan.whitespace);
      if (scanner.matches(",") || scanner.isDone) continue;
      result[$add](parseElement());
      scanner.scan(scan.whitespace);
    }
    return result;
  };
  scan.expectQuotedString = function expectQuotedString(scanner, opts) {
    let name = opts && 'name' in opts ? opts.name : "quoted string";
    scanner.expect(scan._quotedString, {name: name});
    let string = dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0));
    return string[$substring](1, string.length - 1)[$replaceAllMapped](scan._quotedPair, dart.fn(match => dart.nullCheck(match._get(1)), T.MatchToString()));
  };
  dart.defineLazy(scan, {
    /*scan.token*/get token() {
      return core.RegExp.new("[^()<>@,;:\"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+");
    },
    /*scan._lws*/get _lws() {
      return core.RegExp.new("(?:\\r\\n)?[ \\t]+");
    },
    /*scan._quotedString*/get _quotedString() {
      return core.RegExp.new("\"(?:[^\"\\x00-\\x1F\\x7F]|\\\\.)*\"");
    },
    /*scan._quotedPair*/get _quotedPair() {
      return core.RegExp.new("\\\\(.)");
    },
    /*scan.nonToken*/get nonToken() {
      return core.RegExp.new("[()<>@,;:\"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]");
    },
    /*scan.whitespace*/get whitespace() {
      return core.RegExp.new("(?:" + scan._lws.pattern + ")*");
    }
  }, false);
  utils$.wrapFormatException = function wrapFormatException(T, name, value, body) {
    try {
      return body();
    } catch (e) {
      let ex = dart.getThrown(e);
      if (span_exception.SourceSpanFormatException.is(ex)) {
        let error = ex;
        dart.throw(new span_exception.SourceSpanFormatException.new("Invalid " + name + ": " + error.message, error.span, error.source));
      } else if (core.FormatException.is(ex)) {
        let error = ex;
        dart.throw(new core.FormatException.new("Invalid " + name + " \"" + value + "\": " + error.message, error.source, error.offset));
      } else
        throw e;
    }
  };
  var _decode = dart.privateName(decoder, "_decode");
  var _state = dart.privateName(decoder, "_state");
  decoder.ChunkedCodingDecoder = class ChunkedCodingDecoder extends convert.Converter$(core.List$(core.int), core.List$(core.int)) {
    static ['_#_#tearOff']() {
      return new decoder.ChunkedCodingDecoder.__();
    }
    convert(input) {
      T.ListOfint().as(input);
      let sink = new decoder._Sink.new(T.StreamControllerOfListOfint().new());
      let output = sink[_decode](input, 0, input[$length]);
      if (sink[_state][$_equals](decoder._State.end)) return output;
      dart.throw(new core.FormatException.new("Input ended unexpectedly.", input, input[$length]));
    }
    startChunkedConversion(sink) {
      T.SinkOfListOfint().as(sink);
      return new decoder._Sink.new(sink);
    }
  };
  (decoder.ChunkedCodingDecoder.__ = function() {
    decoder.ChunkedCodingDecoder.__proto__.new.call(this);
    ;
  }).prototype = decoder.ChunkedCodingDecoder.prototype;
  dart.addTypeTests(decoder.ChunkedCodingDecoder);
  dart.addTypeCaches(decoder.ChunkedCodingDecoder);
  dart.setMethodSignature(decoder.ChunkedCodingDecoder, () => ({
    __proto__: dart.getMethods(decoder.ChunkedCodingDecoder.__proto__),
    convert: dart.fnType(core.List$(core.int), [dart.nullable(core.Object)]),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(decoder.ChunkedCodingDecoder, I[28]);
  var ___Sink__size = dart.privateName(decoder, "_#_Sink#_size");
  var _sink$ = dart.privateName(decoder, "_sink");
  var _size = dart.privateName(decoder, "_size");
  var _close = dart.privateName(decoder, "_close");
  var _digitForByte = dart.privateName(decoder, "_digitForByte");
  var _State__name = dart.privateName(decoder, "_State._name");
  decoder._Sink = class _Sink extends convert.ByteConversionSinkBase {
    get [_size]() {
      let t10;
      t10 = this[___Sink__size];
      return t10 == null ? dart.throw(new _internal.LateError.fieldNI("_size")) : t10;
    }
    set [_size](library$32package$58http_parser$47src$47chunked_coding$47decoder$46dart$58$58_size$35param) {
      this[___Sink__size] = library$32package$58http_parser$47src$47chunked_coding$47decoder$46dart$58$58_size$35param;
    }
    static ['_#new#tearOff'](_sink) {
      return new decoder._Sink.new(_sink);
    }
    add(chunk) {
      T.ListOfint().as(chunk);
      return this.addSlice(chunk, 0, chunk[$length], false);
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      let output = this[_decode](chunk, start, end);
      if (output[$isNotEmpty]) this[_sink$].add(output);
      if (isLast) this[_close](chunk, end);
    }
    close() {
      return this[_close]();
    }
    [_close](chunk = null, index = null) {
      if (!this[_state][$_equals](decoder._State.end)) {
        dart.throw(new core.FormatException.new("Input ended unexpectedly.", chunk, index));
      }
      this[_sink$].close();
    }
    [_decode](bytes, start, end) {
      function assertCurrentChar(char, name) {
        if (bytes[$_get](start) !== char) {
          dart.throw(new core.FormatException.new("Expected " + name + ".", bytes, start));
        }
      }
      dart.fn(assertCurrentChar, T.intAndStringTovoid());
      let buffer = new typed_buffer.Uint8Buffer.new();
      while (start !== end) {
        switch (this[_state]) {
          case C[28] || CT.C28:
            {
              this[_size] = this[_digitForByte](bytes, start);
              this[_state] = decoder._State.size;
              start = start + 1;
              break;
            }
          case C[29] || CT.C29:
            {
              if (bytes[$_get](start) === 13) {
                this[_state] = decoder._State.sizeBeforeLF;
              } else {
                this[_size] = (this[_size] << 4 >>> 0) + this[_digitForByte](bytes, start);
              }
              start = start + 1;
              break;
            }
          case C[30] || CT.C30:
            {
              assertCurrentChar(10, "LF");
              this[_state] = this[_size] === 0 ? decoder._State.endBeforeCR : decoder._State.body;
              start = start + 1;
              break;
            }
          case C[31] || CT.C31:
            {
              let chunkEnd = math.min(core.int, end, start + this[_size]);
              buffer.addAll(bytes, start, chunkEnd);
              this[_size] = this[_size] - (chunkEnd - start);
              start = chunkEnd;
              if (this[_size] === 0) this[_state] = decoder._State.bodyBeforeCR;
              break;
            }
          case C[32] || CT.C32:
            {
              assertCurrentChar(13, "CR");
              this[_state] = decoder._State.bodyBeforeLF;
              start = start + 1;
              break;
            }
          case C[33] || CT.C33:
            {
              assertCurrentChar(10, "LF");
              this[_state] = decoder._State.boundary;
              start = start + 1;
              break;
            }
          case C[34] || CT.C34:
            {
              assertCurrentChar(13, "CR");
              this[_state] = decoder._State.endBeforeLF;
              start = start + 1;
              break;
            }
          case C[35] || CT.C35:
            {
              assertCurrentChar(10, "LF");
              this[_state] = decoder._State.end;
              start = start + 1;
              break;
            }
          case C[36] || CT.C36:
            {
              dart.throw(new core.FormatException.new("Expected no more data.", bytes, start));
            }
        }
      }
      return buffer.buffer[$asUint8List](0, buffer.length);
    }
    [_digitForByte](bytes, index) {
      let byte = bytes[$_get](index);
      let digit = (48 ^ byte) >>> 0;
      if (digit <= 9) {
        if (digit >= 0) return digit;
      } else {
        let letter = (32 | byte) >>> 0;
        if (97 <= letter && letter <= 102) return letter - 97 + 10;
      }
      dart.throw(new core.FormatException.new("Invalid hexadecimal byte 0x" + byte[$toRadixString](16)[$toUpperCase]() + ".", bytes, index));
    }
  };
  (decoder._Sink.new = function(_sink) {
    this[_state] = decoder._State.boundary;
    this[___Sink__size] = null;
    this[_sink$] = _sink;
    decoder._Sink.__proto__.new.call(this);
    ;
  }).prototype = decoder._Sink.prototype;
  dart.addTypeTests(decoder._Sink);
  dart.addTypeCaches(decoder._Sink);
  dart.setMethodSignature(decoder._Sink, () => ({
    __proto__: dart.getMethods(decoder._Sink.__proto__),
    add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    close: dart.fnType(dart.void, []),
    [_close]: dart.fnType(dart.void, [], [dart.nullable(core.List$(core.int)), dart.nullable(core.int)]),
    [_decode]: dart.fnType(typed_data.Uint8List, [core.List$(core.int), core.int, core.int]),
    [_digitForByte]: dart.fnType(core.int, [core.List$(core.int), core.int])
  }));
  dart.setGetterSignature(decoder._Sink, () => ({
    __proto__: dart.getGetters(decoder._Sink.__proto__),
    [_size]: core.int
  }));
  dart.setSetterSignature(decoder._Sink, () => ({
    __proto__: dart.getSetters(decoder._Sink.__proto__),
    [_size]: core.int
  }));
  dart.setLibraryUri(decoder._Sink, I[28]);
  dart.setFieldSignature(decoder._Sink, () => ({
    __proto__: dart.getFields(decoder._Sink.__proto__),
    [_sink$]: dart.finalFieldType(core.Sink$(core.List$(core.int))),
    [_state]: dart.fieldType(decoder._State),
    [___Sink__size]: dart.fieldType(dart.nullable(core.int))
  }));
  var _name$ = dart.privateName(decoder, "_name");
  const _name$0 = _State__name;
  decoder._State = class _State extends core.Object {
    get [_name$]() {
      return this[_name$0];
    }
    set [_name$](value) {
      super[_name$] = value;
    }
    static ['_#_#tearOff'](_name) {
      return new decoder._State.__(_name);
    }
    toString() {
      return this[_name$];
    }
  };
  (decoder._State.__ = function(_name) {
    this[_name$0] = _name;
    ;
  }).prototype = decoder._State.prototype;
  dart.addTypeTests(decoder._State);
  dart.addTypeCaches(decoder._State);
  dart.setLibraryUri(decoder._State, I[28]);
  dart.setFieldSignature(decoder._State, () => ({
    __proto__: dart.getFields(decoder._State.__proto__),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.setStaticFieldSignature(decoder._State, () => ['boundary', 'size', 'sizeBeforeLF', 'body', 'bodyBeforeCR', 'bodyBeforeLF', 'endBeforeCR', 'endBeforeLF', 'end']);
  dart.defineExtensionMethods(decoder._State, ['toString']);
  dart.defineLazy(decoder._State, {
    /*decoder._State.boundary*/get boundary() {
      return C[28] || CT.C28;
    },
    /*decoder._State.size*/get size() {
      return C[29] || CT.C29;
    },
    /*decoder._State.sizeBeforeLF*/get sizeBeforeLF() {
      return C[30] || CT.C30;
    },
    /*decoder._State.body*/get body() {
      return C[31] || CT.C31;
    },
    /*decoder._State.bodyBeforeCR*/get bodyBeforeCR() {
      return C[32] || CT.C32;
    },
    /*decoder._State.bodyBeforeLF*/get bodyBeforeLF() {
      return C[33] || CT.C33;
    },
    /*decoder._State.endBeforeCR*/get endBeforeCR() {
      return C[34] || CT.C34;
    },
    /*decoder._State.endBeforeLF*/get endBeforeLF() {
      return C[35] || CT.C35;
    },
    /*decoder._State.end*/get end() {
      return C[36] || CT.C36;
    }
  }, false);
  dart.defineLazy(decoder, {
    /*decoder.chunkedCodingDecoder*/get chunkedCodingDecoder() {
      return C[37] || CT.C37;
    }
  }, false);
  encoder.ChunkedCodingEncoder = class ChunkedCodingEncoder extends convert.Converter$(core.List$(core.int), core.List$(core.int)) {
    static ['_#_#tearOff']() {
      return new encoder.ChunkedCodingEncoder.__();
    }
    convert(input) {
      T.ListOfint().as(input);
      return encoder._convert(input, 0, input[$length], {isLast: true});
    }
    startChunkedConversion(sink) {
      T.SinkOfListOfint().as(sink);
      return new encoder._Sink.new(sink);
    }
  };
  (encoder.ChunkedCodingEncoder.__ = function() {
    encoder.ChunkedCodingEncoder.__proto__.new.call(this);
    ;
  }).prototype = encoder.ChunkedCodingEncoder.prototype;
  dart.addTypeTests(encoder.ChunkedCodingEncoder);
  dart.addTypeCaches(encoder.ChunkedCodingEncoder);
  dart.setMethodSignature(encoder.ChunkedCodingEncoder, () => ({
    __proto__: dart.getMethods(encoder.ChunkedCodingEncoder.__proto__),
    convert: dart.fnType(core.List$(core.int), [dart.nullable(core.Object)]),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(encoder.ChunkedCodingEncoder, I[29]);
  var _sink$0 = dart.privateName(encoder, "_sink");
  encoder._Sink = class _Sink extends convert.ByteConversionSinkBase {
    static ['_#new#tearOff'](_sink) {
      return new encoder._Sink.new(_sink);
    }
    add(chunk) {
      T.ListOfint().as(chunk);
      this[_sink$0].add(encoder._convert(chunk, 0, chunk[$length]));
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      this[_sink$0].add(encoder._convert(chunk, start, end, {isLast: isLast}));
      if (isLast) this[_sink$0].close();
    }
    close() {
      this[_sink$0].add(encoder._doneChunk);
      this[_sink$0].close();
    }
  };
  (encoder._Sink.new = function(_sink) {
    this[_sink$0] = _sink;
    encoder._Sink.__proto__.new.call(this);
    ;
  }).prototype = encoder._Sink.prototype;
  dart.addTypeTests(encoder._Sink);
  dart.addTypeCaches(encoder._Sink);
  dart.setMethodSignature(encoder._Sink, () => ({
    __proto__: dart.getMethods(encoder._Sink.__proto__),
    add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(encoder._Sink, I[29]);
  dart.setFieldSignature(encoder._Sink, () => ({
    __proto__: dart.getFields(encoder._Sink.__proto__),
    [_sink$0]: dart.finalFieldType(core.Sink$(core.List$(core.int)))
  }));
  encoder._convert = function _convert(bytes, start, end, opts) {
    let t10, t10$, t10$0, t10$1;
    let isLast = opts && 'isLast' in opts ? opts.isLast : false;
    if (end === start) return isLast ? encoder._doneChunk : C[38] || CT.C38;
    let size = end - start;
    let sizeInHex = size[$toRadixString](16);
    let footerSize = isLast ? encoder._doneChunk[$length] : 0;
    let list = _native_typed_data.NativeUint8List.new(sizeInHex.length + 4 + size + footerSize);
    list[$setRange](0, sizeInHex.length, sizeInHex[$codeUnits]);
    let cursor = sizeInHex.length;
    list[$_set]((t10 = cursor, cursor = t10 + 1, t10), 13);
    list[$_set]((t10$ = cursor, cursor = t10$ + 1, t10$), 10);
    list[$setRange](cursor, cursor + end - start, bytes, start);
    cursor = cursor + (end - start);
    list[$_set]((t10$0 = cursor, cursor = t10$0 + 1, t10$0), 13);
    list[$_set]((t10$1 = cursor, cursor = t10$1 + 1, t10$1), 10);
    if (isLast) {
      list[$setRange](list[$length] - footerSize, list[$length], encoder._doneChunk);
    }
    return list;
  };
  dart.defineLazy(encoder, {
    /*encoder.chunkedCodingEncoder*/get chunkedCodingEncoder() {
      return C[39] || CT.C39;
    },
    /*encoder._doneChunk*/get _doneChunk() {
      return _native_typed_data.NativeUint8List.fromList(T.JSArrayOfint().of([48, 13, 10, 13, 10]));
    }
  }, false);
  dart.defineLazy(charcodes, {
    /*charcodes.$lf*/get $lf() {
      return 10;
    },
    /*charcodes.$cr*/get $cr() {
      return 13;
    },
    /*charcodes.$0*/get $0() {
      return 48;
    },
    /*charcodes.$1*/get $1() {
      return 49;
    },
    /*charcodes.$3*/get $3() {
      return 51;
    },
    /*charcodes.$4*/get $4() {
      return 52;
    },
    /*charcodes.$7*/get $7() {
      return 55;
    },
    /*charcodes.$A*/get $A() {
      return 65;
    },
    /*charcodes.$q*/get $q() {
      return 113;
    },
    /*charcodes.$a*/get $a() {
      return 97;
    },
    /*charcodes.$f*/get $f() {
      return 102;
    }
  }, false);
  var _table = dart.privateName(typed_queue, "_TypedQueue._table");
  var _head = dart.privateName(typed_queue, "_TypedQueue._head");
  var _tail = dart.privateName(typed_queue, "_TypedQueue._tail");
  var _table$ = dart.privateName(typed_queue, "_table");
  var _head$ = dart.privateName(typed_queue, "_head");
  var _tail$ = dart.privateName(typed_queue, "_tail");
  var _createBuffer = dart.privateName(typed_queue, "_createBuffer");
  var _createList = dart.privateName(typed_queue, "_createList");
  var _writeToList = dart.privateName(typed_queue, "_writeToList");
  var _growAtCapacity = dart.privateName(typed_queue, "_growAtCapacity");
  var _growTo = dart.privateName(typed_queue, "_growTo");
  var _defaultValue = dart.privateName(typed_queue, "_defaultValue");
  const _is__TypedQueue_default = Symbol('_is__TypedQueue_default');
  typed_queue._TypedQueue$ = dart.generic((E, L) => {
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    var __t$ListOfE = () => (__t$ListOfE = dart.constFn(core.List$(E)))();
    var __t$EN = () => (__t$EN = dart.constFn(dart.nullable(E)))();
    const Object_ListMixin$36 = class Object_ListMixin extends core.Object {};
    (Object_ListMixin$36.new = function() {
    }).prototype = Object_ListMixin$36.prototype;
    dart.applyMixin(Object_ListMixin$36, collection.ListMixin$(E));
    class _TypedQueue extends Object_ListMixin$36 {
      get [_table$]() {
        return this[_table];
      }
      set [_table$](value) {
        this[_table] = value;
      }
      get [_head$]() {
        return this[_head];
      }
      set [_head$](value) {
        this[_head] = value;
      }
      get [_tail$]() {
        return this[_tail];
      }
      set [_tail$](value) {
        this[_tail] = value;
      }
      get length() {
        return (this[_tail$] - this[_head$] & this[_table$][$length] - 1) >>> 0;
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        let list = growable ? this[_createBuffer](this.length) : this[_createList](this.length);
        this[_writeToList](list);
        return list;
      }
      cast(T) {
        if (queue_list.QueueList$(T).is(this)) return queue_list.QueueList$(T).as(this);
        dart.throw(new core.UnsupportedError.new(dart.str(this) + " cannot be cast to the desired type."));
      }
      retype(T) {
        return this.cast(T);
      }
      addLast(value) {
        E.as(value);
        this[_table$][$_set](this[_tail$], value);
        this[_tail$] = (this[_tail$] + 1 & this[_table$][$length] - 1) >>> 0;
        if (this[_head$] === this[_tail$]) this[_growAtCapacity]();
      }
      addFirst(value) {
        E.as(value);
        this[_head$] = (this[_head$] - 1 & this[_table$][$length] - 1) >>> 0;
        this[_table$][$_set](this[_head$], value);
        if (this[_head$] === this[_tail$]) this[_growAtCapacity]();
      }
      removeFirst() {
        if (this[_head$] === this[_tail$]) dart.throw(new core.StateError.new("No element"));
        let result = this[_table$][$_get](this[_head$]);
        this[_head$] = (this[_head$] + 1 & this[_table$][$length] - 1) >>> 0;
        return result;
      }
      removeLast() {
        if (this[_head$] === this[_tail$]) dart.throw(new core.StateError.new("No element"));
        this[_tail$] = (this[_tail$] - 1 & this[_table$][$length] - 1) >>> 0;
        return this[_table$][$_get](this[_tail$]);
      }
      add(value) {
        E.as(value);
        return this.addLast(value);
      }
      set length(value) {
        core.RangeError.checkNotNegative(value, "length");
        let delta = value - this.length;
        if (delta >= 0) {
          let needsToGrow = this[_table$][$length] <= value;
          if (needsToGrow) this[_growTo](value);
          this[_tail$] = (this[_tail$] + delta & this[_table$][$length] - 1) >>> 0;
          if (!needsToGrow) this.fillRange(value - delta, value, this[_defaultValue]);
        } else {
          this.removeRange(value, this.length);
        }
      }
      _get(index) {
        core.RangeError.checkValidIndex(index, this, null, this.length);
        return this[_table$][$_get]((this[_head$] + index & this[_table$][$length] - 1) >>> 0);
      }
      _set(index, value$) {
        let value = value$;
        E.as(value);
        core.RangeError.checkValidIndex(index, this);
        this[_table$][$_set]((this[_head$] + index & this[_table$][$length] - 1) >>> 0, value);
        return value$;
      }
      removeRange(start, end) {
        let length = this.length;
        core.RangeError.checkValidRange(start, end, length);
        if (start === 0) {
          this[_head$] = (this[_head$] + end & this[_table$][$length] - 1) >>> 0;
          return;
        }
        let elementsAfter = length - end;
        if (elementsAfter === 0) {
          this[_tail$] = (this[_head$] + start & this[_table$][$length] - 1) >>> 0;
          return;
        }
        let removedElements = end - start;
        if (start < elementsAfter) {
          this.setRange(removedElements, end, this);
          this[_head$] = (this[_head$] + removedElements & this[_table$][$length] - 1) >>> 0;
        } else {
          this.setRange(start, length - removedElements, this, end);
          this[_tail$] = (this[_tail$] - removedElements & this[_table$][$length] - 1) >>> 0;
        }
      }
      setRange(start, end, iterable, skipCount = 0) {
        __t$IterableOfE().as(iterable);
        core.RangeError.checkValidRange(start, end, this.length);
        if (start === end) return;
        let targetStart = (this[_head$] + start & this[_table$][$length] - 1) >>> 0;
        let targetEnd = (this[_head$] + end & this[_table$][$length] - 1) >>> 0;
        let targetIsContiguous = targetStart < targetEnd;
        if (iterable === this) {
          let sourceStart = (this[_head$] + skipCount & this[_table$][$length] - 1) >>> 0;
          let sourceEnd = (sourceStart + (end - start) & this[_table$][$length] - 1) >>> 0;
          if (sourceStart === targetStart) return;
          let sourceIsContiguous = sourceStart < sourceEnd;
          if (targetIsContiguous && sourceIsContiguous) {
            this[_table$][$setRange](targetStart, targetEnd, this[_table$], sourceStart);
          } else if (!targetIsContiguous && !sourceIsContiguous) {
            if (sourceStart > targetStart) {
              let startGap = sourceStart - targetStart;
              let firstEnd = this[_table$][$length] - startGap;
              this[_table$][$setRange](targetStart, firstEnd, this[_table$], sourceStart);
              this[_table$][$setRange](firstEnd, this[_table$][$length], this[_table$]);
              this[_table$][$setRange](0, targetEnd, this[_table$], startGap);
            } else if (sourceEnd < targetEnd) {
              let firstStart = targetEnd - sourceEnd;
              this[_table$][$setRange](firstStart, targetEnd, this[_table$]);
              this[_table$][$setRange](0, firstStart, this[_table$], this[_table$][$length] - firstStart);
              this[_table$][$setRange](targetStart, this[_table$][$length], this[_table$], sourceStart);
            }
          } else if (sourceStart < targetEnd) {
            if (sourceIsContiguous) {
              this[_table$][$setRange](targetStart, this[_table$][$length], this[_table$], sourceStart);
              this[_table$][$setRange](0, targetEnd, this[_table$], sourceStart + (this[_table$][$length] - targetStart));
            } else {
              let firstEnd = this[_table$][$length] - sourceStart;
              this[_table$][$setRange](targetStart, firstEnd, this[_table$], sourceStart);
              this[_table$][$setRange](firstEnd, targetEnd, this[_table$]);
            }
          } else {
            if (sourceIsContiguous) {
              this[_table$][$setRange](0, targetEnd, this[_table$], sourceStart + (this[_table$][$length] - targetStart));
              this[_table$][$setRange](targetStart, this[_table$][$length], this[_table$], sourceStart);
            } else {
              let firstStart = targetEnd - sourceEnd;
              this[_table$][$setRange](firstStart, targetEnd, this[_table$]);
              this[_table$][$setRange](targetStart, firstStart, this[_table$], sourceStart);
            }
          }
        } else if (targetIsContiguous) {
          this[_table$][$setRange](targetStart, targetEnd, iterable, skipCount);
        } else if (__t$ListOfE().is(iterable)) {
          this[_table$][$setRange](targetStart, this[_table$][$length], iterable, skipCount);
          this[_table$][$setRange](0, targetEnd, iterable, skipCount + (this[_table$][$length] - targetStart));
        } else {
          super.setRange(start, end, iterable, skipCount);
        }
      }
      fillRange(start, end, value = null) {
        __t$EN().as(value);
        let startInTable = (this[_head$] + start & this[_table$][$length] - 1) >>> 0;
        let endInTable = (this[_head$] + end & this[_table$][$length] - 1) >>> 0;
        if (startInTable <= endInTable) {
          this[_table$][$fillRange](startInTable, endInTable, value);
        } else {
          this[_table$][$fillRange](startInTable, this[_table$][$length], value);
          this[_table$][$fillRange](0, endInTable, value);
        }
      }
      sublist(start, end = null) {
        let length = this.length;
        let nonNullEnd = core.RangeError.checkValidRange(start, end, length);
        let list = this[_createList](nonNullEnd - start);
        this[_writeToList](list, start, nonNullEnd);
        return list;
      }
      [_writeToList](target, start = null, end = null) {
        start == null ? start = 0 : null;
        end == null ? end = this.length : null;
        if (!(target[$length] >= dart.notNull(end) - dart.notNull(start))) dart.assertFailed(null, I[30], 278, 12, "target.length >= end - start");
        if (!(dart.notNull(start) <= dart.notNull(end))) dart.assertFailed(null, I[30], 279, 12, "start <= end");
        let elementsToWrite = dart.notNull(end) - dart.notNull(start);
        let startInTable = (this[_head$] + dart.notNull(start) & this[_table$][$length] - 1) >>> 0;
        let endInTable = (this[_head$] + dart.notNull(end) & this[_table$][$length] - 1) >>> 0;
        if (startInTable <= endInTable) {
          target[$setRange](0, elementsToWrite, this[_table$], startInTable);
        } else {
          let firstPartSize = this[_table$][$length] - startInTable;
          target[$setRange](0, firstPartSize, this[_table$], startInTable);
          target[$setRange](firstPartSize, firstPartSize + endInTable, this[_table$], 0);
        }
        return elementsToWrite;
      }
      [_growAtCapacity]() {
        if (!(this[_head$] === this[_tail$])) dart.assertFailed(null, I[30], 297, 12, "_head == _tail");
        let newTable = this[_createList](this[_table$][$length] * 2);
        let partitionPoint = this[_table$][$length] - this[_head$];
        newTable[$setRange](0, partitionPoint, this[_table$], this[_head$]);
        if (partitionPoint !== this[_table$][$length]) {
          newTable[$setRange](partitionPoint, this[_table$][$length], this[_table$]);
        }
        this[_head$] = 0;
        this[_tail$] = this[_table$][$length];
        this[_table$] = newTable;
      }
      [_growTo](newElementCount) {
        if (!(newElementCount >= this.length)) dart.assertFailed(null, I[30], 316, 12, "newElementCount >= length");
        newElementCount = newElementCount + newElementCount[$rightShift](1);
        let newTable = this[_createList](typed_queue._nextPowerOf2(newElementCount));
        this[_tail$] = this[_writeToList](newTable);
        this[_table$] = newTable;
        this[_head$] = 0;
      }
    }
    (_TypedQueue.new = function(table) {
      this[_table] = L.as(table);
      this[_head] = 0;
      this[_tail] = 0;
      ;
    }).prototype = _TypedQueue.prototype;
    dart.addTypeTests(_TypedQueue);
    _TypedQueue.prototype[_is__TypedQueue_default] = true;
    dart.addTypeCaches(_TypedQueue);
    dart.setMethodSignature(_TypedQueue, () => ({
      __proto__: dart.getMethods(_TypedQueue.__proto__),
      cast: dart.gFnType(T => [queue_list.QueueList$(T), []], T => [dart.nullable(core.Object)]),
      [$cast]: dart.gFnType(T => [queue_list.QueueList$(T), []], T => [dart.nullable(core.Object)]),
      retype: dart.gFnType(T => [queue_list.QueueList$(T), []], T => [dart.nullable(core.Object)]),
      addLast: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      addFirst: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      removeFirst: dart.fnType(E, []),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [$_set]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      sublist: dart.fnType(L, [core.int], [dart.nullable(core.int)]),
      [$sublist]: dart.fnType(L, [core.int], [dart.nullable(core.int)]),
      [_writeToList]: dart.fnType(core.int, [core.List$(E)], [dart.nullable(core.int), dart.nullable(core.int)]),
      [_growAtCapacity]: dart.fnType(dart.void, []),
      [_growTo]: dart.fnType(dart.void, [core.int])
    }));
    dart.setGetterSignature(_TypedQueue, () => ({
      __proto__: dart.getGetters(_TypedQueue.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setSetterSignature(_TypedQueue, () => ({
      __proto__: dart.getSetters(_TypedQueue.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(_TypedQueue, I[31]);
    dart.setFieldSignature(_TypedQueue, () => ({
      __proto__: dart.getFields(_TypedQueue.__proto__),
      [_table$]: dart.fieldType(L),
      [_head$]: dart.fieldType(core.int),
      [_tail$]: dart.fieldType(core.int)
    }));
    dart.defineExtensionMethods(_TypedQueue, [
      'toList',
      'cast',
      'removeLast',
      'add',
      '_get',
      '_set',
      'removeRange',
      'setRange',
      'fillRange',
      'sublist'
    ]);
    dart.defineExtensionAccessors(_TypedQueue, ['length']);
    return _TypedQueue;
  });
  typed_queue._TypedQueue = typed_queue._TypedQueue$();
  dart.addTypeTests(typed_queue._TypedQueue, _is__TypedQueue_default);
  const _is__IntQueue_default = Symbol('_is__IntQueue_default');
  typed_queue._IntQueue$ = dart.generic(L => {
    class _IntQueue extends typed_queue._TypedQueue$(core.int, L) {
      get [_defaultValue]() {
        return 0;
      }
    }
    (_IntQueue.new = function(queue) {
      _IntQueue.__proto__.new.call(this, queue);
      ;
    }).prototype = _IntQueue.prototype;
    dart.addTypeTests(_IntQueue);
    _IntQueue.prototype[_is__IntQueue_default] = true;
    dart.addTypeCaches(_IntQueue);
    dart.setGetterSignature(_IntQueue, () => ({
      __proto__: dart.getGetters(_IntQueue.__proto__),
      [_defaultValue]: core.int
    }));
    dart.setLibraryUri(_IntQueue, I[31]);
    return _IntQueue;
  });
  typed_queue._IntQueue = typed_queue._IntQueue$();
  dart.addTypeTests(typed_queue._IntQueue, _is__IntQueue_default);
  const _is__FloatQueue_default = Symbol('_is__FloatQueue_default');
  typed_queue._FloatQueue$ = dart.generic(L => {
    class _FloatQueue extends typed_queue._TypedQueue$(core.double, L) {
      get [_defaultValue]() {
        return 0;
      }
    }
    (_FloatQueue.new = function(queue) {
      _FloatQueue.__proto__.new.call(this, queue);
      ;
    }).prototype = _FloatQueue.prototype;
    dart.addTypeTests(_FloatQueue);
    _FloatQueue.prototype[_is__FloatQueue_default] = true;
    dart.addTypeCaches(_FloatQueue);
    dart.setGetterSignature(_FloatQueue, () => ({
      __proto__: dart.getGetters(_FloatQueue.__proto__),
      [_defaultValue]: core.double
    }));
    dart.setLibraryUri(_FloatQueue, I[31]);
    return _FloatQueue;
  });
  typed_queue._FloatQueue = typed_queue._FloatQueue$();
  dart.addTypeTests(typed_queue._FloatQueue, _is__FloatQueue_default);
  var _add = dart.privateName(typed_queue, "_add");
  var _add$ = dart.privateName(queue_list, "_add");
  var _head$0 = dart.privateName(queue_list, "_head");
  var _writeToList$ = dart.privateName(queue_list, "_writeToList");
  var _grow = dart.privateName(typed_queue, "_grow");
  var _grow$ = dart.privateName(queue_list, "_grow");
  var _preGrow = dart.privateName(typed_queue, "_preGrow");
  var _preGrow$ = dart.privateName(queue_list, "_preGrow");
  var _table$0 = dart.privateName(queue_list, "_table");
  var _tail$0 = dart.privateName(queue_list, "_tail");
  var _head_ = dart.privateName(typed_queue, "_head=");
  var _table_ = dart.privateName(typed_queue, "_table=");
  var _tail_ = dart.privateName(typed_queue, "_tail=");
  typed_queue.Uint8Queue = class Uint8Queue extends typed_queue._IntQueue$(typed_data.Uint8List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Uint8Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t10;
      t10 = new typed_queue.Uint8Queue.new(elements[$length]);
      return (() => {
        t10.addAll(elements);
        return t10;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Uint8Queue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeUint8List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Uint8Buffer.new(size);
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[42] || CT.C42, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[43] || CT.C43, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[44] || CT.C44, null, [newElementCount]));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[45] || CT.C45)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[46] || CT.C46)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[47] || CT.C47, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[48] || CT.C48, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[49] || CT.C49, value));
    }
  };
  (typed_queue.Uint8Queue.new = function(initialCapacity = null) {
    typed_queue.Uint8Queue.__proto__.new.call(this, _native_typed_data.NativeUint8List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint8Queue.prototype;
  dart.addTypeTests(typed_queue.Uint8Queue);
  dart.addTypeCaches(typed_queue.Uint8Queue);
  typed_queue.Uint8Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Uint8Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint8Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Uint8List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Uint8Buffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Uint8Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Uint8Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint8Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Uint8Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint8Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Uint8Queue, I[31]);
  typed_queue.Int8Queue = class Int8Queue extends typed_queue._IntQueue$(typed_data.Int8List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Int8Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t10;
      t10 = new typed_queue.Int8Queue.new(elements[$length]);
      return (() => {
        t10.addAll(elements);
        return t10;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Int8Queue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeInt8List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Int8Buffer.new(size);
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[42] || CT.C42, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[43] || CT.C43, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[44] || CT.C44, null, [newElementCount]));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[45] || CT.C45)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[46] || CT.C46)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[47] || CT.C47, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[48] || CT.C48, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[49] || CT.C49, value));
    }
  };
  (typed_queue.Int8Queue.new = function(initialCapacity = null) {
    typed_queue.Int8Queue.__proto__.new.call(this, _native_typed_data.NativeInt8List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int8Queue.prototype;
  dart.addTypeTests(typed_queue.Int8Queue);
  dart.addTypeCaches(typed_queue.Int8Queue);
  typed_queue.Int8Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Int8Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int8Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Int8List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Int8Buffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Int8Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Int8Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int8Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Int8Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int8Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Int8Queue, I[31]);
  typed_queue.Uint8ClampedQueue = class Uint8ClampedQueue extends typed_queue._IntQueue$(typed_data.Uint8ClampedList) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Uint8ClampedQueue.new(initialCapacity);
    }
    static fromList(elements) {
      let t10;
      t10 = new typed_queue.Uint8ClampedQueue.new(elements[$length]);
      return (() => {
        t10.addAll(elements);
        return t10;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Uint8ClampedQueue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeUint8ClampedList.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Uint8ClampedBuffer.new(size);
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[42] || CT.C42, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[43] || CT.C43, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[44] || CT.C44, null, [newElementCount]));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[45] || CT.C45)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[46] || CT.C46)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[47] || CT.C47, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[48] || CT.C48, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[49] || CT.C49, value));
    }
  };
  (typed_queue.Uint8ClampedQueue.new = function(initialCapacity = null) {
    typed_queue.Uint8ClampedQueue.__proto__.new.call(this, _native_typed_data.NativeUint8ClampedList.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint8ClampedQueue.prototype;
  dart.addTypeTests(typed_queue.Uint8ClampedQueue);
  dart.addTypeCaches(typed_queue.Uint8ClampedQueue);
  typed_queue.Uint8ClampedQueue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Uint8ClampedQueue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint8ClampedQueue.__proto__),
    [_createList]: dart.fnType(typed_data.Uint8ClampedList, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Uint8ClampedBuffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Uint8ClampedQueue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Uint8ClampedQueue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint8ClampedQueue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Uint8ClampedQueue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint8ClampedQueue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Uint8ClampedQueue, I[31]);
  typed_queue.Uint16Queue = class Uint16Queue extends typed_queue._IntQueue$(typed_data.Uint16List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Uint16Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t10;
      t10 = new typed_queue.Uint16Queue.new(elements[$length]);
      return (() => {
        t10.addAll(elements);
        return t10;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Uint16Queue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeUint16List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Uint16Buffer.new(size);
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[42] || CT.C42, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[43] || CT.C43, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[44] || CT.C44, null, [newElementCount]));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[45] || CT.C45)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[46] || CT.C46)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[47] || CT.C47, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[48] || CT.C48, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[49] || CT.C49, value));
    }
  };
  (typed_queue.Uint16Queue.new = function(initialCapacity = null) {
    typed_queue.Uint16Queue.__proto__.new.call(this, _native_typed_data.NativeUint16List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint16Queue.prototype;
  dart.addTypeTests(typed_queue.Uint16Queue);
  dart.addTypeCaches(typed_queue.Uint16Queue);
  typed_queue.Uint16Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Uint16Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint16Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Uint16List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Uint16Buffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Uint16Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Uint16Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint16Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Uint16Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint16Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Uint16Queue, I[31]);
  typed_queue.Int16Queue = class Int16Queue extends typed_queue._IntQueue$(typed_data.Int16List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Int16Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t10;
      t10 = new typed_queue.Int16Queue.new(elements[$length]);
      return (() => {
        t10.addAll(elements);
        return t10;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Int16Queue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeInt16List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Int16Buffer.new(size);
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[42] || CT.C42, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[43] || CT.C43, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[44] || CT.C44, null, [newElementCount]));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[45] || CT.C45)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[46] || CT.C46)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[47] || CT.C47, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[48] || CT.C48, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[49] || CT.C49, value));
    }
  };
  (typed_queue.Int16Queue.new = function(initialCapacity = null) {
    typed_queue.Int16Queue.__proto__.new.call(this, _native_typed_data.NativeInt16List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int16Queue.prototype;
  dart.addTypeTests(typed_queue.Int16Queue);
  dart.addTypeCaches(typed_queue.Int16Queue);
  typed_queue.Int16Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Int16Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int16Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Int16List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Int16Buffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Int16Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Int16Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int16Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Int16Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int16Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Int16Queue, I[31]);
  typed_queue.Uint32Queue = class Uint32Queue extends typed_queue._IntQueue$(typed_data.Uint32List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Uint32Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t10;
      t10 = new typed_queue.Uint32Queue.new(elements[$length]);
      return (() => {
        t10.addAll(elements);
        return t10;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Uint32Queue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeUint32List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Uint32Buffer.new(size);
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[42] || CT.C42, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[43] || CT.C43, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[44] || CT.C44, null, [newElementCount]));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[45] || CT.C45)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[46] || CT.C46)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[47] || CT.C47, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[48] || CT.C48, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[49] || CT.C49, value));
    }
  };
  (typed_queue.Uint32Queue.new = function(initialCapacity = null) {
    typed_queue.Uint32Queue.__proto__.new.call(this, _native_typed_data.NativeUint32List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint32Queue.prototype;
  dart.addTypeTests(typed_queue.Uint32Queue);
  dart.addTypeCaches(typed_queue.Uint32Queue);
  typed_queue.Uint32Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Uint32Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint32Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Uint32List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Uint32Buffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Uint32Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Uint32Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint32Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Uint32Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint32Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Uint32Queue, I[31]);
  typed_queue.Int32Queue = class Int32Queue extends typed_queue._IntQueue$(typed_data.Int32List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Int32Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t10;
      t10 = new typed_queue.Int32Queue.new(elements[$length]);
      return (() => {
        t10.addAll(elements);
        return t10;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Int32Queue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeInt32List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Int32Buffer.new(size);
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[42] || CT.C42, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[43] || CT.C43, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[44] || CT.C44, null, [newElementCount]));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[45] || CT.C45)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[46] || CT.C46)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[47] || CT.C47, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[48] || CT.C48, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[49] || CT.C49, value));
    }
  };
  (typed_queue.Int32Queue.new = function(initialCapacity = null) {
    typed_queue.Int32Queue.__proto__.new.call(this, _native_typed_data.NativeInt32List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int32Queue.prototype;
  dart.addTypeTests(typed_queue.Int32Queue);
  dart.addTypeCaches(typed_queue.Int32Queue);
  typed_queue.Int32Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Int32Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int32Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Int32List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Int32Buffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Int32Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Int32Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int32Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Int32Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int32Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Int32Queue, I[31]);
  typed_queue.Uint64Queue = class Uint64Queue extends typed_queue._IntQueue$(typed_data.Uint64List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Uint64Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t10;
      t10 = new typed_queue.Uint64Queue.new(elements[$length]);
      return (() => {
        t10.addAll(elements);
        return t10;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Uint64Queue.fromList(elements);
    }
    [_createList](size) {
      return typed_data.Uint64List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Uint64Buffer.new(size);
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[42] || CT.C42, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[43] || CT.C43, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[44] || CT.C44, null, [newElementCount]));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[45] || CT.C45)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[46] || CT.C46)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[47] || CT.C47, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[48] || CT.C48, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[49] || CT.C49, value));
    }
  };
  (typed_queue.Uint64Queue.new = function(initialCapacity = null) {
    typed_queue.Uint64Queue.__proto__.new.call(this, typed_data.Uint64List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint64Queue.prototype;
  dart.addTypeTests(typed_queue.Uint64Queue);
  dart.addTypeCaches(typed_queue.Uint64Queue);
  typed_queue.Uint64Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Uint64Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint64Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Uint64List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Uint64Buffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Uint64Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Uint64Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint64Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Uint64Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint64Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Uint64Queue, I[31]);
  typed_queue.Int64Queue = class Int64Queue extends typed_queue._IntQueue$(typed_data.Int64List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Int64Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t10;
      t10 = new typed_queue.Int64Queue.new(elements[$length]);
      return (() => {
        t10.addAll(elements);
        return t10;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Int64Queue.fromList(elements);
    }
    [_createList](size) {
      return typed_data.Int64List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Int64Buffer.new(size);
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[42] || CT.C42, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[43] || CT.C43, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[44] || CT.C44, null, [newElementCount]));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[45] || CT.C45)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[46] || CT.C46)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[47] || CT.C47, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[48] || CT.C48, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[49] || CT.C49, value));
    }
  };
  (typed_queue.Int64Queue.new = function(initialCapacity = null) {
    typed_queue.Int64Queue.__proto__.new.call(this, typed_data.Int64List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int64Queue.prototype;
  dart.addTypeTests(typed_queue.Int64Queue);
  dart.addTypeCaches(typed_queue.Int64Queue);
  typed_queue.Int64Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Int64Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int64Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Int64List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Int64Buffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Int64Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Int64Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int64Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Int64Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int64Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Int64Queue, I[31]);
  typed_queue.Float32Queue = class Float32Queue extends typed_queue._FloatQueue$(typed_data.Float32List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Float32Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t10;
      t10 = new typed_queue.Float32Queue.new(elements[$length]);
      return (() => {
        t10.addAll(elements);
        return t10;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Float32Queue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeFloat32List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Float32Buffer.new(size);
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[42] || CT.C42, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[43] || CT.C43, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[44] || CT.C44, null, [newElementCount]));
    }
    get [_table$0]() {
      return T.ListOfdoubleN().as(this[$noSuchMethod](new core._Invocation.getter(C[45] || CT.C45)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[46] || CT.C46)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[47] || CT.C47, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[48] || CT.C48, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[49] || CT.C49, value));
    }
  };
  (typed_queue.Float32Queue.new = function(initialCapacity = null) {
    typed_queue.Float32Queue.__proto__.new.call(this, _native_typed_data.NativeFloat32List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Float32Queue.prototype;
  dart.addTypeTests(typed_queue.Float32Queue);
  dart.addTypeCaches(typed_queue.Float32Queue);
  typed_queue.Float32Queue[dart.implements] = () => [queue_list.QueueList$(core.double)];
  dart.setMethodSignature(typed_queue.Float32Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Float32Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Float32List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Float32Buffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [core.double]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.double))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Float32Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Float32Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Float32Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.double)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Float32Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Float32Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.double)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Float32Queue, I[31]);
  typed_queue.Float64Queue = class Float64Queue extends typed_queue._FloatQueue$(typed_data.Float64List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Float64Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t10;
      t10 = new typed_queue.Float64Queue.new(elements[$length]);
      return (() => {
        t10.addAll(elements);
        return t10;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Float64Queue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeFloat64List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Float64Buffer.new(size);
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[42] || CT.C42, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[43] || CT.C43, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[44] || CT.C44, null, [newElementCount]));
    }
    get [_table$0]() {
      return T.ListOfdoubleN().as(this[$noSuchMethod](new core._Invocation.getter(C[45] || CT.C45)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[46] || CT.C46)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[47] || CT.C47, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[48] || CT.C48, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[49] || CT.C49, value));
    }
  };
  (typed_queue.Float64Queue.new = function(initialCapacity = null) {
    typed_queue.Float64Queue.__proto__.new.call(this, _native_typed_data.NativeFloat64List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Float64Queue.prototype;
  dart.addTypeTests(typed_queue.Float64Queue);
  dart.addTypeCaches(typed_queue.Float64Queue);
  typed_queue.Float64Queue[dart.implements] = () => [queue_list.QueueList$(core.double)];
  dart.setMethodSignature(typed_queue.Float64Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Float64Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Float64List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Float64Buffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [core.double]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.double))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Float64Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Float64Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Float64Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.double)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Float64Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Float64Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.double)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Float64Queue, I[31]);
  typed_queue.Int32x4Queue = class Int32x4Queue extends typed_queue._TypedQueue$(typed_data.Int32x4, typed_data.Int32x4List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Int32x4Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t10;
      t10 = new typed_queue.Int32x4Queue.new(elements[$length]);
      return (() => {
        t10.addAll(elements);
        return t10;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Int32x4Queue.fromList(elements);
    }
    [_createList](size) {
      return new _native_typed_data.NativeInt32x4List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Int32x4Buffer.new(size);
    }
    get [_defaultValue]() {
      return typed_queue.Int32x4Queue._zero;
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[42] || CT.C42, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[43] || CT.C43, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[44] || CT.C44, null, [newElementCount]));
    }
    get [_table$0]() {
      return T.ListOfInt32x4N().as(this[$noSuchMethod](new core._Invocation.getter(C[45] || CT.C45)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[46] || CT.C46)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[47] || CT.C47, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[48] || CT.C48, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[49] || CT.C49, value));
    }
  };
  (typed_queue.Int32x4Queue.new = function(initialCapacity = null) {
    typed_queue.Int32x4Queue.__proto__.new.call(this, new _native_typed_data.NativeInt32x4List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int32x4Queue.prototype;
  dart.addTypeTests(typed_queue.Int32x4Queue);
  dart.addTypeCaches(typed_queue.Int32x4Queue);
  typed_queue.Int32x4Queue[dart.implements] = () => [queue_list.QueueList$(typed_data.Int32x4)];
  dart.setMethodSignature(typed_queue.Int32x4Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int32x4Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Int32x4List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Int32x4Buffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [typed_data.Int32x4]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(typed_data.Int32x4))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Int32x4Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Int32x4Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int32x4Queue.__proto__),
    [_defaultValue]: typed_data.Int32x4,
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(typed_data.Int32x4)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Int32x4Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int32x4Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(typed_data.Int32x4)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Int32x4Queue, I[31]);
  dart.setStaticFieldSignature(typed_queue.Int32x4Queue, () => ['_zero']);
  dart.defineLazy(typed_queue.Int32x4Queue, {
    /*typed_queue.Int32x4Queue._zero*/get _zero() {
      return new _native_typed_data.NativeInt32x4.new(0, 0, 0, 0);
    }
  }, false);
  typed_queue.Float32x4Queue = class Float32x4Queue extends typed_queue._TypedQueue$(typed_data.Float32x4, typed_data.Float32x4List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Float32x4Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t10;
      t10 = new typed_queue.Float32x4Queue.new(elements[$length]);
      return (() => {
        t10.addAll(elements);
        return t10;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Float32x4Queue.fromList(elements);
    }
    [_createList](size) {
      return new _native_typed_data.NativeFloat32x4List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Float32x4Buffer.new(size);
    }
    get [_defaultValue]() {
      return new _native_typed_data.NativeFloat32x4.zero();
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[42] || CT.C42, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[43] || CT.C43, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[44] || CT.C44, null, [newElementCount]));
    }
    get [_table$0]() {
      return T.ListOfFloat32x4N().as(this[$noSuchMethod](new core._Invocation.getter(C[45] || CT.C45)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[46] || CT.C46)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[47] || CT.C47, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[48] || CT.C48, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[49] || CT.C49, value));
    }
  };
  (typed_queue.Float32x4Queue.new = function(initialCapacity = null) {
    typed_queue.Float32x4Queue.__proto__.new.call(this, new _native_typed_data.NativeFloat32x4List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Float32x4Queue.prototype;
  dart.addTypeTests(typed_queue.Float32x4Queue);
  dart.addTypeCaches(typed_queue.Float32x4Queue);
  typed_queue.Float32x4Queue[dart.implements] = () => [queue_list.QueueList$(typed_data.Float32x4)];
  dart.setMethodSignature(typed_queue.Float32x4Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Float32x4Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Float32x4List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Float32x4Buffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [typed_data.Float32x4]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(typed_data.Float32x4))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Float32x4Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Float32x4Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Float32x4Queue.__proto__),
    [_defaultValue]: typed_data.Float32x4,
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(typed_data.Float32x4)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Float32x4Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Float32x4Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(typed_data.Float32x4)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Float32x4Queue, I[31]);
  typed_queue._chooseRealInitialCapacity = function _chooseRealInitialCapacity(initialCapacity) {
    if (initialCapacity == null || dart.notNull(initialCapacity) < 16) {
      return 16;
    } else if (!typed_queue._isPowerOf2(initialCapacity)) {
      return typed_queue._nextPowerOf2(initialCapacity);
    } else {
      return initialCapacity;
    }
  };
  typed_queue._isPowerOf2 = function _isPowerOf2(number) {
    return (number & number - 1) === 0;
  };
  typed_queue._nextPowerOf2 = function _nextPowerOf2(number) {
    if (!(number > 0)) dart.assertFailed(null, I[30], 690, 10, "number > 0");
    number = (number << 1 >>> 0) - 1;
    for (;;) {
      let nextNumber = (number & number - 1) >>> 0;
      if (nextNumber === 0) return number;
      number = nextNumber;
    }
  };
  dart.defineLazy(typed_queue, {
    /*typed_queue._defaultInitialCapacity*/get _defaultInitialCapacity() {
      return 16;
    }
  }, false);
  var _buffer = dart.privateName(typed_buffer, "_buffer");
  var _length = dart.privateName(typed_buffer, "_length");
  var _typedBuffer = dart.privateName(typed_buffer, "_typedBuffer");
  var _defaultValue$ = dart.privateName(typed_buffer, "_defaultValue");
  var _createBuffer$ = dart.privateName(typed_buffer, "_createBuffer");
  var _createBiggerBuffer = dart.privateName(typed_buffer, "_createBiggerBuffer");
  var _grow$0 = dart.privateName(typed_buffer, "_grow");
  var _add$0 = dart.privateName(typed_buffer, "_add");
  var _addAll = dart.privateName(typed_buffer, "_addAll");
  var _insertKnownLength = dart.privateName(typed_buffer, "_insertKnownLength");
  var _ensureCapacity = dart.privateName(typed_buffer, "_ensureCapacity");
  var _setRange = dart.privateName(typed_buffer, "_setRange");
  const _is_TypedDataBuffer_default = Symbol('_is_TypedDataBuffer_default');
  typed_buffer.TypedDataBuffer$ = dart.generic(E => {
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    var __t$TypedDataBufferOfE = () => (__t$TypedDataBufferOfE = dart.constFn(typed_buffer.TypedDataBuffer$(E)))();
    class TypedDataBuffer extends collection.ListBase$(E) {
      get [_typedBuffer]() {
        return typed_data.TypedData.as(this[_buffer]);
      }
      get length() {
        return this[_length];
      }
      _get(index) {
        if (index >= this.length) dart.throw(new core.IndexError.new(index, this));
        return this[_buffer][$_get](index);
      }
      _set(index, value$) {
        let value = value$;
        E.as(value);
        if (index >= this.length) dart.throw(new core.IndexError.new(index, this));
        this[_buffer][$_set](index, value);
        return value$;
      }
      set length(newLength) {
        if (newLength < this[_length]) {
          let defaultValue = this[_defaultValue$];
          for (let i = newLength; i < this[_length]; i = i + 1) {
            this[_buffer][$_set](i, defaultValue);
          }
        } else if (newLength > this[_buffer][$length]) {
          let newBuffer = null;
          if (this[_buffer][$isEmpty]) {
            newBuffer = this[_createBuffer$](newLength);
          } else {
            newBuffer = this[_createBiggerBuffer](newLength);
          }
          newBuffer[$setRange](0, this[_length], this[_buffer]);
          this[_buffer] = newBuffer;
        }
        this[_length] = newLength;
      }
      [_add$0](value) {
        let t10;
        if (this[_length] === this[_buffer][$length]) this[_grow$0](this[_length]);
        this[_buffer][$_set]((t10 = this[_length], this[_length] = t10 + 1, t10), value);
      }
      add(element) {
        E.as(element);
        this[_add$0](element);
      }
      addAll(values, start = 0, end = null) {
        __t$IterableOfE().as(values);
        core.RangeError.checkNotNegative(start, "start");
        if (end != null && start > dart.notNull(end)) {
          dart.throw(new core.RangeError.range(end, start, null, "end"));
        }
        this[_addAll](values, start, end);
      }
      insertAll(index, values, start = 0, end = null) {
        let t10;
        __t$IterableOfE().as(values);
        core.RangeError.checkValidIndex(index, this, "index", this[_length] + 1);
        core.RangeError.checkNotNegative(start, "start");
        if (end != null) {
          if (start > dart.notNull(end)) {
            dart.throw(new core.RangeError.range(end, start, null, "end"));
          }
          if (start === end) return;
        }
        if (index === this[_length]) {
          this[_addAll](values, start, end);
          return;
        }
        if (end == null && core.List.is(values)) {
          end = values[$length];
        }
        if (end != null) {
          this[_insertKnownLength](index, values, start, end);
          return;
        }
        let writeIndex = this[_length];
        let skipCount = start;
        for (let value of values) {
          if (skipCount > 0) {
            skipCount = skipCount - 1;
            continue;
          }
          if (writeIndex === this[_buffer][$length]) {
            this[_grow$0](writeIndex);
          }
          this[_buffer][$_set]((t10 = writeIndex, writeIndex = t10 + 1, t10), value);
        }
        if (skipCount > 0) {
          dart.throw(new core.StateError.new("Too few elements"));
        }
        if (end != null && writeIndex < dart.notNull(end)) {
          dart.throw(new core.RangeError.range(end, start, writeIndex, "end"));
        }
        typed_buffer.TypedDataBuffer._reverse(this[_buffer], index, this[_length]);
        typed_buffer.TypedDataBuffer._reverse(this[_buffer], this[_length], writeIndex);
        typed_buffer.TypedDataBuffer._reverse(this[_buffer], index, writeIndex);
        this[_length] = writeIndex;
        return;
      }
      static _reverse(buffer, start, end) {
        end = end - 1;
        while (start < end) {
          let first = buffer[$_get](start);
          let last = buffer[$_get](end);
          buffer[$_set](end, first);
          buffer[$_set](start, last);
          start = start + 1;
          end = end - 1;
        }
      }
      [_addAll](values, start = 0, end = null) {
        if (core.List.is(values)) end == null ? end = values[$length] : null;
        if (end != null) {
          this[_insertKnownLength](this[_length], values, start, end);
          return;
        }
        let i = 0;
        for (let value of values) {
          if (i >= start) this.add(value);
          i = i + 1;
        }
        if (i < start) dart.throw(new core.StateError.new("Too few elements"));
      }
      [_insertKnownLength](index, values, start, end) {
        if (core.List.is(values)) {
          if (start > values[$length] || end > values[$length]) {
            dart.throw(new core.StateError.new("Too few elements"));
          }
        }
        let valuesLength = end - start;
        let newLength = this[_length] + valuesLength;
        this[_ensureCapacity](newLength);
        this[_buffer][$setRange](index + valuesLength, this[_length] + valuesLength, this[_buffer], index);
        this[_buffer][$setRange](index, index + valuesLength, values, start);
        this[_length] = newLength;
      }
      insert(index, element) {
        E.as(element);
        if (index < 0 || index > this[_length]) {
          dart.throw(new core.RangeError.range(index, 0, this[_length]));
        }
        if (this[_length] < this[_buffer][$length]) {
          this[_buffer][$setRange](index + 1, this[_length] + 1, this[_buffer], index);
          this[_buffer][$_set](index, element);
          this[_length] = this[_length] + 1;
          return;
        }
        let newBuffer = this[_createBiggerBuffer](null);
        newBuffer[$setRange](0, index, this[_buffer]);
        newBuffer[$setRange](index + 1, this[_length] + 1, this[_buffer], index);
        newBuffer[$_set](index, element);
        this[_length] = this[_length] + 1;
        this[_buffer] = newBuffer;
      }
      [_ensureCapacity](requiredCapacity) {
        if (requiredCapacity <= this[_buffer][$length]) return;
        let newBuffer = this[_createBiggerBuffer](requiredCapacity);
        newBuffer[$setRange](0, this[_length], this[_buffer]);
        this[_buffer] = newBuffer;
      }
      [_createBiggerBuffer](requiredCapacity) {
        let newLength = this[_buffer][$length] * 2;
        if (requiredCapacity != null && dart.notNull(newLength) < dart.notNull(requiredCapacity)) {
          newLength = requiredCapacity;
        } else if (dart.notNull(newLength) < 8) {
          newLength = 8;
        }
        return this[_createBuffer$](newLength);
      }
      [_grow$0](length) {
        let t10;
        this[_buffer] = (t10 = this[_createBiggerBuffer](null), (() => {
          t10[$setRange](0, length, this[_buffer]);
          return t10;
        })());
      }
      setRange(start, end, iterable, skipCount = 0) {
        __t$IterableOfE().as(iterable);
        if (end > this[_length]) dart.throw(new core.RangeError.range(end, 0, this[_length]));
        this[_setRange](start, end, iterable, skipCount);
      }
      [_setRange](start, end, source, skipCount) {
        if (__t$TypedDataBufferOfE().is(source)) {
          this[_buffer][$setRange](start, end, source[_buffer], skipCount);
        } else {
          this[_buffer][$setRange](start, end, source, skipCount);
        }
      }
      get elementSizeInBytes() {
        return this[_typedBuffer][$elementSizeInBytes];
      }
      get lengthInBytes() {
        return this[_length] * this[_typedBuffer][$elementSizeInBytes];
      }
      get offsetInBytes() {
        return this[_typedBuffer][$offsetInBytes];
      }
      get buffer() {
        return this[_typedBuffer][$buffer];
      }
    }
    (TypedDataBuffer.new = function(buffer) {
      this[_buffer] = buffer;
      this[_length] = buffer[$length];
      ;
    }).prototype = TypedDataBuffer.prototype;
    dart.addTypeTests(TypedDataBuffer);
    TypedDataBuffer.prototype[_is_TypedDataBuffer_default] = true;
    dart.addTypeCaches(TypedDataBuffer);
    dart.setMethodSignature(TypedDataBuffer, () => ({
      __proto__: dart.getMethods(TypedDataBuffer.__proto__),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [$_set]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [_add$0]: dart.fnType(dart.void, [E]),
      addAll: dart.fnType(dart.void, [dart.nullable(core.Object)], [core.int, dart.nullable(core.int)]),
      [$addAll]: dart.fnType(dart.void, [dart.nullable(core.Object)], [core.int, dart.nullable(core.int)]),
      insertAll: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)], [core.int, dart.nullable(core.int)]),
      [$insertAll]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)], [core.int, dart.nullable(core.int)]),
      [_addAll]: dart.fnType(dart.void, [core.Iterable$(E)], [core.int, dart.nullable(core.int)]),
      [_insertKnownLength]: dart.fnType(dart.void, [core.int, core.Iterable$(E), core.int, core.int]),
      [_ensureCapacity]: dart.fnType(dart.void, [core.int]),
      [_createBiggerBuffer]: dart.fnType(core.List$(E), [dart.nullable(core.int)]),
      [_grow$0]: dart.fnType(dart.void, [core.int]),
      [_setRange]: dart.fnType(dart.void, [core.int, core.int, core.Iterable$(E), core.int])
    }));
    dart.setStaticMethodSignature(TypedDataBuffer, () => ['_reverse']);
    dart.setGetterSignature(TypedDataBuffer, () => ({
      __proto__: dart.getGetters(TypedDataBuffer.__proto__),
      [_typedBuffer]: typed_data.TypedData,
      length: core.int,
      [$length]: core.int,
      elementSizeInBytes: core.int,
      lengthInBytes: core.int,
      offsetInBytes: core.int,
      buffer: typed_data.ByteBuffer
    }));
    dart.setSetterSignature(TypedDataBuffer, () => ({
      __proto__: dart.getSetters(TypedDataBuffer.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(TypedDataBuffer, I[32]);
    dart.setFieldSignature(TypedDataBuffer, () => ({
      __proto__: dart.getFields(TypedDataBuffer.__proto__),
      [_buffer]: dart.fieldType(core.List$(E)),
      [_length]: dart.fieldType(core.int)
    }));
    dart.setStaticFieldSignature(TypedDataBuffer, () => ['_initialLength']);
    dart.defineExtensionMethods(TypedDataBuffer, [
      '_get',
      '_set',
      'add',
      'addAll',
      'insertAll',
      'insert',
      'setRange'
    ]);
    dart.defineExtensionAccessors(TypedDataBuffer, ['length']);
    return TypedDataBuffer;
  });
  typed_buffer.TypedDataBuffer = typed_buffer.TypedDataBuffer$();
  dart.defineLazy(typed_buffer.TypedDataBuffer, {
    /*typed_buffer.TypedDataBuffer._initialLength*/get _initialLength() {
      return 8;
    }
  }, false);
  dart.addTypeTests(typed_buffer.TypedDataBuffer, _is_TypedDataBuffer_default);
  typed_buffer._IntBuffer = class _IntBuffer extends typed_buffer.TypedDataBuffer$(core.int) {
    get [_defaultValue$]() {
      return 0;
    }
  };
  (typed_buffer._IntBuffer.new = function(buffer) {
    typed_buffer._IntBuffer.__proto__.new.call(this, buffer);
    ;
  }).prototype = typed_buffer._IntBuffer.prototype;
  dart.addTypeTests(typed_buffer._IntBuffer);
  dart.addTypeCaches(typed_buffer._IntBuffer);
  dart.setGetterSignature(typed_buffer._IntBuffer, () => ({
    __proto__: dart.getGetters(typed_buffer._IntBuffer.__proto__),
    [_defaultValue$]: core.int
  }));
  dart.setLibraryUri(typed_buffer._IntBuffer, I[32]);
  typed_buffer._FloatBuffer = class _FloatBuffer extends typed_buffer.TypedDataBuffer$(core.double) {
    get [_defaultValue$]() {
      return 0;
    }
  };
  (typed_buffer._FloatBuffer.new = function(buffer) {
    typed_buffer._FloatBuffer.__proto__.new.call(this, buffer);
    ;
  }).prototype = typed_buffer._FloatBuffer.prototype;
  dart.addTypeTests(typed_buffer._FloatBuffer);
  dart.addTypeCaches(typed_buffer._FloatBuffer);
  dart.setGetterSignature(typed_buffer._FloatBuffer, () => ({
    __proto__: dart.getGetters(typed_buffer._FloatBuffer.__proto__),
    [_defaultValue$]: core.double
  }));
  dart.setLibraryUri(typed_buffer._FloatBuffer, I[32]);
  typed_buffer.Uint8Buffer = class Uint8Buffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Uint8Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeUint8List.new(size);
    }
  };
  (typed_buffer.Uint8Buffer.new = function(initialLength = 0) {
    typed_buffer.Uint8Buffer.__proto__.new.call(this, _native_typed_data.NativeUint8List.new(initialLength));
    ;
  }).prototype = typed_buffer.Uint8Buffer.prototype;
  dart.addTypeTests(typed_buffer.Uint8Buffer);
  dart.addTypeCaches(typed_buffer.Uint8Buffer);
  dart.setMethodSignature(typed_buffer.Uint8Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Uint8Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Uint8List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Uint8Buffer, I[32]);
  typed_buffer.Int8Buffer = class Int8Buffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Int8Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeInt8List.new(size);
    }
  };
  (typed_buffer.Int8Buffer.new = function(initialLength = 0) {
    typed_buffer.Int8Buffer.__proto__.new.call(this, _native_typed_data.NativeInt8List.new(initialLength));
    ;
  }).prototype = typed_buffer.Int8Buffer.prototype;
  dart.addTypeTests(typed_buffer.Int8Buffer);
  dart.addTypeCaches(typed_buffer.Int8Buffer);
  dart.setMethodSignature(typed_buffer.Int8Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Int8Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Int8List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Int8Buffer, I[32]);
  typed_buffer.Uint8ClampedBuffer = class Uint8ClampedBuffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Uint8ClampedBuffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeUint8ClampedList.new(size);
    }
  };
  (typed_buffer.Uint8ClampedBuffer.new = function(initialLength = 0) {
    typed_buffer.Uint8ClampedBuffer.__proto__.new.call(this, _native_typed_data.NativeUint8ClampedList.new(initialLength));
    ;
  }).prototype = typed_buffer.Uint8ClampedBuffer.prototype;
  dart.addTypeTests(typed_buffer.Uint8ClampedBuffer);
  dart.addTypeCaches(typed_buffer.Uint8ClampedBuffer);
  dart.setMethodSignature(typed_buffer.Uint8ClampedBuffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Uint8ClampedBuffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Uint8ClampedList, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Uint8ClampedBuffer, I[32]);
  typed_buffer.Uint16Buffer = class Uint16Buffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Uint16Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeUint16List.new(size);
    }
  };
  (typed_buffer.Uint16Buffer.new = function(initialLength = 0) {
    typed_buffer.Uint16Buffer.__proto__.new.call(this, _native_typed_data.NativeUint16List.new(initialLength));
    ;
  }).prototype = typed_buffer.Uint16Buffer.prototype;
  dart.addTypeTests(typed_buffer.Uint16Buffer);
  dart.addTypeCaches(typed_buffer.Uint16Buffer);
  dart.setMethodSignature(typed_buffer.Uint16Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Uint16Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Uint16List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Uint16Buffer, I[32]);
  typed_buffer.Int16Buffer = class Int16Buffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Int16Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeInt16List.new(size);
    }
  };
  (typed_buffer.Int16Buffer.new = function(initialLength = 0) {
    typed_buffer.Int16Buffer.__proto__.new.call(this, _native_typed_data.NativeInt16List.new(initialLength));
    ;
  }).prototype = typed_buffer.Int16Buffer.prototype;
  dart.addTypeTests(typed_buffer.Int16Buffer);
  dart.addTypeCaches(typed_buffer.Int16Buffer);
  dart.setMethodSignature(typed_buffer.Int16Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Int16Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Int16List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Int16Buffer, I[32]);
  typed_buffer.Uint32Buffer = class Uint32Buffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Uint32Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeUint32List.new(size);
    }
  };
  (typed_buffer.Uint32Buffer.new = function(initialLength = 0) {
    typed_buffer.Uint32Buffer.__proto__.new.call(this, _native_typed_data.NativeUint32List.new(initialLength));
    ;
  }).prototype = typed_buffer.Uint32Buffer.prototype;
  dart.addTypeTests(typed_buffer.Uint32Buffer);
  dart.addTypeCaches(typed_buffer.Uint32Buffer);
  dart.setMethodSignature(typed_buffer.Uint32Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Uint32Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Uint32List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Uint32Buffer, I[32]);
  typed_buffer.Int32Buffer = class Int32Buffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Int32Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeInt32List.new(size);
    }
  };
  (typed_buffer.Int32Buffer.new = function(initialLength = 0) {
    typed_buffer.Int32Buffer.__proto__.new.call(this, _native_typed_data.NativeInt32List.new(initialLength));
    ;
  }).prototype = typed_buffer.Int32Buffer.prototype;
  dart.addTypeTests(typed_buffer.Int32Buffer);
  dart.addTypeCaches(typed_buffer.Int32Buffer);
  dart.setMethodSignature(typed_buffer.Int32Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Int32Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Int32List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Int32Buffer, I[32]);
  typed_buffer.Uint64Buffer = class Uint64Buffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Uint64Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return typed_data.Uint64List.new(size);
    }
  };
  (typed_buffer.Uint64Buffer.new = function(initialLength = 0) {
    typed_buffer.Uint64Buffer.__proto__.new.call(this, typed_data.Uint64List.new(initialLength));
    ;
  }).prototype = typed_buffer.Uint64Buffer.prototype;
  dart.addTypeTests(typed_buffer.Uint64Buffer);
  dart.addTypeCaches(typed_buffer.Uint64Buffer);
  dart.setMethodSignature(typed_buffer.Uint64Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Uint64Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Uint64List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Uint64Buffer, I[32]);
  typed_buffer.Int64Buffer = class Int64Buffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Int64Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return typed_data.Int64List.new(size);
    }
  };
  (typed_buffer.Int64Buffer.new = function(initialLength = 0) {
    typed_buffer.Int64Buffer.__proto__.new.call(this, typed_data.Int64List.new(initialLength));
    ;
  }).prototype = typed_buffer.Int64Buffer.prototype;
  dart.addTypeTests(typed_buffer.Int64Buffer);
  dart.addTypeCaches(typed_buffer.Int64Buffer);
  dart.setMethodSignature(typed_buffer.Int64Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Int64Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Int64List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Int64Buffer, I[32]);
  typed_buffer.Float32Buffer = class Float32Buffer extends typed_buffer._FloatBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Float32Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeFloat32List.new(size);
    }
  };
  (typed_buffer.Float32Buffer.new = function(initialLength = 0) {
    typed_buffer.Float32Buffer.__proto__.new.call(this, _native_typed_data.NativeFloat32List.new(initialLength));
    ;
  }).prototype = typed_buffer.Float32Buffer.prototype;
  dart.addTypeTests(typed_buffer.Float32Buffer);
  dart.addTypeCaches(typed_buffer.Float32Buffer);
  dart.setMethodSignature(typed_buffer.Float32Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Float32Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Float32List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Float32Buffer, I[32]);
  typed_buffer.Float64Buffer = class Float64Buffer extends typed_buffer._FloatBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Float64Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeFloat64List.new(size);
    }
  };
  (typed_buffer.Float64Buffer.new = function(initialLength = 0) {
    typed_buffer.Float64Buffer.__proto__.new.call(this, _native_typed_data.NativeFloat64List.new(initialLength));
    ;
  }).prototype = typed_buffer.Float64Buffer.prototype;
  dart.addTypeTests(typed_buffer.Float64Buffer);
  dart.addTypeCaches(typed_buffer.Float64Buffer);
  dart.setMethodSignature(typed_buffer.Float64Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Float64Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Float64List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Float64Buffer, I[32]);
  typed_buffer.Int32x4Buffer = class Int32x4Buffer extends typed_buffer.TypedDataBuffer$(typed_data.Int32x4) {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Int32x4Buffer.new(initialLength);
    }
    get [_defaultValue$]() {
      return typed_buffer.Int32x4Buffer._zero;
    }
    [_createBuffer$](size) {
      return new _native_typed_data.NativeInt32x4List.new(size);
    }
  };
  (typed_buffer.Int32x4Buffer.new = function(initialLength = 0) {
    typed_buffer.Int32x4Buffer.__proto__.new.call(this, new _native_typed_data.NativeInt32x4List.new(initialLength));
    ;
  }).prototype = typed_buffer.Int32x4Buffer.prototype;
  dart.addTypeTests(typed_buffer.Int32x4Buffer);
  dart.addTypeCaches(typed_buffer.Int32x4Buffer);
  dart.setMethodSignature(typed_buffer.Int32x4Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Int32x4Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Int32x4List, [core.int])
  }));
  dart.setGetterSignature(typed_buffer.Int32x4Buffer, () => ({
    __proto__: dart.getGetters(typed_buffer.Int32x4Buffer.__proto__),
    [_defaultValue$]: typed_data.Int32x4
  }));
  dart.setLibraryUri(typed_buffer.Int32x4Buffer, I[32]);
  dart.setStaticFieldSignature(typed_buffer.Int32x4Buffer, () => ['_zero']);
  dart.defineLazy(typed_buffer.Int32x4Buffer, {
    /*typed_buffer.Int32x4Buffer._zero*/get _zero() {
      return new _native_typed_data.NativeInt32x4.new(0, 0, 0, 0);
    }
  }, false);
  typed_buffer.Float32x4Buffer = class Float32x4Buffer extends typed_buffer.TypedDataBuffer$(typed_data.Float32x4) {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Float32x4Buffer.new(initialLength);
    }
    get [_defaultValue$]() {
      return new _native_typed_data.NativeFloat32x4.zero();
    }
    [_createBuffer$](size) {
      return new _native_typed_data.NativeFloat32x4List.new(size);
    }
  };
  (typed_buffer.Float32x4Buffer.new = function(initialLength = 0) {
    typed_buffer.Float32x4Buffer.__proto__.new.call(this, new _native_typed_data.NativeFloat32x4List.new(initialLength));
    ;
  }).prototype = typed_buffer.Float32x4Buffer.prototype;
  dart.addTypeTests(typed_buffer.Float32x4Buffer);
  dart.addTypeCaches(typed_buffer.Float32x4Buffer);
  dart.setMethodSignature(typed_buffer.Float32x4Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Float32x4Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Float32x4List, [core.int])
  }));
  dart.setGetterSignature(typed_buffer.Float32x4Buffer, () => ({
    __proto__: dart.getGetters(typed_buffer.Float32x4Buffer.__proto__),
    [_defaultValue$]: typed_data.Float32x4
  }));
  dart.setLibraryUri(typed_buffer.Float32x4Buffer, I[32]);
  dart.setBaseClass(particles._NotSetImageProvider, image_provider.ImageProvider$(particles._NotSetImageProvider));
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant,
    "package:http/http.dart": http,
    "package:animated_background/animated_background.dart": animated_background,
    "package:http/src/client.dart": client$,
    "package:http/src/exception.dart": exception,
    "package:http/src/request.dart": request$,
    "package:http/src/response.dart": response$,
    "package:http/src/streamed_request.dart": streamed_request,
    "package:http/src/base_client.dart": base_client,
    "package:http/src/base_request.dart": base_request,
    "package:http/src/base_response.dart": base_response,
    "package:http/src/byte_stream.dart": byte_stream,
    "package:http/src/multipart_file.dart": multipart_file,
    "package:http/src/multipart_request.dart": multipart_request,
    "package:http/src/streamed_response.dart": streamed_response,
    "package:animated_background/bubbles.dart": bubbles,
    "package:animated_background/lines.dart": lines,
    "package:animated_background/particles.dart": particles,
    "package:animated_background/rectangles.dart": rectangles,
    "package:animated_background/space.dart": space,
    "package:http/src/browser_client.dart": browser_client,
    "package:http_parser/http_parser.dart": http_parser,
    "package:http/src/utils.dart": utils,
    "package:http/src/multipart_file_stub.dart": multipart_file_stub,
    "package:http/src/boundary_characters.dart": boundary_characters,
    "package:animated_background/image_helper.dart": image_helper,
    "package:http_parser/src/authentication_challenge.dart": authentication_challenge,
    "package:http_parser/src/case_insensitive_map.dart": case_insensitive_map,
    "package:http_parser/src/chunked_coding.dart": chunked_coding,
    "package:http_parser/src/http_date.dart": http_date,
    "package:http_parser/src/media_type.dart": media_type,
    "package:http_parser/src/scan.dart": scan,
    "package:http_parser/src/utils.dart": utils$,
    "package:http_parser/src/chunked_coding/decoder.dart": decoder,
    "package:http_parser/src/chunked_coding/encoder.dart": encoder,
    "package:typed_data/typed_data.dart": typed_data$,
    "package:http_parser/src/chunked_coding/charcodes.dart": charcodes,
    "package:typed_data/src/typed_queue.dart": typed_queue,
    "package:typed_data/typed_buffers.dart": typed_buffers,
    "package:typed_data/src/typed_buffer.dart": typed_buffer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.5/lib/http.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/animated_background-2.0.0/lib/animated_background.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.5/lib/src/client.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.5/lib/src/exception.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.5/lib/src/base_request.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.5/lib/src/request.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.5/lib/src/base_response.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.5/lib/src/response.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.5/lib/src/streamed_request.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.5/lib/src/base_client.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.5/lib/src/byte_stream.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.5/lib/src/multipart_file.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.5/lib/src/multipart_request.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.5/lib/src/streamed_response.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/animated_background-2.0.0/lib/bubbles.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/animated_background-2.0.0/lib/lines.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/animated_background-2.0.0/lib/particles.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/animated_background-2.0.0/lib/rectangles.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/animated_background-2.0.0/lib/space.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.5/lib/src/browser_client.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.5/lib/src/utils.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.5/lib/src/multipart_file_stub.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.5/lib/src/boundary_characters.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/animated_background-2.0.0/lib/image_helper.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http_parser-4.0.2/lib/src/authentication_challenge.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http_parser-4.0.2/lib/src/case_insensitive_map.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http_parser-4.0.2/lib/src/chunked_coding.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http_parser-4.0.2/lib/src/http_date.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http_parser-4.0.2/lib/src/media_type.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http_parser-4.0.2/lib/src/scan.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http_parser-4.0.2/lib/src/utils.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http_parser-4.0.2/lib/src/chunked_coding/decoder.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http_parser-4.0.2/lib/src/chunked_coding/encoder.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http_parser-4.0.2/lib/src/chunked_coding/charcodes.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/typed_data-1.3.1/lib/src/typed_queue.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/typed_data-1.3.1/lib/src/typed_buffer.dart"],"names":[],"mappings":"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","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant,
    http: http,
    animated_background: animated_background,
    src__client: client$,
    src__exception: exception,
    src__request: request$,
    src__response: response$,
    src__streamed_request: streamed_request,
    src__base_client: base_client,
    src__base_request: base_request,
    src__base_response: base_response,
    src__byte_stream: byte_stream,
    src__multipart_file: multipart_file,
    src__multipart_request: multipart_request,
    src__streamed_response: streamed_response,
    bubbles: bubbles,
    lines: lines,
    particles: particles,
    rectangles: rectangles,
    space: space,
    src__browser_client: browser_client,
    http_parser: http_parser,
    src__utils: utils,
    src__multipart_file_stub: multipart_file_stub,
    src__boundary_characters: boundary_characters,
    image_helper: image_helper,
    src__authentication_challenge: authentication_challenge,
    src__case_insensitive_map: case_insensitive_map,
    src__chunked_coding: chunked_coding,
    src__http_date: http_date,
    src__media_type: media_type,
    src__scan: scan,
    src__utils: utils$,
    src__chunked_coding__decoder: decoder,
    src__chunked_coding__encoder: encoder,
    typed_data: typed_data$,
    src__chunked_coding__charcodes: charcodes,
    src__typed_queue: typed_queue,
    typed_buffers: typed_buffers,
    src__typed_buffer: typed_buffer
  };
}));

//# sourceMappingURL=main.js.map
