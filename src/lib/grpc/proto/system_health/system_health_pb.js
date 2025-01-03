// source: system_health/system_health.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.system_health.GetSystemHealthRequest', null, global);
goog.exportSymbol('proto.system_health.GetSystemHealthResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.system_health.GetSystemHealthRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.system_health.GetSystemHealthRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.system_health.GetSystemHealthRequest.displayName = 'proto.system_health.GetSystemHealthRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.system_health.GetSystemHealthResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.system_health.GetSystemHealthResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.system_health.GetSystemHealthResponse.displayName = 'proto.system_health.GetSystemHealthResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.system_health.GetSystemHealthRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.system_health.GetSystemHealthRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.system_health.GetSystemHealthRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.system_health.GetSystemHealthRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.system_health.GetSystemHealthRequest}
 */
proto.system_health.GetSystemHealthRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.system_health.GetSystemHealthRequest;
  return proto.system_health.GetSystemHealthRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.system_health.GetSystemHealthRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.system_health.GetSystemHealthRequest}
 */
proto.system_health.GetSystemHealthRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.system_health.GetSystemHealthRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.system_health.GetSystemHealthRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.system_health.GetSystemHealthRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.system_health.GetSystemHealthRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.system_health.GetSystemHealthRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.system_health.GetSystemHealthRequest} returns this
 */
proto.system_health.GetSystemHealthRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.system_health.GetSystemHealthResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.system_health.GetSystemHealthResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.system_health.GetSystemHealthResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.system_health.GetSystemHealthResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cpuUsagePercentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    memoryUsagePercentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    ephemeralStorageUsed: jspb.Message.getFieldWithDefault(msg, 3, 0),
    ephemeralStorageTotal: jspb.Message.getFieldWithDefault(msg, 4, 0),
    ephemeralStoragePercentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    pvcStorageUsed: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pvcStorageTotal: jspb.Message.getFieldWithDefault(msg, 7, 0),
    pvcStoragePercentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    nodeCount: jspb.Message.getFieldWithDefault(msg, 9, 0),
    podCount: jspb.Message.getFieldWithDefault(msg, 10, 0),
    pvcCount: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.system_health.GetSystemHealthResponse}
 */
proto.system_health.GetSystemHealthResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.system_health.GetSystemHealthResponse;
  return proto.system_health.GetSystemHealthResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.system_health.GetSystemHealthResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.system_health.GetSystemHealthResponse}
 */
proto.system_health.GetSystemHealthResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCpuUsagePercentage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMemoryUsagePercentage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEphemeralStorageUsed(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEphemeralStorageTotal(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEphemeralStoragePercentage(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPvcStorageUsed(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPvcStorageTotal(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPvcStoragePercentage(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNodeCount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPodCount(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPvcCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.system_health.GetSystemHealthResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.system_health.GetSystemHealthResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.system_health.GetSystemHealthResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.system_health.GetSystemHealthResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCpuUsagePercentage();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getMemoryUsagePercentage();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getEphemeralStorageUsed();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getEphemeralStorageTotal();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getEphemeralStoragePercentage();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getPvcStorageUsed();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getPvcStorageTotal();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getPvcStoragePercentage();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getNodeCount();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getPodCount();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getPvcCount();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
};


/**
 * optional double cpu_usage_percentage = 1;
 * @return {number}
 */
proto.system_health.GetSystemHealthResponse.prototype.getCpuUsagePercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.system_health.GetSystemHealthResponse} returns this
 */
proto.system_health.GetSystemHealthResponse.prototype.setCpuUsagePercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double memory_usage_percentage = 2;
 * @return {number}
 */
proto.system_health.GetSystemHealthResponse.prototype.getMemoryUsagePercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.system_health.GetSystemHealthResponse} returns this
 */
proto.system_health.GetSystemHealthResponse.prototype.setMemoryUsagePercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional int64 ephemeral_storage_used = 3;
 * @return {number}
 */
proto.system_health.GetSystemHealthResponse.prototype.getEphemeralStorageUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.system_health.GetSystemHealthResponse} returns this
 */
proto.system_health.GetSystemHealthResponse.prototype.setEphemeralStorageUsed = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 ephemeral_storage_total = 4;
 * @return {number}
 */
proto.system_health.GetSystemHealthResponse.prototype.getEphemeralStorageTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.system_health.GetSystemHealthResponse} returns this
 */
proto.system_health.GetSystemHealthResponse.prototype.setEphemeralStorageTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double ephemeral_storage_percentage = 5;
 * @return {number}
 */
proto.system_health.GetSystemHealthResponse.prototype.getEphemeralStoragePercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.system_health.GetSystemHealthResponse} returns this
 */
proto.system_health.GetSystemHealthResponse.prototype.setEphemeralStoragePercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional int64 pvc_storage_used = 6;
 * @return {number}
 */
proto.system_health.GetSystemHealthResponse.prototype.getPvcStorageUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.system_health.GetSystemHealthResponse} returns this
 */
proto.system_health.GetSystemHealthResponse.prototype.setPvcStorageUsed = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 pvc_storage_total = 7;
 * @return {number}
 */
proto.system_health.GetSystemHealthResponse.prototype.getPvcStorageTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.system_health.GetSystemHealthResponse} returns this
 */
proto.system_health.GetSystemHealthResponse.prototype.setPvcStorageTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional double pvc_storage_percentage = 8;
 * @return {number}
 */
proto.system_health.GetSystemHealthResponse.prototype.getPvcStoragePercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.system_health.GetSystemHealthResponse} returns this
 */
proto.system_health.GetSystemHealthResponse.prototype.setPvcStoragePercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional int32 node_count = 9;
 * @return {number}
 */
proto.system_health.GetSystemHealthResponse.prototype.getNodeCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.system_health.GetSystemHealthResponse} returns this
 */
proto.system_health.GetSystemHealthResponse.prototype.setNodeCount = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 pod_count = 10;
 * @return {number}
 */
proto.system_health.GetSystemHealthResponse.prototype.getPodCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.system_health.GetSystemHealthResponse} returns this
 */
proto.system_health.GetSystemHealthResponse.prototype.setPodCount = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 pvc_count = 11;
 * @return {number}
 */
proto.system_health.GetSystemHealthResponse.prototype.getPvcCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.system_health.GetSystemHealthResponse} returns this
 */
proto.system_health.GetSystemHealthResponse.prototype.setPvcCount = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


goog.object.extend(exports, proto.system_health);
