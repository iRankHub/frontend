// source: debate_management/debate.proto
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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.debate_management.Ballot', null, global);
goog.exportSymbol('proto.debate_management.CreateTeamRequest', null, global);
goog.exportSymbol('proto.debate_management.DeleteTeamRequest', null, global);
goog.exportSymbol('proto.debate_management.DeleteTeamResponse', null, global);
goog.exportSymbol('proto.debate_management.GenerateEliminationPairingsRequest', null, global);
goog.exportSymbol('proto.debate_management.GeneratePairingsResponse', null, global);
goog.exportSymbol('proto.debate_management.GeneratePreliminaryPairingsRequest', null, global);
goog.exportSymbol('proto.debate_management.GetBallotByJudgeIDRequest', null, global);
goog.exportSymbol('proto.debate_management.GetBallotByJudgeIDResponse', null, global);
goog.exportSymbol('proto.debate_management.GetBallotRequest', null, global);
goog.exportSymbol('proto.debate_management.GetBallotResponse', null, global);
goog.exportSymbol('proto.debate_management.GetBallotsRequest', null, global);
goog.exportSymbol('proto.debate_management.GetBallotsResponse', null, global);
goog.exportSymbol('proto.debate_management.GetJudgeRequest', null, global);
goog.exportSymbol('proto.debate_management.GetJudgeResponse', null, global);
goog.exportSymbol('proto.debate_management.GetJudgesRequest', null, global);
goog.exportSymbol('proto.debate_management.GetJudgesResponse', null, global);
goog.exportSymbol('proto.debate_management.GetPairingsRequest', null, global);
goog.exportSymbol('proto.debate_management.GetPairingsResponse', null, global);
goog.exportSymbol('proto.debate_management.GetRoomRequest', null, global);
goog.exportSymbol('proto.debate_management.GetRoomResponse', null, global);
goog.exportSymbol('proto.debate_management.GetRoomsRequest', null, global);
goog.exportSymbol('proto.debate_management.GetRoomsResponse', null, global);
goog.exportSymbol('proto.debate_management.GetTeamRequest', null, global);
goog.exportSymbol('proto.debate_management.GetTeamsByTournamentRequest', null, global);
goog.exportSymbol('proto.debate_management.GetTeamsByTournamentResponse', null, global);
goog.exportSymbol('proto.debate_management.Judge', null, global);
goog.exportSymbol('proto.debate_management.OverallRankingRequest', null, global);
goog.exportSymbol('proto.debate_management.OverallRankingResponse', null, global);
goog.exportSymbol('proto.debate_management.Pairing', null, global);
goog.exportSymbol('proto.debate_management.PerformanceData', null, global);
goog.exportSymbol('proto.debate_management.PerformanceRequest', null, global);
goog.exportSymbol('proto.debate_management.PerformanceResponse', null, global);
goog.exportSymbol('proto.debate_management.Room', null, global);
goog.exportSymbol('proto.debate_management.RoomInfo', null, global);
goog.exportSymbol('proto.debate_management.RoomStatus', null, global);
goog.exportSymbol('proto.debate_management.RoundInfo', null, global);
goog.exportSymbol('proto.debate_management.RoundStatus', null, global);
goog.exportSymbol('proto.debate_management.Speaker', null, global);
goog.exportSymbol('proto.debate_management.StudentInfo', null, global);
goog.exportSymbol('proto.debate_management.StudentRanking', null, global);
goog.exportSymbol('proto.debate_management.Team', null, global);
goog.exportSymbol('proto.debate_management.TopStudent', null, global);
goog.exportSymbol('proto.debate_management.TournamentRankingRequest', null, global);
goog.exportSymbol('proto.debate_management.TournamentRankingResponse', null, global);
goog.exportSymbol('proto.debate_management.UpdateBallotRequest', null, global);
goog.exportSymbol('proto.debate_management.UpdateBallotResponse', null, global);
goog.exportSymbol('proto.debate_management.UpdateJudgeRequest', null, global);
goog.exportSymbol('proto.debate_management.UpdateJudgeResponse', null, global);
goog.exportSymbol('proto.debate_management.UpdatePairingsRequest', null, global);
goog.exportSymbol('proto.debate_management.UpdatePairingsResponse', null, global);
goog.exportSymbol('proto.debate_management.UpdateRoomRequest', null, global);
goog.exportSymbol('proto.debate_management.UpdateRoomResponse', null, global);
goog.exportSymbol('proto.debate_management.UpdateTeamRequest', null, global);
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
proto.debate_management.Room = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.Room, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.Room.displayName = 'proto.debate_management.Room';
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
proto.debate_management.RoundStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.RoundStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.RoundStatus.displayName = 'proto.debate_management.RoundStatus';
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
proto.debate_management.RoomStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.RoomStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.RoomStatus.displayName = 'proto.debate_management.RoomStatus';
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
proto.debate_management.GetRoomsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.GetRoomsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetRoomsRequest.displayName = 'proto.debate_management.GetRoomsRequest';
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
proto.debate_management.GetRoomsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.GetRoomsResponse.repeatedFields_, null);
};
goog.inherits(proto.debate_management.GetRoomsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetRoomsResponse.displayName = 'proto.debate_management.GetRoomsResponse';
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
proto.debate_management.GetRoomRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.GetRoomRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetRoomRequest.displayName = 'proto.debate_management.GetRoomRequest';
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
proto.debate_management.GetRoomResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.GetRoomResponse.repeatedFields_, null);
};
goog.inherits(proto.debate_management.GetRoomResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetRoomResponse.displayName = 'proto.debate_management.GetRoomResponse';
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
proto.debate_management.UpdateRoomRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.UpdateRoomRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.UpdateRoomRequest.displayName = 'proto.debate_management.UpdateRoomRequest';
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
proto.debate_management.UpdateRoomResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.UpdateRoomResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.UpdateRoomResponse.displayName = 'proto.debate_management.UpdateRoomResponse';
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
proto.debate_management.Judge = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.Judge, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.Judge.displayName = 'proto.debate_management.Judge';
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
proto.debate_management.GetJudgesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.GetJudgesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetJudgesRequest.displayName = 'proto.debate_management.GetJudgesRequest';
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
proto.debate_management.GetJudgesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.GetJudgesResponse.repeatedFields_, null);
};
goog.inherits(proto.debate_management.GetJudgesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetJudgesResponse.displayName = 'proto.debate_management.GetJudgesResponse';
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
proto.debate_management.RoomInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.RoomInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.RoomInfo.displayName = 'proto.debate_management.RoomInfo';
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
proto.debate_management.RoundInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.RoundInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.RoundInfo.displayName = 'proto.debate_management.RoundInfo';
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
proto.debate_management.GetJudgeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.GetJudgeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetJudgeRequest.displayName = 'proto.debate_management.GetJudgeRequest';
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
proto.debate_management.GetJudgeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.GetJudgeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetJudgeResponse.displayName = 'proto.debate_management.GetJudgeResponse';
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
proto.debate_management.UpdateJudgeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.UpdateJudgeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.UpdateJudgeRequest.displayName = 'proto.debate_management.UpdateJudgeRequest';
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
proto.debate_management.UpdateJudgeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.UpdateJudgeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.UpdateJudgeResponse.displayName = 'proto.debate_management.UpdateJudgeResponse';
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
proto.debate_management.Pairing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.Pairing.repeatedFields_, null);
};
goog.inherits(proto.debate_management.Pairing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.Pairing.displayName = 'proto.debate_management.Pairing';
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
proto.debate_management.Team = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.Team.repeatedFields_, null);
};
goog.inherits(proto.debate_management.Team, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.Team.displayName = 'proto.debate_management.Team';
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
proto.debate_management.Speaker = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.Speaker, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.Speaker.displayName = 'proto.debate_management.Speaker';
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
proto.debate_management.GetPairingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.GetPairingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetPairingsRequest.displayName = 'proto.debate_management.GetPairingsRequest';
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
proto.debate_management.GetPairingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.GetPairingsResponse.repeatedFields_, null);
};
goog.inherits(proto.debate_management.GetPairingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetPairingsResponse.displayName = 'proto.debate_management.GetPairingsResponse';
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
proto.debate_management.UpdatePairingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.UpdatePairingsRequest.repeatedFields_, null);
};
goog.inherits(proto.debate_management.UpdatePairingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.UpdatePairingsRequest.displayName = 'proto.debate_management.UpdatePairingsRequest';
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
proto.debate_management.UpdatePairingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.UpdatePairingsResponse.repeatedFields_, null);
};
goog.inherits(proto.debate_management.UpdatePairingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.UpdatePairingsResponse.displayName = 'proto.debate_management.UpdatePairingsResponse';
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
proto.debate_management.Ballot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.Ballot.repeatedFields_, null);
};
goog.inherits(proto.debate_management.Ballot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.Ballot.displayName = 'proto.debate_management.Ballot';
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
proto.debate_management.GetBallotsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.GetBallotsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetBallotsRequest.displayName = 'proto.debate_management.GetBallotsRequest';
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
proto.debate_management.GetBallotsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.GetBallotsResponse.repeatedFields_, null);
};
goog.inherits(proto.debate_management.GetBallotsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetBallotsResponse.displayName = 'proto.debate_management.GetBallotsResponse';
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
proto.debate_management.GetBallotRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.GetBallotRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetBallotRequest.displayName = 'proto.debate_management.GetBallotRequest';
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
proto.debate_management.GetBallotResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.GetBallotResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetBallotResponse.displayName = 'proto.debate_management.GetBallotResponse';
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
proto.debate_management.GetBallotByJudgeIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.GetBallotByJudgeIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetBallotByJudgeIDRequest.displayName = 'proto.debate_management.GetBallotByJudgeIDRequest';
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
proto.debate_management.GetBallotByJudgeIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.GetBallotByJudgeIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetBallotByJudgeIDResponse.displayName = 'proto.debate_management.GetBallotByJudgeIDResponse';
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
proto.debate_management.UpdateBallotRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.UpdateBallotRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.UpdateBallotRequest.displayName = 'proto.debate_management.UpdateBallotRequest';
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
proto.debate_management.UpdateBallotResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.UpdateBallotResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.UpdateBallotResponse.displayName = 'proto.debate_management.UpdateBallotResponse';
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
proto.debate_management.GeneratePreliminaryPairingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.GeneratePreliminaryPairingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GeneratePreliminaryPairingsRequest.displayName = 'proto.debate_management.GeneratePreliminaryPairingsRequest';
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
proto.debate_management.GenerateEliminationPairingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.GenerateEliminationPairingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GenerateEliminationPairingsRequest.displayName = 'proto.debate_management.GenerateEliminationPairingsRequest';
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
proto.debate_management.GeneratePairingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.GeneratePairingsResponse.repeatedFields_, null);
};
goog.inherits(proto.debate_management.GeneratePairingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GeneratePairingsResponse.displayName = 'proto.debate_management.GeneratePairingsResponse';
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
proto.debate_management.CreateTeamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.CreateTeamRequest.repeatedFields_, null);
};
goog.inherits(proto.debate_management.CreateTeamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.CreateTeamRequest.displayName = 'proto.debate_management.CreateTeamRequest';
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
proto.debate_management.GetTeamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.GetTeamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetTeamRequest.displayName = 'proto.debate_management.GetTeamRequest';
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
proto.debate_management.UpdateTeamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.UpdateTeamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.UpdateTeamRequest.displayName = 'proto.debate_management.UpdateTeamRequest';
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
proto.debate_management.DeleteTeamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.DeleteTeamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.DeleteTeamRequest.displayName = 'proto.debate_management.DeleteTeamRequest';
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
proto.debate_management.DeleteTeamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.DeleteTeamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.DeleteTeamResponse.displayName = 'proto.debate_management.DeleteTeamResponse';
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
proto.debate_management.GetTeamsByTournamentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.GetTeamsByTournamentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetTeamsByTournamentRequest.displayName = 'proto.debate_management.GetTeamsByTournamentRequest';
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
proto.debate_management.GetTeamsByTournamentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.GetTeamsByTournamentResponse.repeatedFields_, null);
};
goog.inherits(proto.debate_management.GetTeamsByTournamentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetTeamsByTournamentResponse.displayName = 'proto.debate_management.GetTeamsByTournamentResponse';
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
proto.debate_management.OverallRankingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.OverallRankingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.OverallRankingRequest.displayName = 'proto.debate_management.OverallRankingRequest';
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
proto.debate_management.OverallRankingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.OverallRankingResponse.repeatedFields_, null);
};
goog.inherits(proto.debate_management.OverallRankingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.OverallRankingResponse.displayName = 'proto.debate_management.OverallRankingResponse';
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
proto.debate_management.TopStudent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.TopStudent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.TopStudent.displayName = 'proto.debate_management.TopStudent';
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
proto.debate_management.StudentInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.StudentInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.StudentInfo.displayName = 'proto.debate_management.StudentInfo';
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
proto.debate_management.PerformanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.PerformanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.PerformanceRequest.displayName = 'proto.debate_management.PerformanceRequest';
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
proto.debate_management.PerformanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.PerformanceResponse.repeatedFields_, null);
};
goog.inherits(proto.debate_management.PerformanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.PerformanceResponse.displayName = 'proto.debate_management.PerformanceResponse';
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
proto.debate_management.PerformanceData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.PerformanceData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.PerformanceData.displayName = 'proto.debate_management.PerformanceData';
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
proto.debate_management.TournamentRankingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.TournamentRankingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.TournamentRankingRequest.displayName = 'proto.debate_management.TournamentRankingRequest';
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
proto.debate_management.TournamentRankingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.TournamentRankingResponse.repeatedFields_, null);
};
goog.inherits(proto.debate_management.TournamentRankingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.TournamentRankingResponse.displayName = 'proto.debate_management.TournamentRankingResponse';
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
proto.debate_management.StudentRanking = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.StudentRanking, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.StudentRanking.displayName = 'proto.debate_management.StudentRanking';
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
proto.debate_management.Room.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.Room.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.Room} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.Room.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roomName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    location: jspb.Message.getFieldWithDefault(msg, 3, ""),
    capacity: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.debate_management.Room}
 */
proto.debate_management.Room.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.Room;
  return proto.debate_management.Room.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.Room} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.Room}
 */
proto.debate_management.Room.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoomId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCapacity(value);
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
proto.debate_management.Room.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.Room.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.Room} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.Room.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRoomName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCapacity();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 room_id = 1;
 * @return {number}
 */
proto.debate_management.Room.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.Room} returns this
 */
proto.debate_management.Room.prototype.setRoomId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string room_name = 2;
 * @return {string}
 */
proto.debate_management.Room.prototype.getRoomName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.Room} returns this
 */
proto.debate_management.Room.prototype.setRoomName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string location = 3;
 * @return {string}
 */
proto.debate_management.Room.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.Room} returns this
 */
proto.debate_management.Room.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 capacity = 4;
 * @return {number}
 */
proto.debate_management.Room.prototype.getCapacity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.Room} returns this
 */
proto.debate_management.Room.prototype.setCapacity = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.debate_management.RoundStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.RoundStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.RoundStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.RoundStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    round: jspb.Message.getFieldWithDefault(msg, 1, 0),
    status: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.debate_management.RoundStatus}
 */
proto.debate_management.RoundStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.RoundStatus;
  return proto.debate_management.RoundStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.RoundStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.RoundStatus}
 */
proto.debate_management.RoundStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRound(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
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
proto.debate_management.RoundStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.RoundStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.RoundStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.RoundStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRound();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 round = 1;
 * @return {number}
 */
proto.debate_management.RoundStatus.prototype.getRound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.RoundStatus} returns this
 */
proto.debate_management.RoundStatus.prototype.setRound = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.debate_management.RoundStatus.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.RoundStatus} returns this
 */
proto.debate_management.RoundStatus.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.debate_management.RoomStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.RoomStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.RoomStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.RoomStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roomName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    preliminary: jspb.Message.getFieldWithDefault(msg, 3, ""),
    elimination: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.debate_management.RoomStatus}
 */
proto.debate_management.RoomStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.RoomStatus;
  return proto.debate_management.RoomStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.RoomStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.RoomStatus}
 */
proto.debate_management.RoomStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoomId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreliminary(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setElimination(value);
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
proto.debate_management.RoomStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.RoomStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.RoomStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.RoomStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRoomName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPreliminary();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getElimination();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 room_id = 1;
 * @return {number}
 */
proto.debate_management.RoomStatus.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.RoomStatus} returns this
 */
proto.debate_management.RoomStatus.prototype.setRoomId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string room_name = 2;
 * @return {string}
 */
proto.debate_management.RoomStatus.prototype.getRoomName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.RoomStatus} returns this
 */
proto.debate_management.RoomStatus.prototype.setRoomName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string preliminary = 3;
 * @return {string}
 */
proto.debate_management.RoomStatus.prototype.getPreliminary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.RoomStatus} returns this
 */
proto.debate_management.RoomStatus.prototype.setPreliminary = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string elimination = 4;
 * @return {string}
 */
proto.debate_management.RoomStatus.prototype.getElimination = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.RoomStatus} returns this
 */
proto.debate_management.RoomStatus.prototype.setElimination = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.debate_management.GetRoomsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetRoomsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetRoomsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetRoomsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tournamentId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.debate_management.GetRoomsRequest}
 */
proto.debate_management.GetRoomsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetRoomsRequest;
  return proto.debate_management.GetRoomsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetRoomsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetRoomsRequest}
 */
proto.debate_management.GetRoomsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTournamentId(value);
      break;
    case 2:
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
proto.debate_management.GetRoomsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetRoomsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetRoomsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetRoomsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTournamentId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 tournament_id = 1;
 * @return {number}
 */
proto.debate_management.GetRoomsRequest.prototype.getTournamentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetRoomsRequest} returns this
 */
proto.debate_management.GetRoomsRequest.prototype.setTournamentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.debate_management.GetRoomsRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.GetRoomsRequest} returns this
 */
proto.debate_management.GetRoomsRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.GetRoomsResponse.repeatedFields_ = [1];



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
proto.debate_management.GetRoomsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetRoomsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetRoomsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetRoomsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomsList: jspb.Message.toObjectList(msg.getRoomsList(),
    proto.debate_management.RoomStatus.toObject, includeInstance)
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
 * @return {!proto.debate_management.GetRoomsResponse}
 */
proto.debate_management.GetRoomsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetRoomsResponse;
  return proto.debate_management.GetRoomsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetRoomsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetRoomsResponse}
 */
proto.debate_management.GetRoomsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.debate_management.RoomStatus;
      reader.readMessage(value,proto.debate_management.RoomStatus.deserializeBinaryFromReader);
      msg.addRooms(value);
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
proto.debate_management.GetRoomsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetRoomsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetRoomsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetRoomsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.debate_management.RoomStatus.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RoomStatus rooms = 1;
 * @return {!Array<!proto.debate_management.RoomStatus>}
 */
proto.debate_management.GetRoomsResponse.prototype.getRoomsList = function() {
  return /** @type{!Array<!proto.debate_management.RoomStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.RoomStatus, 1));
};


/**
 * @param {!Array<!proto.debate_management.RoomStatus>} value
 * @return {!proto.debate_management.GetRoomsResponse} returns this
*/
proto.debate_management.GetRoomsResponse.prototype.setRoomsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.debate_management.RoomStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.RoomStatus}
 */
proto.debate_management.GetRoomsResponse.prototype.addRooms = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.debate_management.RoomStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.GetRoomsResponse} returns this
 */
proto.debate_management.GetRoomsResponse.prototype.clearRoomsList = function() {
  return this.setRoomsList([]);
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
proto.debate_management.GetRoomRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetRoomRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetRoomRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetRoomRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tournamentId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    token: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.debate_management.GetRoomRequest}
 */
proto.debate_management.GetRoomRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetRoomRequest;
  return proto.debate_management.GetRoomRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetRoomRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetRoomRequest}
 */
proto.debate_management.GetRoomRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoomId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTournamentId(value);
      break;
    case 3:
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
proto.debate_management.GetRoomRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetRoomRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetRoomRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetRoomRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTournamentId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 room_id = 1;
 * @return {number}
 */
proto.debate_management.GetRoomRequest.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetRoomRequest} returns this
 */
proto.debate_management.GetRoomRequest.prototype.setRoomId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 tournament_id = 2;
 * @return {number}
 */
proto.debate_management.GetRoomRequest.prototype.getTournamentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetRoomRequest} returns this
 */
proto.debate_management.GetRoomRequest.prototype.setTournamentId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string token = 3;
 * @return {string}
 */
proto.debate_management.GetRoomRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.GetRoomRequest} returns this
 */
proto.debate_management.GetRoomRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.GetRoomResponse.repeatedFields_ = [3,4];



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
proto.debate_management.GetRoomResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetRoomResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetRoomResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetRoomResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    preliminaryList: jspb.Message.toObjectList(msg.getPreliminaryList(),
    proto.debate_management.RoundStatus.toObject, includeInstance),
    eliminationList: jspb.Message.toObjectList(msg.getEliminationList(),
    proto.debate_management.RoundStatus.toObject, includeInstance)
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
 * @return {!proto.debate_management.GetRoomResponse}
 */
proto.debate_management.GetRoomResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetRoomResponse;
  return proto.debate_management.GetRoomResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetRoomResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetRoomResponse}
 */
proto.debate_management.GetRoomResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoomId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.debate_management.RoundStatus;
      reader.readMessage(value,proto.debate_management.RoundStatus.deserializeBinaryFromReader);
      msg.addPreliminary(value);
      break;
    case 4:
      var value = new proto.debate_management.RoundStatus;
      reader.readMessage(value,proto.debate_management.RoundStatus.deserializeBinaryFromReader);
      msg.addElimination(value);
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
proto.debate_management.GetRoomResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetRoomResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetRoomResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetRoomResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPreliminaryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.debate_management.RoundStatus.serializeBinaryToWriter
    );
  }
  f = message.getEliminationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.debate_management.RoundStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 room_id = 1;
 * @return {number}
 */
proto.debate_management.GetRoomResponse.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetRoomResponse} returns this
 */
proto.debate_management.GetRoomResponse.prototype.setRoomId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.debate_management.GetRoomResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.GetRoomResponse} returns this
 */
proto.debate_management.GetRoomResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated RoundStatus preliminary = 3;
 * @return {!Array<!proto.debate_management.RoundStatus>}
 */
proto.debate_management.GetRoomResponse.prototype.getPreliminaryList = function() {
  return /** @type{!Array<!proto.debate_management.RoundStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.RoundStatus, 3));
};


/**
 * @param {!Array<!proto.debate_management.RoundStatus>} value
 * @return {!proto.debate_management.GetRoomResponse} returns this
*/
proto.debate_management.GetRoomResponse.prototype.setPreliminaryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.debate_management.RoundStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.RoundStatus}
 */
proto.debate_management.GetRoomResponse.prototype.addPreliminary = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.debate_management.RoundStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.GetRoomResponse} returns this
 */
proto.debate_management.GetRoomResponse.prototype.clearPreliminaryList = function() {
  return this.setPreliminaryList([]);
};


/**
 * repeated RoundStatus elimination = 4;
 * @return {!Array<!proto.debate_management.RoundStatus>}
 */
proto.debate_management.GetRoomResponse.prototype.getEliminationList = function() {
  return /** @type{!Array<!proto.debate_management.RoundStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.RoundStatus, 4));
};


/**
 * @param {!Array<!proto.debate_management.RoundStatus>} value
 * @return {!proto.debate_management.GetRoomResponse} returns this
*/
proto.debate_management.GetRoomResponse.prototype.setEliminationList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.debate_management.RoundStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.RoundStatus}
 */
proto.debate_management.GetRoomResponse.prototype.addElimination = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.debate_management.RoundStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.GetRoomResponse} returns this
 */
proto.debate_management.GetRoomResponse.prototype.clearEliminationList = function() {
  return this.setEliminationList([]);
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
proto.debate_management.UpdateRoomRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.UpdateRoomRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.UpdateRoomRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.UpdateRoomRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    room: (f = msg.getRoom()) && proto.debate_management.Room.toObject(includeInstance, f),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.debate_management.UpdateRoomRequest}
 */
proto.debate_management.UpdateRoomRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.UpdateRoomRequest;
  return proto.debate_management.UpdateRoomRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.UpdateRoomRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.UpdateRoomRequest}
 */
proto.debate_management.UpdateRoomRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.debate_management.Room;
      reader.readMessage(value,proto.debate_management.Room.deserializeBinaryFromReader);
      msg.setRoom(value);
      break;
    case 2:
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
proto.debate_management.UpdateRoomRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.UpdateRoomRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.UpdateRoomRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.UpdateRoomRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoom();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.debate_management.Room.serializeBinaryToWriter
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Room room = 1;
 * @return {?proto.debate_management.Room}
 */
proto.debate_management.UpdateRoomRequest.prototype.getRoom = function() {
  return /** @type{?proto.debate_management.Room} */ (
    jspb.Message.getWrapperField(this, proto.debate_management.Room, 1));
};


/**
 * @param {?proto.debate_management.Room|undefined} value
 * @return {!proto.debate_management.UpdateRoomRequest} returns this
*/
proto.debate_management.UpdateRoomRequest.prototype.setRoom = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.debate_management.UpdateRoomRequest} returns this
 */
proto.debate_management.UpdateRoomRequest.prototype.clearRoom = function() {
  return this.setRoom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.debate_management.UpdateRoomRequest.prototype.hasRoom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.debate_management.UpdateRoomRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.UpdateRoomRequest} returns this
 */
proto.debate_management.UpdateRoomRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.debate_management.UpdateRoomResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.UpdateRoomResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.UpdateRoomResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.UpdateRoomResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    room: (f = msg.getRoom()) && proto.debate_management.Room.toObject(includeInstance, f)
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
 * @return {!proto.debate_management.UpdateRoomResponse}
 */
proto.debate_management.UpdateRoomResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.UpdateRoomResponse;
  return proto.debate_management.UpdateRoomResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.UpdateRoomResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.UpdateRoomResponse}
 */
proto.debate_management.UpdateRoomResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.debate_management.Room;
      reader.readMessage(value,proto.debate_management.Room.deserializeBinaryFromReader);
      msg.setRoom(value);
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
proto.debate_management.UpdateRoomResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.UpdateRoomResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.UpdateRoomResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.UpdateRoomResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoom();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.debate_management.Room.serializeBinaryToWriter
    );
  }
};


/**
 * optional Room room = 1;
 * @return {?proto.debate_management.Room}
 */
proto.debate_management.UpdateRoomResponse.prototype.getRoom = function() {
  return /** @type{?proto.debate_management.Room} */ (
    jspb.Message.getWrapperField(this, proto.debate_management.Room, 1));
};


/**
 * @param {?proto.debate_management.Room|undefined} value
 * @return {!proto.debate_management.UpdateRoomResponse} returns this
*/
proto.debate_management.UpdateRoomResponse.prototype.setRoom = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.debate_management.UpdateRoomResponse} returns this
 */
proto.debate_management.UpdateRoomResponse.prototype.clearRoom = function() {
  return this.setRoom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.debate_management.UpdateRoomResponse.prototype.hasRoom = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.debate_management.Judge.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.Judge.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.Judge} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.Judge.toObject = function(includeInstance, msg) {
  var f, obj = {
    judgeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    idebateId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    preliminaryDebates: jspb.Message.getFieldWithDefault(msg, 4, 0),
    eliminationDebates: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.debate_management.Judge}
 */
proto.debate_management.Judge.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.Judge;
  return proto.debate_management.Judge.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.Judge} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.Judge}
 */
proto.debate_management.Judge.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setJudgeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdebateId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPreliminaryDebates(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEliminationDebates(value);
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
proto.debate_management.Judge.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.Judge.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.Judge} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.Judge.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJudgeId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIdebateId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPreliminaryDebates();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getEliminationDebates();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional int32 judge_id = 1;
 * @return {number}
 */
proto.debate_management.Judge.prototype.getJudgeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.Judge} returns this
 */
proto.debate_management.Judge.prototype.setJudgeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.debate_management.Judge.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.Judge} returns this
 */
proto.debate_management.Judge.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string idebate_id = 3;
 * @return {string}
 */
proto.debate_management.Judge.prototype.getIdebateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.Judge} returns this
 */
proto.debate_management.Judge.prototype.setIdebateId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 preliminary_debates = 4;
 * @return {number}
 */
proto.debate_management.Judge.prototype.getPreliminaryDebates = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.Judge} returns this
 */
proto.debate_management.Judge.prototype.setPreliminaryDebates = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 elimination_debates = 5;
 * @return {number}
 */
proto.debate_management.Judge.prototype.getEliminationDebates = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.Judge} returns this
 */
proto.debate_management.Judge.prototype.setEliminationDebates = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
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
proto.debate_management.GetJudgesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetJudgesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetJudgesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetJudgesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tournamentId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.debate_management.GetJudgesRequest}
 */
proto.debate_management.GetJudgesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetJudgesRequest;
  return proto.debate_management.GetJudgesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetJudgesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetJudgesRequest}
 */
proto.debate_management.GetJudgesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTournamentId(value);
      break;
    case 2:
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
proto.debate_management.GetJudgesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetJudgesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetJudgesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetJudgesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTournamentId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 tournament_id = 1;
 * @return {number}
 */
proto.debate_management.GetJudgesRequest.prototype.getTournamentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetJudgesRequest} returns this
 */
proto.debate_management.GetJudgesRequest.prototype.setTournamentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.debate_management.GetJudgesRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.GetJudgesRequest} returns this
 */
proto.debate_management.GetJudgesRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.GetJudgesResponse.repeatedFields_ = [1];



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
proto.debate_management.GetJudgesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetJudgesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetJudgesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetJudgesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    judgesList: jspb.Message.toObjectList(msg.getJudgesList(),
    proto.debate_management.Judge.toObject, includeInstance)
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
 * @return {!proto.debate_management.GetJudgesResponse}
 */
proto.debate_management.GetJudgesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetJudgesResponse;
  return proto.debate_management.GetJudgesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetJudgesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetJudgesResponse}
 */
proto.debate_management.GetJudgesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.debate_management.Judge;
      reader.readMessage(value,proto.debate_management.Judge.deserializeBinaryFromReader);
      msg.addJudges(value);
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
proto.debate_management.GetJudgesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetJudgesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetJudgesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetJudgesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJudgesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.debate_management.Judge.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Judge judges = 1;
 * @return {!Array<!proto.debate_management.Judge>}
 */
proto.debate_management.GetJudgesResponse.prototype.getJudgesList = function() {
  return /** @type{!Array<!proto.debate_management.Judge>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.Judge, 1));
};


/**
 * @param {!Array<!proto.debate_management.Judge>} value
 * @return {!proto.debate_management.GetJudgesResponse} returns this
*/
proto.debate_management.GetJudgesResponse.prototype.setJudgesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.debate_management.Judge=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.Judge}
 */
proto.debate_management.GetJudgesResponse.prototype.addJudges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.debate_management.Judge, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.GetJudgesResponse} returns this
 */
proto.debate_management.GetJudgesResponse.prototype.clearJudgesList = function() {
  return this.setJudgesList([]);
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
proto.debate_management.RoomInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.RoomInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.RoomInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.RoomInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roomName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.debate_management.RoomInfo}
 */
proto.debate_management.RoomInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.RoomInfo;
  return proto.debate_management.RoomInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.RoomInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.RoomInfo}
 */
proto.debate_management.RoomInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoomId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomName(value);
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
proto.debate_management.RoomInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.RoomInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.RoomInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.RoomInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRoomName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 room_id = 1;
 * @return {number}
 */
proto.debate_management.RoomInfo.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.RoomInfo} returns this
 */
proto.debate_management.RoomInfo.prototype.setRoomId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string room_name = 2;
 * @return {string}
 */
proto.debate_management.RoomInfo.prototype.getRoomName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.RoomInfo} returns this
 */
proto.debate_management.RoomInfo.prototype.setRoomName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.debate_management.RoundInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.RoundInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.RoundInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.RoundInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomsMap: (f = msg.getRoomsMap()) ? f.toObject(includeInstance, proto.debate_management.RoomInfo.toObject) : []
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
 * @return {!proto.debate_management.RoundInfo}
 */
proto.debate_management.RoundInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.RoundInfo;
  return proto.debate_management.RoundInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.RoundInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.RoundInfo}
 */
proto.debate_management.RoundInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getRoomsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readMessage, proto.debate_management.RoomInfo.deserializeBinaryFromReader, 0, new proto.debate_management.RoomInfo());
         });
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
proto.debate_management.RoundInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.RoundInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.RoundInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.RoundInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeMessage, proto.debate_management.RoomInfo.serializeBinaryToWriter);
  }
};


/**
 * map<int32, RoomInfo> rooms = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.debate_management.RoomInfo>}
 */
proto.debate_management.RoundInfo.prototype.getRoomsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.debate_management.RoomInfo>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.debate_management.RoomInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.debate_management.RoundInfo} returns this
 */
proto.debate_management.RoundInfo.prototype.clearRoomsMap = function() {
  this.getRoomsMap().clear();
  return this;
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
proto.debate_management.GetJudgeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetJudgeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetJudgeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetJudgeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    judgeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tournamentId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    token: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.debate_management.GetJudgeRequest}
 */
proto.debate_management.GetJudgeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetJudgeRequest;
  return proto.debate_management.GetJudgeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetJudgeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetJudgeRequest}
 */
proto.debate_management.GetJudgeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setJudgeId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTournamentId(value);
      break;
    case 3:
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
proto.debate_management.GetJudgeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetJudgeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetJudgeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetJudgeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJudgeId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTournamentId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 judge_id = 1;
 * @return {number}
 */
proto.debate_management.GetJudgeRequest.prototype.getJudgeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetJudgeRequest} returns this
 */
proto.debate_management.GetJudgeRequest.prototype.setJudgeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 tournament_id = 2;
 * @return {number}
 */
proto.debate_management.GetJudgeRequest.prototype.getTournamentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetJudgeRequest} returns this
 */
proto.debate_management.GetJudgeRequest.prototype.setTournamentId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string token = 3;
 * @return {string}
 */
proto.debate_management.GetJudgeRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.GetJudgeRequest} returns this
 */
proto.debate_management.GetJudgeRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.debate_management.GetJudgeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetJudgeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetJudgeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetJudgeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    judgeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    idebateId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    preliminaryMap: (f = msg.getPreliminaryMap()) ? f.toObject(includeInstance, proto.debate_management.RoomInfo.toObject) : [],
    eliminationMap: (f = msg.getEliminationMap()) ? f.toObject(includeInstance, proto.debate_management.RoomInfo.toObject) : []
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
 * @return {!proto.debate_management.GetJudgeResponse}
 */
proto.debate_management.GetJudgeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetJudgeResponse;
  return proto.debate_management.GetJudgeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetJudgeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetJudgeResponse}
 */
proto.debate_management.GetJudgeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setJudgeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdebateId(value);
      break;
    case 4:
      var value = msg.getPreliminaryMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readMessage, proto.debate_management.RoomInfo.deserializeBinaryFromReader, 0, new proto.debate_management.RoomInfo());
         });
      break;
    case 5:
      var value = msg.getEliminationMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readMessage, proto.debate_management.RoomInfo.deserializeBinaryFromReader, 0, new proto.debate_management.RoomInfo());
         });
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
proto.debate_management.GetJudgeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetJudgeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetJudgeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetJudgeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJudgeId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIdebateId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPreliminaryMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeMessage, proto.debate_management.RoomInfo.serializeBinaryToWriter);
  }
  f = message.getEliminationMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeMessage, proto.debate_management.RoomInfo.serializeBinaryToWriter);
  }
};


/**
 * optional int32 judge_id = 1;
 * @return {number}
 */
proto.debate_management.GetJudgeResponse.prototype.getJudgeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetJudgeResponse} returns this
 */
proto.debate_management.GetJudgeResponse.prototype.setJudgeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.debate_management.GetJudgeResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.GetJudgeResponse} returns this
 */
proto.debate_management.GetJudgeResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string idebate_id = 3;
 * @return {string}
 */
proto.debate_management.GetJudgeResponse.prototype.getIdebateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.GetJudgeResponse} returns this
 */
proto.debate_management.GetJudgeResponse.prototype.setIdebateId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<int32, RoomInfo> preliminary = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.debate_management.RoomInfo>}
 */
proto.debate_management.GetJudgeResponse.prototype.getPreliminaryMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.debate_management.RoomInfo>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.debate_management.RoomInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.debate_management.GetJudgeResponse} returns this
 */
proto.debate_management.GetJudgeResponse.prototype.clearPreliminaryMap = function() {
  this.getPreliminaryMap().clear();
  return this;
};


/**
 * map<int32, RoomInfo> elimination = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.debate_management.RoomInfo>}
 */
proto.debate_management.GetJudgeResponse.prototype.getEliminationMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.debate_management.RoomInfo>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      proto.debate_management.RoomInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.debate_management.GetJudgeResponse} returns this
 */
proto.debate_management.GetJudgeResponse.prototype.clearEliminationMap = function() {
  this.getEliminationMap().clear();
  return this;
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
proto.debate_management.UpdateJudgeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.UpdateJudgeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.UpdateJudgeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.UpdateJudgeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    judgeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tournamentId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    preliminaryMap: (f = msg.getPreliminaryMap()) ? f.toObject(includeInstance, proto.debate_management.RoomInfo.toObject) : [],
    eliminationMap: (f = msg.getEliminationMap()) ? f.toObject(includeInstance, proto.debate_management.RoomInfo.toObject) : [],
    token: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.debate_management.UpdateJudgeRequest}
 */
proto.debate_management.UpdateJudgeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.UpdateJudgeRequest;
  return proto.debate_management.UpdateJudgeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.UpdateJudgeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.UpdateJudgeRequest}
 */
proto.debate_management.UpdateJudgeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setJudgeId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTournamentId(value);
      break;
    case 3:
      var value = msg.getPreliminaryMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readMessage, proto.debate_management.RoomInfo.deserializeBinaryFromReader, 0, new proto.debate_management.RoomInfo());
         });
      break;
    case 4:
      var value = msg.getEliminationMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readMessage, proto.debate_management.RoomInfo.deserializeBinaryFromReader, 0, new proto.debate_management.RoomInfo());
         });
      break;
    case 5:
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
proto.debate_management.UpdateJudgeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.UpdateJudgeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.UpdateJudgeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.UpdateJudgeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJudgeId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTournamentId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPreliminaryMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeMessage, proto.debate_management.RoomInfo.serializeBinaryToWriter);
  }
  f = message.getEliminationMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeMessage, proto.debate_management.RoomInfo.serializeBinaryToWriter);
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int32 judge_id = 1;
 * @return {number}
 */
proto.debate_management.UpdateJudgeRequest.prototype.getJudgeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.UpdateJudgeRequest} returns this
 */
proto.debate_management.UpdateJudgeRequest.prototype.setJudgeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 tournament_id = 2;
 * @return {number}
 */
proto.debate_management.UpdateJudgeRequest.prototype.getTournamentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.UpdateJudgeRequest} returns this
 */
proto.debate_management.UpdateJudgeRequest.prototype.setTournamentId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * map<int32, RoomInfo> preliminary = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.debate_management.RoomInfo>}
 */
proto.debate_management.UpdateJudgeRequest.prototype.getPreliminaryMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.debate_management.RoomInfo>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.debate_management.RoomInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.debate_management.UpdateJudgeRequest} returns this
 */
proto.debate_management.UpdateJudgeRequest.prototype.clearPreliminaryMap = function() {
  this.getPreliminaryMap().clear();
  return this;
};


/**
 * map<int32, RoomInfo> elimination = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.debate_management.RoomInfo>}
 */
proto.debate_management.UpdateJudgeRequest.prototype.getEliminationMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.debate_management.RoomInfo>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.debate_management.RoomInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.debate_management.UpdateJudgeRequest} returns this
 */
proto.debate_management.UpdateJudgeRequest.prototype.clearEliminationMap = function() {
  this.getEliminationMap().clear();
  return this;
};


/**
 * optional string token = 5;
 * @return {string}
 */
proto.debate_management.UpdateJudgeRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.UpdateJudgeRequest} returns this
 */
proto.debate_management.UpdateJudgeRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.debate_management.UpdateJudgeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.UpdateJudgeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.UpdateJudgeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.UpdateJudgeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.debate_management.UpdateJudgeResponse}
 */
proto.debate_management.UpdateJudgeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.UpdateJudgeResponse;
  return proto.debate_management.UpdateJudgeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.UpdateJudgeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.UpdateJudgeResponse}
 */
proto.debate_management.UpdateJudgeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.debate_management.UpdateJudgeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.UpdateJudgeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.UpdateJudgeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.UpdateJudgeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.debate_management.UpdateJudgeResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.debate_management.UpdateJudgeResponse} returns this
 */
proto.debate_management.UpdateJudgeResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.debate_management.UpdateJudgeResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.UpdateJudgeResponse} returns this
 */
proto.debate_management.UpdateJudgeResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.Pairing.repeatedFields_ = [9];



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
proto.debate_management.Pairing.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.Pairing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.Pairing} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.Pairing.toObject = function(includeInstance, msg) {
  var f, obj = {
    pairingId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roundNumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
    isEliminationRound: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    roomId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    roomName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    team1: (f = msg.getTeam1()) && proto.debate_management.Team.toObject(includeInstance, f),
    team2: (f = msg.getTeam2()) && proto.debate_management.Team.toObject(includeInstance, f),
    headJudgeName: jspb.Message.getFieldWithDefault(msg, 8, ""),
    judgesList: jspb.Message.toObjectList(msg.getJudgesList(),
    proto.debate_management.Judge.toObject, includeInstance)
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
 * @return {!proto.debate_management.Pairing}
 */
proto.debate_management.Pairing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.Pairing;
  return proto.debate_management.Pairing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.Pairing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.Pairing}
 */
proto.debate_management.Pairing.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPairingId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoundNumber(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEliminationRound(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoomId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomName(value);
      break;
    case 6:
      var value = new proto.debate_management.Team;
      reader.readMessage(value,proto.debate_management.Team.deserializeBinaryFromReader);
      msg.setTeam1(value);
      break;
    case 7:
      var value = new proto.debate_management.Team;
      reader.readMessage(value,proto.debate_management.Team.deserializeBinaryFromReader);
      msg.setTeam2(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeadJudgeName(value);
      break;
    case 9:
      var value = new proto.debate_management.Judge;
      reader.readMessage(value,proto.debate_management.Judge.deserializeBinaryFromReader);
      msg.addJudges(value);
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
proto.debate_management.Pairing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.Pairing.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.Pairing} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.Pairing.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPairingId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRoundNumber();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getIsEliminationRound();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getRoomId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getRoomName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTeam1();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.debate_management.Team.serializeBinaryToWriter
    );
  }
  f = message.getTeam2();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.debate_management.Team.serializeBinaryToWriter
    );
  }
  f = message.getHeadJudgeName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getJudgesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.debate_management.Judge.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 pairing_id = 1;
 * @return {number}
 */
proto.debate_management.Pairing.prototype.getPairingId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.Pairing} returns this
 */
proto.debate_management.Pairing.prototype.setPairingId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 round_number = 2;
 * @return {number}
 */
proto.debate_management.Pairing.prototype.getRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.Pairing} returns this
 */
proto.debate_management.Pairing.prototype.setRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool is_elimination_round = 3;
 * @return {boolean}
 */
proto.debate_management.Pairing.prototype.getIsEliminationRound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.debate_management.Pairing} returns this
 */
proto.debate_management.Pairing.prototype.setIsEliminationRound = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int32 room_id = 4;
 * @return {number}
 */
proto.debate_management.Pairing.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.Pairing} returns this
 */
proto.debate_management.Pairing.prototype.setRoomId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string room_name = 5;
 * @return {string}
 */
proto.debate_management.Pairing.prototype.getRoomName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.Pairing} returns this
 */
proto.debate_management.Pairing.prototype.setRoomName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Team team1 = 6;
 * @return {?proto.debate_management.Team}
 */
proto.debate_management.Pairing.prototype.getTeam1 = function() {
  return /** @type{?proto.debate_management.Team} */ (
    jspb.Message.getWrapperField(this, proto.debate_management.Team, 6));
};


/**
 * @param {?proto.debate_management.Team|undefined} value
 * @return {!proto.debate_management.Pairing} returns this
*/
proto.debate_management.Pairing.prototype.setTeam1 = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.debate_management.Pairing} returns this
 */
proto.debate_management.Pairing.prototype.clearTeam1 = function() {
  return this.setTeam1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.debate_management.Pairing.prototype.hasTeam1 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Team team2 = 7;
 * @return {?proto.debate_management.Team}
 */
proto.debate_management.Pairing.prototype.getTeam2 = function() {
  return /** @type{?proto.debate_management.Team} */ (
    jspb.Message.getWrapperField(this, proto.debate_management.Team, 7));
};


/**
 * @param {?proto.debate_management.Team|undefined} value
 * @return {!proto.debate_management.Pairing} returns this
*/
proto.debate_management.Pairing.prototype.setTeam2 = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.debate_management.Pairing} returns this
 */
proto.debate_management.Pairing.prototype.clearTeam2 = function() {
  return this.setTeam2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.debate_management.Pairing.prototype.hasTeam2 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string head_judge_name = 8;
 * @return {string}
 */
proto.debate_management.Pairing.prototype.getHeadJudgeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.Pairing} returns this
 */
proto.debate_management.Pairing.prototype.setHeadJudgeName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * repeated Judge judges = 9;
 * @return {!Array<!proto.debate_management.Judge>}
 */
proto.debate_management.Pairing.prototype.getJudgesList = function() {
  return /** @type{!Array<!proto.debate_management.Judge>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.Judge, 9));
};


/**
 * @param {!Array<!proto.debate_management.Judge>} value
 * @return {!proto.debate_management.Pairing} returns this
*/
proto.debate_management.Pairing.prototype.setJudgesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.debate_management.Judge=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.Judge}
 */
proto.debate_management.Pairing.prototype.addJudges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.debate_management.Judge, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.Pairing} returns this
 */
proto.debate_management.Pairing.prototype.clearJudgesList = function() {
  return this.setJudgesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.Team.repeatedFields_ = [3,4];



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
proto.debate_management.Team.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.Team.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.Team} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.Team.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    speakersList: jspb.Message.toObjectList(msg.getSpeakersList(),
    proto.debate_management.Speaker.toObject, includeInstance),
    speakerNamesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    totalPoints: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    leagueName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    feedback: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.debate_management.Team}
 */
proto.debate_management.Team.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.Team;
  return proto.debate_management.Team.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.Team} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.Team}
 */
proto.debate_management.Team.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTeamId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.debate_management.Speaker;
      reader.readMessage(value,proto.debate_management.Speaker.deserializeBinaryFromReader);
      msg.addSpeakers(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addSpeakerNames(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTotalPoints(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLeagueName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeedback(value);
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
proto.debate_management.Team.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.Team.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.Team} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.Team.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSpeakersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.debate_management.Speaker.serializeBinaryToWriter
    );
  }
  f = message.getSpeakerNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getTotalPoints();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getLeagueName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getFeedback();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional int32 team_id = 1;
 * @return {number}
 */
proto.debate_management.Team.prototype.getTeamId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.Team} returns this
 */
proto.debate_management.Team.prototype.setTeamId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.debate_management.Team.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.Team} returns this
 */
proto.debate_management.Team.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Speaker speakers = 3;
 * @return {!Array<!proto.debate_management.Speaker>}
 */
proto.debate_management.Team.prototype.getSpeakersList = function() {
  return /** @type{!Array<!proto.debate_management.Speaker>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.Speaker, 3));
};


/**
 * @param {!Array<!proto.debate_management.Speaker>} value
 * @return {!proto.debate_management.Team} returns this
*/
proto.debate_management.Team.prototype.setSpeakersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.debate_management.Speaker=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.Speaker}
 */
proto.debate_management.Team.prototype.addSpeakers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.debate_management.Speaker, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.Team} returns this
 */
proto.debate_management.Team.prototype.clearSpeakersList = function() {
  return this.setSpeakersList([]);
};


/**
 * repeated string speaker_names = 4;
 * @return {!Array<string>}
 */
proto.debate_management.Team.prototype.getSpeakerNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.debate_management.Team} returns this
 */
proto.debate_management.Team.prototype.setSpeakerNamesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.debate_management.Team} returns this
 */
proto.debate_management.Team.prototype.addSpeakerNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.Team} returns this
 */
proto.debate_management.Team.prototype.clearSpeakerNamesList = function() {
  return this.setSpeakerNamesList([]);
};


/**
 * optional double total_points = 5;
 * @return {number}
 */
proto.debate_management.Team.prototype.getTotalPoints = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.Team} returns this
 */
proto.debate_management.Team.prototype.setTotalPoints = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional string league_name = 6;
 * @return {string}
 */
proto.debate_management.Team.prototype.getLeagueName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.Team} returns this
 */
proto.debate_management.Team.prototype.setLeagueName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string feedback = 7;
 * @return {string}
 */
proto.debate_management.Team.prototype.getFeedback = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.Team} returns this
 */
proto.debate_management.Team.prototype.setFeedback = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
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
proto.debate_management.Speaker.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.Speaker.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.Speaker} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.Speaker.toObject = function(includeInstance, msg) {
  var f, obj = {
    speakerId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    scoreId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    rank: jspb.Message.getFieldWithDefault(msg, 4, 0),
    points: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    feedback: jspb.Message.getFieldWithDefault(msg, 6, ""),
    teamId: jspb.Message.getFieldWithDefault(msg, 7, 0),
    teamName: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.debate_management.Speaker}
 */
proto.debate_management.Speaker.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.Speaker;
  return proto.debate_management.Speaker.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.Speaker} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.Speaker}
 */
proto.debate_management.Speaker.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSpeakerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScoreId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRank(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPoints(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeedback(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTeamId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamName(value);
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
proto.debate_management.Speaker.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.Speaker.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.Speaker} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.Speaker.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpeakerId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getScoreId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getRank();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPoints();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getFeedback();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTeamId();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getTeamName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional int32 speaker_id = 1;
 * @return {number}
 */
proto.debate_management.Speaker.prototype.getSpeakerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.Speaker} returns this
 */
proto.debate_management.Speaker.prototype.setSpeakerId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.debate_management.Speaker.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.Speaker} returns this
 */
proto.debate_management.Speaker.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 score_id = 3;
 * @return {number}
 */
proto.debate_management.Speaker.prototype.getScoreId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.Speaker} returns this
 */
proto.debate_management.Speaker.prototype.setScoreId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 rank = 4;
 * @return {number}
 */
proto.debate_management.Speaker.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.Speaker} returns this
 */
proto.debate_management.Speaker.prototype.setRank = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double points = 5;
 * @return {number}
 */
proto.debate_management.Speaker.prototype.getPoints = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.Speaker} returns this
 */
proto.debate_management.Speaker.prototype.setPoints = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional string feedback = 6;
 * @return {string}
 */
proto.debate_management.Speaker.prototype.getFeedback = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.Speaker} returns this
 */
proto.debate_management.Speaker.prototype.setFeedback = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 team_id = 7;
 * @return {number}
 */
proto.debate_management.Speaker.prototype.getTeamId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.Speaker} returns this
 */
proto.debate_management.Speaker.prototype.setTeamId = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string team_name = 8;
 * @return {string}
 */
proto.debate_management.Speaker.prototype.getTeamName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.Speaker} returns this
 */
proto.debate_management.Speaker.prototype.setTeamName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
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
proto.debate_management.GetPairingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetPairingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetPairingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetPairingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tournamentId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roundNumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
    isElimination: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    token: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.debate_management.GetPairingsRequest}
 */
proto.debate_management.GetPairingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetPairingsRequest;
  return proto.debate_management.GetPairingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetPairingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetPairingsRequest}
 */
proto.debate_management.GetPairingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTournamentId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoundNumber(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsElimination(value);
      break;
    case 4:
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
proto.debate_management.GetPairingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetPairingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetPairingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetPairingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTournamentId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRoundNumber();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getIsElimination();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 tournament_id = 1;
 * @return {number}
 */
proto.debate_management.GetPairingsRequest.prototype.getTournamentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetPairingsRequest} returns this
 */
proto.debate_management.GetPairingsRequest.prototype.setTournamentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 round_number = 2;
 * @return {number}
 */
proto.debate_management.GetPairingsRequest.prototype.getRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetPairingsRequest} returns this
 */
proto.debate_management.GetPairingsRequest.prototype.setRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool is_elimination = 3;
 * @return {boolean}
 */
proto.debate_management.GetPairingsRequest.prototype.getIsElimination = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.debate_management.GetPairingsRequest} returns this
 */
proto.debate_management.GetPairingsRequest.prototype.setIsElimination = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string token = 4;
 * @return {string}
 */
proto.debate_management.GetPairingsRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.GetPairingsRequest} returns this
 */
proto.debate_management.GetPairingsRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.GetPairingsResponse.repeatedFields_ = [1];



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
proto.debate_management.GetPairingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetPairingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetPairingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetPairingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pairingsList: jspb.Message.toObjectList(msg.getPairingsList(),
    proto.debate_management.Pairing.toObject, includeInstance)
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
 * @return {!proto.debate_management.GetPairingsResponse}
 */
proto.debate_management.GetPairingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetPairingsResponse;
  return proto.debate_management.GetPairingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetPairingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetPairingsResponse}
 */
proto.debate_management.GetPairingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.debate_management.Pairing;
      reader.readMessage(value,proto.debate_management.Pairing.deserializeBinaryFromReader);
      msg.addPairings(value);
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
proto.debate_management.GetPairingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetPairingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetPairingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetPairingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPairingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.debate_management.Pairing.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Pairing pairings = 1;
 * @return {!Array<!proto.debate_management.Pairing>}
 */
proto.debate_management.GetPairingsResponse.prototype.getPairingsList = function() {
  return /** @type{!Array<!proto.debate_management.Pairing>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.Pairing, 1));
};


/**
 * @param {!Array<!proto.debate_management.Pairing>} value
 * @return {!proto.debate_management.GetPairingsResponse} returns this
*/
proto.debate_management.GetPairingsResponse.prototype.setPairingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.debate_management.Pairing=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.Pairing}
 */
proto.debate_management.GetPairingsResponse.prototype.addPairings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.debate_management.Pairing, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.GetPairingsResponse} returns this
 */
proto.debate_management.GetPairingsResponse.prototype.clearPairingsList = function() {
  return this.setPairingsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.UpdatePairingsRequest.repeatedFields_ = [1];



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
proto.debate_management.UpdatePairingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.UpdatePairingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.UpdatePairingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.UpdatePairingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pairingsList: jspb.Message.toObjectList(msg.getPairingsList(),
    proto.debate_management.Pairing.toObject, includeInstance),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.debate_management.UpdatePairingsRequest}
 */
proto.debate_management.UpdatePairingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.UpdatePairingsRequest;
  return proto.debate_management.UpdatePairingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.UpdatePairingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.UpdatePairingsRequest}
 */
proto.debate_management.UpdatePairingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.debate_management.Pairing;
      reader.readMessage(value,proto.debate_management.Pairing.deserializeBinaryFromReader);
      msg.addPairings(value);
      break;
    case 2:
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
proto.debate_management.UpdatePairingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.UpdatePairingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.UpdatePairingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.UpdatePairingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPairingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.debate_management.Pairing.serializeBinaryToWriter
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Pairing pairings = 1;
 * @return {!Array<!proto.debate_management.Pairing>}
 */
proto.debate_management.UpdatePairingsRequest.prototype.getPairingsList = function() {
  return /** @type{!Array<!proto.debate_management.Pairing>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.Pairing, 1));
};


/**
 * @param {!Array<!proto.debate_management.Pairing>} value
 * @return {!proto.debate_management.UpdatePairingsRequest} returns this
*/
proto.debate_management.UpdatePairingsRequest.prototype.setPairingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.debate_management.Pairing=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.Pairing}
 */
proto.debate_management.UpdatePairingsRequest.prototype.addPairings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.debate_management.Pairing, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.UpdatePairingsRequest} returns this
 */
proto.debate_management.UpdatePairingsRequest.prototype.clearPairingsList = function() {
  return this.setPairingsList([]);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.debate_management.UpdatePairingsRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.UpdatePairingsRequest} returns this
 */
proto.debate_management.UpdatePairingsRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.UpdatePairingsResponse.repeatedFields_ = [1];



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
proto.debate_management.UpdatePairingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.UpdatePairingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.UpdatePairingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.UpdatePairingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pairingsList: jspb.Message.toObjectList(msg.getPairingsList(),
    proto.debate_management.Pairing.toObject, includeInstance)
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
 * @return {!proto.debate_management.UpdatePairingsResponse}
 */
proto.debate_management.UpdatePairingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.UpdatePairingsResponse;
  return proto.debate_management.UpdatePairingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.UpdatePairingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.UpdatePairingsResponse}
 */
proto.debate_management.UpdatePairingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.debate_management.Pairing;
      reader.readMessage(value,proto.debate_management.Pairing.deserializeBinaryFromReader);
      msg.addPairings(value);
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
proto.debate_management.UpdatePairingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.UpdatePairingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.UpdatePairingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.UpdatePairingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPairingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.debate_management.Pairing.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Pairing pairings = 1;
 * @return {!Array<!proto.debate_management.Pairing>}
 */
proto.debate_management.UpdatePairingsResponse.prototype.getPairingsList = function() {
  return /** @type{!Array<!proto.debate_management.Pairing>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.Pairing, 1));
};


/**
 * @param {!Array<!proto.debate_management.Pairing>} value
 * @return {!proto.debate_management.UpdatePairingsResponse} returns this
*/
proto.debate_management.UpdatePairingsResponse.prototype.setPairingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.debate_management.Pairing=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.Pairing}
 */
proto.debate_management.UpdatePairingsResponse.prototype.addPairings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.debate_management.Pairing, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.UpdatePairingsResponse} returns this
 */
proto.debate_management.UpdatePairingsResponse.prototype.clearPairingsList = function() {
  return this.setPairingsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.Ballot.repeatedFields_ = [6];



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
proto.debate_management.Ballot.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.Ballot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.Ballot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.Ballot.toObject = function(includeInstance, msg) {
  var f, obj = {
    ballotId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roundNumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
    isElimination: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    roomId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    roomName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    judgesList: jspb.Message.toObjectList(msg.getJudgesList(),
    proto.debate_management.Judge.toObject, includeInstance),
    team1: (f = msg.getTeam1()) && proto.debate_management.Team.toObject(includeInstance, f),
    team2: (f = msg.getTeam2()) && proto.debate_management.Team.toObject(includeInstance, f),
    recordingStatus: jspb.Message.getFieldWithDefault(msg, 9, ""),
    verdict: jspb.Message.getFieldWithDefault(msg, 10, ""),
    lastUpdatedBy: jspb.Message.getFieldWithDefault(msg, 11, 0),
    lastUpdatedAt: jspb.Message.getFieldWithDefault(msg, 12, ""),
    headJudgeSubmitted: jspb.Message.getBooleanFieldWithDefault(msg, 13, false)
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
 * @return {!proto.debate_management.Ballot}
 */
proto.debate_management.Ballot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.Ballot;
  return proto.debate_management.Ballot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.Ballot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.Ballot}
 */
proto.debate_management.Ballot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBallotId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoundNumber(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsElimination(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoomId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomName(value);
      break;
    case 6:
      var value = new proto.debate_management.Judge;
      reader.readMessage(value,proto.debate_management.Judge.deserializeBinaryFromReader);
      msg.addJudges(value);
      break;
    case 7:
      var value = new proto.debate_management.Team;
      reader.readMessage(value,proto.debate_management.Team.deserializeBinaryFromReader);
      msg.setTeam1(value);
      break;
    case 8:
      var value = new proto.debate_management.Team;
      reader.readMessage(value,proto.debate_management.Team.deserializeBinaryFromReader);
      msg.setTeam2(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecordingStatus(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setVerdict(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLastUpdatedBy(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastUpdatedAt(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHeadJudgeSubmitted(value);
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
proto.debate_management.Ballot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.Ballot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.Ballot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.Ballot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBallotId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRoundNumber();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getIsElimination();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getRoomId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getRoomName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getJudgesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.debate_management.Judge.serializeBinaryToWriter
    );
  }
  f = message.getTeam1();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.debate_management.Team.serializeBinaryToWriter
    );
  }
  f = message.getTeam2();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.debate_management.Team.serializeBinaryToWriter
    );
  }
  f = message.getRecordingStatus();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getVerdict();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getLastUpdatedBy();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getLastUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getHeadJudgeSubmitted();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
};


/**
 * optional int32 ballot_id = 1;
 * @return {number}
 */
proto.debate_management.Ballot.prototype.getBallotId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.Ballot} returns this
 */
proto.debate_management.Ballot.prototype.setBallotId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 round_number = 2;
 * @return {number}
 */
proto.debate_management.Ballot.prototype.getRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.Ballot} returns this
 */
proto.debate_management.Ballot.prototype.setRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool is_elimination = 3;
 * @return {boolean}
 */
proto.debate_management.Ballot.prototype.getIsElimination = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.debate_management.Ballot} returns this
 */
proto.debate_management.Ballot.prototype.setIsElimination = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int32 room_id = 4;
 * @return {number}
 */
proto.debate_management.Ballot.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.Ballot} returns this
 */
proto.debate_management.Ballot.prototype.setRoomId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string room_name = 5;
 * @return {string}
 */
proto.debate_management.Ballot.prototype.getRoomName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.Ballot} returns this
 */
proto.debate_management.Ballot.prototype.setRoomName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated Judge judges = 6;
 * @return {!Array<!proto.debate_management.Judge>}
 */
proto.debate_management.Ballot.prototype.getJudgesList = function() {
  return /** @type{!Array<!proto.debate_management.Judge>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.Judge, 6));
};


/**
 * @param {!Array<!proto.debate_management.Judge>} value
 * @return {!proto.debate_management.Ballot} returns this
*/
proto.debate_management.Ballot.prototype.setJudgesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.debate_management.Judge=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.Judge}
 */
proto.debate_management.Ballot.prototype.addJudges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.debate_management.Judge, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.Ballot} returns this
 */
proto.debate_management.Ballot.prototype.clearJudgesList = function() {
  return this.setJudgesList([]);
};


/**
 * optional Team team1 = 7;
 * @return {?proto.debate_management.Team}
 */
proto.debate_management.Ballot.prototype.getTeam1 = function() {
  return /** @type{?proto.debate_management.Team} */ (
    jspb.Message.getWrapperField(this, proto.debate_management.Team, 7));
};


/**
 * @param {?proto.debate_management.Team|undefined} value
 * @return {!proto.debate_management.Ballot} returns this
*/
proto.debate_management.Ballot.prototype.setTeam1 = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.debate_management.Ballot} returns this
 */
proto.debate_management.Ballot.prototype.clearTeam1 = function() {
  return this.setTeam1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.debate_management.Ballot.prototype.hasTeam1 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Team team2 = 8;
 * @return {?proto.debate_management.Team}
 */
proto.debate_management.Ballot.prototype.getTeam2 = function() {
  return /** @type{?proto.debate_management.Team} */ (
    jspb.Message.getWrapperField(this, proto.debate_management.Team, 8));
};


/**
 * @param {?proto.debate_management.Team|undefined} value
 * @return {!proto.debate_management.Ballot} returns this
*/
proto.debate_management.Ballot.prototype.setTeam2 = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.debate_management.Ballot} returns this
 */
proto.debate_management.Ballot.prototype.clearTeam2 = function() {
  return this.setTeam2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.debate_management.Ballot.prototype.hasTeam2 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string recording_status = 9;
 * @return {string}
 */
proto.debate_management.Ballot.prototype.getRecordingStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.Ballot} returns this
 */
proto.debate_management.Ballot.prototype.setRecordingStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string verdict = 10;
 * @return {string}
 */
proto.debate_management.Ballot.prototype.getVerdict = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.Ballot} returns this
 */
proto.debate_management.Ballot.prototype.setVerdict = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int32 last_updated_by = 11;
 * @return {number}
 */
proto.debate_management.Ballot.prototype.getLastUpdatedBy = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.Ballot} returns this
 */
proto.debate_management.Ballot.prototype.setLastUpdatedBy = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string last_updated_at = 12;
 * @return {string}
 */
proto.debate_management.Ballot.prototype.getLastUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.Ballot} returns this
 */
proto.debate_management.Ballot.prototype.setLastUpdatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional bool head_judge_submitted = 13;
 * @return {boolean}
 */
proto.debate_management.Ballot.prototype.getHeadJudgeSubmitted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.debate_management.Ballot} returns this
 */
proto.debate_management.Ballot.prototype.setHeadJudgeSubmitted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
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
proto.debate_management.GetBallotsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetBallotsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetBallotsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetBallotsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tournamentId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roundNumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
    isElimination: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    token: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.debate_management.GetBallotsRequest}
 */
proto.debate_management.GetBallotsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetBallotsRequest;
  return proto.debate_management.GetBallotsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetBallotsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetBallotsRequest}
 */
proto.debate_management.GetBallotsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTournamentId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoundNumber(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsElimination(value);
      break;
    case 4:
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
proto.debate_management.GetBallotsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetBallotsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetBallotsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetBallotsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTournamentId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRoundNumber();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getIsElimination();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 tournament_id = 1;
 * @return {number}
 */
proto.debate_management.GetBallotsRequest.prototype.getTournamentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetBallotsRequest} returns this
 */
proto.debate_management.GetBallotsRequest.prototype.setTournamentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 round_number = 2;
 * @return {number}
 */
proto.debate_management.GetBallotsRequest.prototype.getRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetBallotsRequest} returns this
 */
proto.debate_management.GetBallotsRequest.prototype.setRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool is_elimination = 3;
 * @return {boolean}
 */
proto.debate_management.GetBallotsRequest.prototype.getIsElimination = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.debate_management.GetBallotsRequest} returns this
 */
proto.debate_management.GetBallotsRequest.prototype.setIsElimination = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string token = 4;
 * @return {string}
 */
proto.debate_management.GetBallotsRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.GetBallotsRequest} returns this
 */
proto.debate_management.GetBallotsRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.GetBallotsResponse.repeatedFields_ = [1];



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
proto.debate_management.GetBallotsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetBallotsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetBallotsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetBallotsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ballotsList: jspb.Message.toObjectList(msg.getBallotsList(),
    proto.debate_management.Ballot.toObject, includeInstance)
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
 * @return {!proto.debate_management.GetBallotsResponse}
 */
proto.debate_management.GetBallotsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetBallotsResponse;
  return proto.debate_management.GetBallotsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetBallotsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetBallotsResponse}
 */
proto.debate_management.GetBallotsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.debate_management.Ballot;
      reader.readMessage(value,proto.debate_management.Ballot.deserializeBinaryFromReader);
      msg.addBallots(value);
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
proto.debate_management.GetBallotsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetBallotsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetBallotsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetBallotsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBallotsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.debate_management.Ballot.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Ballot ballots = 1;
 * @return {!Array<!proto.debate_management.Ballot>}
 */
proto.debate_management.GetBallotsResponse.prototype.getBallotsList = function() {
  return /** @type{!Array<!proto.debate_management.Ballot>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.Ballot, 1));
};


/**
 * @param {!Array<!proto.debate_management.Ballot>} value
 * @return {!proto.debate_management.GetBallotsResponse} returns this
*/
proto.debate_management.GetBallotsResponse.prototype.setBallotsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.debate_management.Ballot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.Ballot}
 */
proto.debate_management.GetBallotsResponse.prototype.addBallots = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.debate_management.Ballot, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.GetBallotsResponse} returns this
 */
proto.debate_management.GetBallotsResponse.prototype.clearBallotsList = function() {
  return this.setBallotsList([]);
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
proto.debate_management.GetBallotRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetBallotRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetBallotRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetBallotRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ballotId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.debate_management.GetBallotRequest}
 */
proto.debate_management.GetBallotRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetBallotRequest;
  return proto.debate_management.GetBallotRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetBallotRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetBallotRequest}
 */
proto.debate_management.GetBallotRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBallotId(value);
      break;
    case 2:
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
proto.debate_management.GetBallotRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetBallotRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetBallotRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetBallotRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBallotId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 ballot_id = 1;
 * @return {number}
 */
proto.debate_management.GetBallotRequest.prototype.getBallotId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetBallotRequest} returns this
 */
proto.debate_management.GetBallotRequest.prototype.setBallotId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.debate_management.GetBallotRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.GetBallotRequest} returns this
 */
proto.debate_management.GetBallotRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.debate_management.GetBallotResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetBallotResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetBallotResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetBallotResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ballot: (f = msg.getBallot()) && proto.debate_management.Ballot.toObject(includeInstance, f)
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
 * @return {!proto.debate_management.GetBallotResponse}
 */
proto.debate_management.GetBallotResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetBallotResponse;
  return proto.debate_management.GetBallotResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetBallotResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetBallotResponse}
 */
proto.debate_management.GetBallotResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.debate_management.Ballot;
      reader.readMessage(value,proto.debate_management.Ballot.deserializeBinaryFromReader);
      msg.setBallot(value);
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
proto.debate_management.GetBallotResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetBallotResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetBallotResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetBallotResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBallot();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.debate_management.Ballot.serializeBinaryToWriter
    );
  }
};


/**
 * optional Ballot ballot = 1;
 * @return {?proto.debate_management.Ballot}
 */
proto.debate_management.GetBallotResponse.prototype.getBallot = function() {
  return /** @type{?proto.debate_management.Ballot} */ (
    jspb.Message.getWrapperField(this, proto.debate_management.Ballot, 1));
};


/**
 * @param {?proto.debate_management.Ballot|undefined} value
 * @return {!proto.debate_management.GetBallotResponse} returns this
*/
proto.debate_management.GetBallotResponse.prototype.setBallot = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.debate_management.GetBallotResponse} returns this
 */
proto.debate_management.GetBallotResponse.prototype.clearBallot = function() {
  return this.setBallot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.debate_management.GetBallotResponse.prototype.hasBallot = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.debate_management.GetBallotByJudgeIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetBallotByJudgeIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetBallotByJudgeIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetBallotByJudgeIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    judgeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tournamentId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    token: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.debate_management.GetBallotByJudgeIDRequest}
 */
proto.debate_management.GetBallotByJudgeIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetBallotByJudgeIDRequest;
  return proto.debate_management.GetBallotByJudgeIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetBallotByJudgeIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetBallotByJudgeIDRequest}
 */
proto.debate_management.GetBallotByJudgeIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setJudgeId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTournamentId(value);
      break;
    case 3:
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
proto.debate_management.GetBallotByJudgeIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetBallotByJudgeIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetBallotByJudgeIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetBallotByJudgeIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJudgeId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTournamentId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 judge_id = 1;
 * @return {number}
 */
proto.debate_management.GetBallotByJudgeIDRequest.prototype.getJudgeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetBallotByJudgeIDRequest} returns this
 */
proto.debate_management.GetBallotByJudgeIDRequest.prototype.setJudgeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 tournament_id = 2;
 * @return {number}
 */
proto.debate_management.GetBallotByJudgeIDRequest.prototype.getTournamentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetBallotByJudgeIDRequest} returns this
 */
proto.debate_management.GetBallotByJudgeIDRequest.prototype.setTournamentId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string token = 3;
 * @return {string}
 */
proto.debate_management.GetBallotByJudgeIDRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.GetBallotByJudgeIDRequest} returns this
 */
proto.debate_management.GetBallotByJudgeIDRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.debate_management.GetBallotByJudgeIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetBallotByJudgeIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetBallotByJudgeIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetBallotByJudgeIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ballot: (f = msg.getBallot()) && proto.debate_management.Ballot.toObject(includeInstance, f)
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
 * @return {!proto.debate_management.GetBallotByJudgeIDResponse}
 */
proto.debate_management.GetBallotByJudgeIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetBallotByJudgeIDResponse;
  return proto.debate_management.GetBallotByJudgeIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetBallotByJudgeIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetBallotByJudgeIDResponse}
 */
proto.debate_management.GetBallotByJudgeIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.debate_management.Ballot;
      reader.readMessage(value,proto.debate_management.Ballot.deserializeBinaryFromReader);
      msg.setBallot(value);
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
proto.debate_management.GetBallotByJudgeIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetBallotByJudgeIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetBallotByJudgeIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetBallotByJudgeIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBallot();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.debate_management.Ballot.serializeBinaryToWriter
    );
  }
};


/**
 * optional Ballot ballot = 1;
 * @return {?proto.debate_management.Ballot}
 */
proto.debate_management.GetBallotByJudgeIDResponse.prototype.getBallot = function() {
  return /** @type{?proto.debate_management.Ballot} */ (
    jspb.Message.getWrapperField(this, proto.debate_management.Ballot, 1));
};


/**
 * @param {?proto.debate_management.Ballot|undefined} value
 * @return {!proto.debate_management.GetBallotByJudgeIDResponse} returns this
*/
proto.debate_management.GetBallotByJudgeIDResponse.prototype.setBallot = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.debate_management.GetBallotByJudgeIDResponse} returns this
 */
proto.debate_management.GetBallotByJudgeIDResponse.prototype.clearBallot = function() {
  return this.setBallot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.debate_management.GetBallotByJudgeIDResponse.prototype.hasBallot = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.debate_management.UpdateBallotRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.UpdateBallotRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.UpdateBallotRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.UpdateBallotRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ballot: (f = msg.getBallot()) && proto.debate_management.Ballot.toObject(includeInstance, f),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.debate_management.UpdateBallotRequest}
 */
proto.debate_management.UpdateBallotRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.UpdateBallotRequest;
  return proto.debate_management.UpdateBallotRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.UpdateBallotRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.UpdateBallotRequest}
 */
proto.debate_management.UpdateBallotRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.debate_management.Ballot;
      reader.readMessage(value,proto.debate_management.Ballot.deserializeBinaryFromReader);
      msg.setBallot(value);
      break;
    case 2:
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
proto.debate_management.UpdateBallotRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.UpdateBallotRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.UpdateBallotRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.UpdateBallotRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBallot();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.debate_management.Ballot.serializeBinaryToWriter
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Ballot ballot = 1;
 * @return {?proto.debate_management.Ballot}
 */
proto.debate_management.UpdateBallotRequest.prototype.getBallot = function() {
  return /** @type{?proto.debate_management.Ballot} */ (
    jspb.Message.getWrapperField(this, proto.debate_management.Ballot, 1));
};


/**
 * @param {?proto.debate_management.Ballot|undefined} value
 * @return {!proto.debate_management.UpdateBallotRequest} returns this
*/
proto.debate_management.UpdateBallotRequest.prototype.setBallot = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.debate_management.UpdateBallotRequest} returns this
 */
proto.debate_management.UpdateBallotRequest.prototype.clearBallot = function() {
  return this.setBallot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.debate_management.UpdateBallotRequest.prototype.hasBallot = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.debate_management.UpdateBallotRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.UpdateBallotRequest} returns this
 */
proto.debate_management.UpdateBallotRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.debate_management.UpdateBallotResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.UpdateBallotResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.UpdateBallotResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.UpdateBallotResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ballot: (f = msg.getBallot()) && proto.debate_management.Ballot.toObject(includeInstance, f)
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
 * @return {!proto.debate_management.UpdateBallotResponse}
 */
proto.debate_management.UpdateBallotResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.UpdateBallotResponse;
  return proto.debate_management.UpdateBallotResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.UpdateBallotResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.UpdateBallotResponse}
 */
proto.debate_management.UpdateBallotResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.debate_management.Ballot;
      reader.readMessage(value,proto.debate_management.Ballot.deserializeBinaryFromReader);
      msg.setBallot(value);
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
proto.debate_management.UpdateBallotResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.UpdateBallotResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.UpdateBallotResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.UpdateBallotResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBallot();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.debate_management.Ballot.serializeBinaryToWriter
    );
  }
};


/**
 * optional Ballot ballot = 1;
 * @return {?proto.debate_management.Ballot}
 */
proto.debate_management.UpdateBallotResponse.prototype.getBallot = function() {
  return /** @type{?proto.debate_management.Ballot} */ (
    jspb.Message.getWrapperField(this, proto.debate_management.Ballot, 1));
};


/**
 * @param {?proto.debate_management.Ballot|undefined} value
 * @return {!proto.debate_management.UpdateBallotResponse} returns this
*/
proto.debate_management.UpdateBallotResponse.prototype.setBallot = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.debate_management.UpdateBallotResponse} returns this
 */
proto.debate_management.UpdateBallotResponse.prototype.clearBallot = function() {
  return this.setBallot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.debate_management.UpdateBallotResponse.prototype.hasBallot = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.debate_management.GeneratePreliminaryPairingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GeneratePreliminaryPairingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GeneratePreliminaryPairingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GeneratePreliminaryPairingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tournamentId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.debate_management.GeneratePreliminaryPairingsRequest}
 */
proto.debate_management.GeneratePreliminaryPairingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GeneratePreliminaryPairingsRequest;
  return proto.debate_management.GeneratePreliminaryPairingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GeneratePreliminaryPairingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GeneratePreliminaryPairingsRequest}
 */
proto.debate_management.GeneratePreliminaryPairingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTournamentId(value);
      break;
    case 2:
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
proto.debate_management.GeneratePreliminaryPairingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GeneratePreliminaryPairingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GeneratePreliminaryPairingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GeneratePreliminaryPairingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTournamentId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 tournament_id = 1;
 * @return {number}
 */
proto.debate_management.GeneratePreliminaryPairingsRequest.prototype.getTournamentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GeneratePreliminaryPairingsRequest} returns this
 */
proto.debate_management.GeneratePreliminaryPairingsRequest.prototype.setTournamentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.debate_management.GeneratePreliminaryPairingsRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.GeneratePreliminaryPairingsRequest} returns this
 */
proto.debate_management.GeneratePreliminaryPairingsRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.debate_management.GenerateEliminationPairingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GenerateEliminationPairingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GenerateEliminationPairingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GenerateEliminationPairingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tournamentId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roundNumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
    token: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.debate_management.GenerateEliminationPairingsRequest}
 */
proto.debate_management.GenerateEliminationPairingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GenerateEliminationPairingsRequest;
  return proto.debate_management.GenerateEliminationPairingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GenerateEliminationPairingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GenerateEliminationPairingsRequest}
 */
proto.debate_management.GenerateEliminationPairingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTournamentId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoundNumber(value);
      break;
    case 3:
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
proto.debate_management.GenerateEliminationPairingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GenerateEliminationPairingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GenerateEliminationPairingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GenerateEliminationPairingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTournamentId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRoundNumber();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 tournament_id = 1;
 * @return {number}
 */
proto.debate_management.GenerateEliminationPairingsRequest.prototype.getTournamentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GenerateEliminationPairingsRequest} returns this
 */
proto.debate_management.GenerateEliminationPairingsRequest.prototype.setTournamentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 round_number = 2;
 * @return {number}
 */
proto.debate_management.GenerateEliminationPairingsRequest.prototype.getRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GenerateEliminationPairingsRequest} returns this
 */
proto.debate_management.GenerateEliminationPairingsRequest.prototype.setRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string token = 3;
 * @return {string}
 */
proto.debate_management.GenerateEliminationPairingsRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.GenerateEliminationPairingsRequest} returns this
 */
proto.debate_management.GenerateEliminationPairingsRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.GeneratePairingsResponse.repeatedFields_ = [1];



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
proto.debate_management.GeneratePairingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GeneratePairingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GeneratePairingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GeneratePairingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pairingsList: jspb.Message.toObjectList(msg.getPairingsList(),
    proto.debate_management.Pairing.toObject, includeInstance)
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
 * @return {!proto.debate_management.GeneratePairingsResponse}
 */
proto.debate_management.GeneratePairingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GeneratePairingsResponse;
  return proto.debate_management.GeneratePairingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GeneratePairingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GeneratePairingsResponse}
 */
proto.debate_management.GeneratePairingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.debate_management.Pairing;
      reader.readMessage(value,proto.debate_management.Pairing.deserializeBinaryFromReader);
      msg.addPairings(value);
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
proto.debate_management.GeneratePairingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GeneratePairingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GeneratePairingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GeneratePairingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPairingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.debate_management.Pairing.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Pairing pairings = 1;
 * @return {!Array<!proto.debate_management.Pairing>}
 */
proto.debate_management.GeneratePairingsResponse.prototype.getPairingsList = function() {
  return /** @type{!Array<!proto.debate_management.Pairing>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.Pairing, 1));
};


/**
 * @param {!Array<!proto.debate_management.Pairing>} value
 * @return {!proto.debate_management.GeneratePairingsResponse} returns this
*/
proto.debate_management.GeneratePairingsResponse.prototype.setPairingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.debate_management.Pairing=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.Pairing}
 */
proto.debate_management.GeneratePairingsResponse.prototype.addPairings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.debate_management.Pairing, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.GeneratePairingsResponse} returns this
 */
proto.debate_management.GeneratePairingsResponse.prototype.clearPairingsList = function() {
  return this.setPairingsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.CreateTeamRequest.repeatedFields_ = [3];



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
proto.debate_management.CreateTeamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.CreateTeamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.CreateTeamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.CreateTeamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tournamentId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    speakersList: jspb.Message.toObjectList(msg.getSpeakersList(),
    proto.debate_management.Speaker.toObject, includeInstance),
    token: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.debate_management.CreateTeamRequest}
 */
proto.debate_management.CreateTeamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.CreateTeamRequest;
  return proto.debate_management.CreateTeamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.CreateTeamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.CreateTeamRequest}
 */
proto.debate_management.CreateTeamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTournamentId(value);
      break;
    case 3:
      var value = new proto.debate_management.Speaker;
      reader.readMessage(value,proto.debate_management.Speaker.deserializeBinaryFromReader);
      msg.addSpeakers(value);
      break;
    case 4:
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
proto.debate_management.CreateTeamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.CreateTeamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.CreateTeamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.CreateTeamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTournamentId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSpeakersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.debate_management.Speaker.serializeBinaryToWriter
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.debate_management.CreateTeamRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.CreateTeamRequest} returns this
 */
proto.debate_management.CreateTeamRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 tournament_id = 2;
 * @return {number}
 */
proto.debate_management.CreateTeamRequest.prototype.getTournamentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.CreateTeamRequest} returns this
 */
proto.debate_management.CreateTeamRequest.prototype.setTournamentId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated Speaker speakers = 3;
 * @return {!Array<!proto.debate_management.Speaker>}
 */
proto.debate_management.CreateTeamRequest.prototype.getSpeakersList = function() {
  return /** @type{!Array<!proto.debate_management.Speaker>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.Speaker, 3));
};


/**
 * @param {!Array<!proto.debate_management.Speaker>} value
 * @return {!proto.debate_management.CreateTeamRequest} returns this
*/
proto.debate_management.CreateTeamRequest.prototype.setSpeakersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.debate_management.Speaker=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.Speaker}
 */
proto.debate_management.CreateTeamRequest.prototype.addSpeakers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.debate_management.Speaker, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.CreateTeamRequest} returns this
 */
proto.debate_management.CreateTeamRequest.prototype.clearSpeakersList = function() {
  return this.setSpeakersList([]);
};


/**
 * optional string token = 4;
 * @return {string}
 */
proto.debate_management.CreateTeamRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.CreateTeamRequest} returns this
 */
proto.debate_management.CreateTeamRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.debate_management.GetTeamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetTeamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetTeamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetTeamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.debate_management.GetTeamRequest}
 */
proto.debate_management.GetTeamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetTeamRequest;
  return proto.debate_management.GetTeamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetTeamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetTeamRequest}
 */
proto.debate_management.GetTeamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTeamId(value);
      break;
    case 2:
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
proto.debate_management.GetTeamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetTeamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetTeamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetTeamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 team_id = 1;
 * @return {number}
 */
proto.debate_management.GetTeamRequest.prototype.getTeamId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetTeamRequest} returns this
 */
proto.debate_management.GetTeamRequest.prototype.setTeamId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.debate_management.GetTeamRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.GetTeamRequest} returns this
 */
proto.debate_management.GetTeamRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.debate_management.UpdateTeamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.UpdateTeamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.UpdateTeamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.UpdateTeamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    team: (f = msg.getTeam()) && proto.debate_management.Team.toObject(includeInstance, f),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.debate_management.UpdateTeamRequest}
 */
proto.debate_management.UpdateTeamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.UpdateTeamRequest;
  return proto.debate_management.UpdateTeamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.UpdateTeamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.UpdateTeamRequest}
 */
proto.debate_management.UpdateTeamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.debate_management.Team;
      reader.readMessage(value,proto.debate_management.Team.deserializeBinaryFromReader);
      msg.setTeam(value);
      break;
    case 2:
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
proto.debate_management.UpdateTeamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.UpdateTeamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.UpdateTeamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.UpdateTeamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeam();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.debate_management.Team.serializeBinaryToWriter
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Team team = 1;
 * @return {?proto.debate_management.Team}
 */
proto.debate_management.UpdateTeamRequest.prototype.getTeam = function() {
  return /** @type{?proto.debate_management.Team} */ (
    jspb.Message.getWrapperField(this, proto.debate_management.Team, 1));
};


/**
 * @param {?proto.debate_management.Team|undefined} value
 * @return {!proto.debate_management.UpdateTeamRequest} returns this
*/
proto.debate_management.UpdateTeamRequest.prototype.setTeam = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.debate_management.UpdateTeamRequest} returns this
 */
proto.debate_management.UpdateTeamRequest.prototype.clearTeam = function() {
  return this.setTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.debate_management.UpdateTeamRequest.prototype.hasTeam = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.debate_management.UpdateTeamRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.UpdateTeamRequest} returns this
 */
proto.debate_management.UpdateTeamRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.debate_management.DeleteTeamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.DeleteTeamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.DeleteTeamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.DeleteTeamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.debate_management.DeleteTeamRequest}
 */
proto.debate_management.DeleteTeamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.DeleteTeamRequest;
  return proto.debate_management.DeleteTeamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.DeleteTeamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.DeleteTeamRequest}
 */
proto.debate_management.DeleteTeamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTeamId(value);
      break;
    case 2:
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
proto.debate_management.DeleteTeamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.DeleteTeamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.DeleteTeamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.DeleteTeamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 team_id = 1;
 * @return {number}
 */
proto.debate_management.DeleteTeamRequest.prototype.getTeamId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.DeleteTeamRequest} returns this
 */
proto.debate_management.DeleteTeamRequest.prototype.setTeamId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.debate_management.DeleteTeamRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.DeleteTeamRequest} returns this
 */
proto.debate_management.DeleteTeamRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.debate_management.DeleteTeamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.DeleteTeamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.DeleteTeamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.DeleteTeamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.debate_management.DeleteTeamResponse}
 */
proto.debate_management.DeleteTeamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.DeleteTeamResponse;
  return proto.debate_management.DeleteTeamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.DeleteTeamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.DeleteTeamResponse}
 */
proto.debate_management.DeleteTeamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.debate_management.DeleteTeamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.DeleteTeamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.DeleteTeamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.DeleteTeamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.debate_management.DeleteTeamResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.debate_management.DeleteTeamResponse} returns this
 */
proto.debate_management.DeleteTeamResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.debate_management.DeleteTeamResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.DeleteTeamResponse} returns this
 */
proto.debate_management.DeleteTeamResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.debate_management.GetTeamsByTournamentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetTeamsByTournamentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetTeamsByTournamentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetTeamsByTournamentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tournamentId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.debate_management.GetTeamsByTournamentRequest}
 */
proto.debate_management.GetTeamsByTournamentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetTeamsByTournamentRequest;
  return proto.debate_management.GetTeamsByTournamentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetTeamsByTournamentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetTeamsByTournamentRequest}
 */
proto.debate_management.GetTeamsByTournamentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTournamentId(value);
      break;
    case 2:
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
proto.debate_management.GetTeamsByTournamentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetTeamsByTournamentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetTeamsByTournamentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetTeamsByTournamentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTournamentId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 tournament_id = 1;
 * @return {number}
 */
proto.debate_management.GetTeamsByTournamentRequest.prototype.getTournamentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetTeamsByTournamentRequest} returns this
 */
proto.debate_management.GetTeamsByTournamentRequest.prototype.setTournamentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.debate_management.GetTeamsByTournamentRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.GetTeamsByTournamentRequest} returns this
 */
proto.debate_management.GetTeamsByTournamentRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.GetTeamsByTournamentResponse.repeatedFields_ = [1];



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
proto.debate_management.GetTeamsByTournamentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetTeamsByTournamentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetTeamsByTournamentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetTeamsByTournamentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamsList: jspb.Message.toObjectList(msg.getTeamsList(),
    proto.debate_management.Team.toObject, includeInstance)
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
 * @return {!proto.debate_management.GetTeamsByTournamentResponse}
 */
proto.debate_management.GetTeamsByTournamentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetTeamsByTournamentResponse;
  return proto.debate_management.GetTeamsByTournamentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetTeamsByTournamentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetTeamsByTournamentResponse}
 */
proto.debate_management.GetTeamsByTournamentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.debate_management.Team;
      reader.readMessage(value,proto.debate_management.Team.deserializeBinaryFromReader);
      msg.addTeams(value);
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
proto.debate_management.GetTeamsByTournamentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetTeamsByTournamentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetTeamsByTournamentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetTeamsByTournamentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.debate_management.Team.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Team teams = 1;
 * @return {!Array<!proto.debate_management.Team>}
 */
proto.debate_management.GetTeamsByTournamentResponse.prototype.getTeamsList = function() {
  return /** @type{!Array<!proto.debate_management.Team>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.Team, 1));
};


/**
 * @param {!Array<!proto.debate_management.Team>} value
 * @return {!proto.debate_management.GetTeamsByTournamentResponse} returns this
*/
proto.debate_management.GetTeamsByTournamentResponse.prototype.setTeamsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.debate_management.Team=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.Team}
 */
proto.debate_management.GetTeamsByTournamentResponse.prototype.addTeams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.debate_management.Team, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.GetTeamsByTournamentResponse} returns this
 */
proto.debate_management.GetTeamsByTournamentResponse.prototype.clearTeamsList = function() {
  return this.setTeamsList([]);
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
proto.debate_management.OverallRankingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.OverallRankingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.OverallRankingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.OverallRankingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.debate_management.OverallRankingRequest}
 */
proto.debate_management.OverallRankingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.OverallRankingRequest;
  return proto.debate_management.OverallRankingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.OverallRankingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.OverallRankingRequest}
 */
proto.debate_management.OverallRankingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserId(value);
      break;
    case 2:
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
proto.debate_management.OverallRankingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.OverallRankingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.OverallRankingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.OverallRankingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 user_id = 1;
 * @return {number}
 */
proto.debate_management.OverallRankingRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.OverallRankingRequest} returns this
 */
proto.debate_management.OverallRankingRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.debate_management.OverallRankingRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.OverallRankingRequest} returns this
 */
proto.debate_management.OverallRankingRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.OverallRankingResponse.repeatedFields_ = [4];



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
proto.debate_management.OverallRankingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.OverallRankingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.OverallRankingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.OverallRankingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    studentRank: jspb.Message.getFieldWithDefault(msg, 1, 0),
    totalStudents: jspb.Message.getFieldWithDefault(msg, 2, 0),
    rankChange: jspb.Message.getFieldWithDefault(msg, 3, 0),
    topStudentsList: jspb.Message.toObjectList(msg.getTopStudentsList(),
    proto.debate_management.TopStudent.toObject, includeInstance),
    studentInfo: (f = msg.getStudentInfo()) && proto.debate_management.StudentInfo.toObject(includeInstance, f)
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
 * @return {!proto.debate_management.OverallRankingResponse}
 */
proto.debate_management.OverallRankingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.OverallRankingResponse;
  return proto.debate_management.OverallRankingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.OverallRankingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.OverallRankingResponse}
 */
proto.debate_management.OverallRankingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStudentRank(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalStudents(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRankChange(value);
      break;
    case 4:
      var value = new proto.debate_management.TopStudent;
      reader.readMessage(value,proto.debate_management.TopStudent.deserializeBinaryFromReader);
      msg.addTopStudents(value);
      break;
    case 5:
      var value = new proto.debate_management.StudentInfo;
      reader.readMessage(value,proto.debate_management.StudentInfo.deserializeBinaryFromReader);
      msg.setStudentInfo(value);
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
proto.debate_management.OverallRankingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.OverallRankingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.OverallRankingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.OverallRankingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStudentRank();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTotalStudents();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getRankChange();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTopStudentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.debate_management.TopStudent.serializeBinaryToWriter
    );
  }
  f = message.getStudentInfo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.debate_management.StudentInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 student_rank = 1;
 * @return {number}
 */
proto.debate_management.OverallRankingResponse.prototype.getStudentRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.OverallRankingResponse} returns this
 */
proto.debate_management.OverallRankingResponse.prototype.setStudentRank = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 total_students = 2;
 * @return {number}
 */
proto.debate_management.OverallRankingResponse.prototype.getTotalStudents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.OverallRankingResponse} returns this
 */
proto.debate_management.OverallRankingResponse.prototype.setTotalStudents = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 rank_change = 3;
 * @return {number}
 */
proto.debate_management.OverallRankingResponse.prototype.getRankChange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.OverallRankingResponse} returns this
 */
proto.debate_management.OverallRankingResponse.prototype.setRankChange = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated TopStudent top_students = 4;
 * @return {!Array<!proto.debate_management.TopStudent>}
 */
proto.debate_management.OverallRankingResponse.prototype.getTopStudentsList = function() {
  return /** @type{!Array<!proto.debate_management.TopStudent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.TopStudent, 4));
};


/**
 * @param {!Array<!proto.debate_management.TopStudent>} value
 * @return {!proto.debate_management.OverallRankingResponse} returns this
*/
proto.debate_management.OverallRankingResponse.prototype.setTopStudentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.debate_management.TopStudent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.TopStudent}
 */
proto.debate_management.OverallRankingResponse.prototype.addTopStudents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.debate_management.TopStudent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.OverallRankingResponse} returns this
 */
proto.debate_management.OverallRankingResponse.prototype.clearTopStudentsList = function() {
  return this.setTopStudentsList([]);
};


/**
 * optional StudentInfo student_info = 5;
 * @return {?proto.debate_management.StudentInfo}
 */
proto.debate_management.OverallRankingResponse.prototype.getStudentInfo = function() {
  return /** @type{?proto.debate_management.StudentInfo} */ (
    jspb.Message.getWrapperField(this, proto.debate_management.StudentInfo, 5));
};


/**
 * @param {?proto.debate_management.StudentInfo|undefined} value
 * @return {!proto.debate_management.OverallRankingResponse} returns this
*/
proto.debate_management.OverallRankingResponse.prototype.setStudentInfo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.debate_management.OverallRankingResponse} returns this
 */
proto.debate_management.OverallRankingResponse.prototype.clearStudentInfo = function() {
  return this.setStudentInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.debate_management.OverallRankingResponse.prototype.hasStudentInfo = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.debate_management.TopStudent.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.TopStudent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.TopStudent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.TopStudent.toObject = function(includeInstance, msg) {
  var f, obj = {
    rank: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    totalPoints: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    rankChange: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.debate_management.TopStudent}
 */
proto.debate_management.TopStudent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.TopStudent;
  return proto.debate_management.TopStudent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.TopStudent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.TopStudent}
 */
proto.debate_management.TopStudent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRank(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTotalPoints(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRankChange(value);
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
proto.debate_management.TopStudent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.TopStudent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.TopStudent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.TopStudent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRank();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTotalPoints();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getRankChange();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 rank = 1;
 * @return {number}
 */
proto.debate_management.TopStudent.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TopStudent} returns this
 */
proto.debate_management.TopStudent.prototype.setRank = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.debate_management.TopStudent.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.TopStudent} returns this
 */
proto.debate_management.TopStudent.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double total_points = 3;
 * @return {number}
 */
proto.debate_management.TopStudent.prototype.getTotalPoints = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TopStudent} returns this
 */
proto.debate_management.TopStudent.prototype.setTotalPoints = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional int32 rank_change = 4;
 * @return {number}
 */
proto.debate_management.TopStudent.prototype.getRankChange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TopStudent} returns this
 */
proto.debate_management.TopStudent.prototype.setRankChange = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.debate_management.StudentInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.StudentInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.StudentInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.StudentInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    totalPoints: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.debate_management.StudentInfo}
 */
proto.debate_management.StudentInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.StudentInfo;
  return proto.debate_management.StudentInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.StudentInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.StudentInfo}
 */
proto.debate_management.StudentInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTotalPoints(value);
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
proto.debate_management.StudentInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.StudentInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.StudentInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.StudentInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTotalPoints();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.debate_management.StudentInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.StudentInfo} returns this
 */
proto.debate_management.StudentInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double total_points = 2;
 * @return {number}
 */
proto.debate_management.StudentInfo.prototype.getTotalPoints = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.StudentInfo} returns this
 */
proto.debate_management.StudentInfo.prototype.setTotalPoints = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
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
proto.debate_management.PerformanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.PerformanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.PerformanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.PerformanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startDate: (f = msg.getStartDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endDate: (f = msg.getEndDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    token: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.debate_management.PerformanceRequest}
 */
proto.debate_management.PerformanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.PerformanceRequest;
  return proto.debate_management.PerformanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.PerformanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.PerformanceRequest}
 */
proto.debate_management.PerformanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartDate(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndDate(value);
      break;
    case 4:
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
proto.debate_management.PerformanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.PerformanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.PerformanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.PerformanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getStartDate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndDate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 user_id = 1;
 * @return {number}
 */
proto.debate_management.PerformanceRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.PerformanceRequest} returns this
 */
proto.debate_management.PerformanceRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp start_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.debate_management.PerformanceRequest.prototype.getStartDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.debate_management.PerformanceRequest} returns this
*/
proto.debate_management.PerformanceRequest.prototype.setStartDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.debate_management.PerformanceRequest} returns this
 */
proto.debate_management.PerformanceRequest.prototype.clearStartDate = function() {
  return this.setStartDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.debate_management.PerformanceRequest.prototype.hasStartDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp end_date = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.debate_management.PerformanceRequest.prototype.getEndDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.debate_management.PerformanceRequest} returns this
*/
proto.debate_management.PerformanceRequest.prototype.setEndDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.debate_management.PerformanceRequest} returns this
 */
proto.debate_management.PerformanceRequest.prototype.clearEndDate = function() {
  return this.setEndDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.debate_management.PerformanceRequest.prototype.hasEndDate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string token = 4;
 * @return {string}
 */
proto.debate_management.PerformanceRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.PerformanceRequest} returns this
 */
proto.debate_management.PerformanceRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.PerformanceResponse.repeatedFields_ = [1];



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
proto.debate_management.PerformanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.PerformanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.PerformanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.PerformanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    performanceDataList: jspb.Message.toObjectList(msg.getPerformanceDataList(),
    proto.debate_management.PerformanceData.toObject, includeInstance)
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
 * @return {!proto.debate_management.PerformanceResponse}
 */
proto.debate_management.PerformanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.PerformanceResponse;
  return proto.debate_management.PerformanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.PerformanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.PerformanceResponse}
 */
proto.debate_management.PerformanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.debate_management.PerformanceData;
      reader.readMessage(value,proto.debate_management.PerformanceData.deserializeBinaryFromReader);
      msg.addPerformanceData(value);
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
proto.debate_management.PerformanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.PerformanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.PerformanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.PerformanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPerformanceDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.debate_management.PerformanceData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PerformanceData performance_data = 1;
 * @return {!Array<!proto.debate_management.PerformanceData>}
 */
proto.debate_management.PerformanceResponse.prototype.getPerformanceDataList = function() {
  return /** @type{!Array<!proto.debate_management.PerformanceData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.PerformanceData, 1));
};


/**
 * @param {!Array<!proto.debate_management.PerformanceData>} value
 * @return {!proto.debate_management.PerformanceResponse} returns this
*/
proto.debate_management.PerformanceResponse.prototype.setPerformanceDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.debate_management.PerformanceData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.PerformanceData}
 */
proto.debate_management.PerformanceResponse.prototype.addPerformanceData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.debate_management.PerformanceData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.PerformanceResponse} returns this
 */
proto.debate_management.PerformanceResponse.prototype.clearPerformanceDataList = function() {
  return this.setPerformanceDataList([]);
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
proto.debate_management.PerformanceData.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.PerformanceData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.PerformanceData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.PerformanceData.toObject = function(includeInstance, msg) {
  var f, obj = {
    tournamentDate: (f = msg.getTournamentDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    studentRank: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    averageRank: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.debate_management.PerformanceData}
 */
proto.debate_management.PerformanceData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.PerformanceData;
  return proto.debate_management.PerformanceData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.PerformanceData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.PerformanceData}
 */
proto.debate_management.PerformanceData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTournamentDate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStudentRank(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAverageRank(value);
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
proto.debate_management.PerformanceData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.PerformanceData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.PerformanceData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.PerformanceData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTournamentDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStudentRank();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getAverageRank();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp tournament_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.debate_management.PerformanceData.prototype.getTournamentDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.debate_management.PerformanceData} returns this
*/
proto.debate_management.PerformanceData.prototype.setTournamentDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.debate_management.PerformanceData} returns this
 */
proto.debate_management.PerformanceData.prototype.clearTournamentDate = function() {
  return this.setTournamentDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.debate_management.PerformanceData.prototype.hasTournamentDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double student_rank = 2;
 * @return {number}
 */
proto.debate_management.PerformanceData.prototype.getStudentRank = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.PerformanceData} returns this
 */
proto.debate_management.PerformanceData.prototype.setStudentRank = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double average_rank = 3;
 * @return {number}
 */
proto.debate_management.PerformanceData.prototype.getAverageRank = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.PerformanceData} returns this
 */
proto.debate_management.PerformanceData.prototype.setAverageRank = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
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
proto.debate_management.TournamentRankingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.TournamentRankingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.TournamentRankingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.TournamentRankingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tournamentId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.debate_management.TournamentRankingRequest}
 */
proto.debate_management.TournamentRankingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.TournamentRankingRequest;
  return proto.debate_management.TournamentRankingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.TournamentRankingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.TournamentRankingRequest}
 */
proto.debate_management.TournamentRankingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTournamentId(value);
      break;
    case 2:
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
proto.debate_management.TournamentRankingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.TournamentRankingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.TournamentRankingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.TournamentRankingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTournamentId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 tournament_id = 1;
 * @return {number}
 */
proto.debate_management.TournamentRankingRequest.prototype.getTournamentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TournamentRankingRequest} returns this
 */
proto.debate_management.TournamentRankingRequest.prototype.setTournamentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.debate_management.TournamentRankingRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.TournamentRankingRequest} returns this
 */
proto.debate_management.TournamentRankingRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.TournamentRankingResponse.repeatedFields_ = [1];



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
proto.debate_management.TournamentRankingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.TournamentRankingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.TournamentRankingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.TournamentRankingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rankingsList: jspb.Message.toObjectList(msg.getRankingsList(),
    proto.debate_management.StudentRanking.toObject, includeInstance)
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
 * @return {!proto.debate_management.TournamentRankingResponse}
 */
proto.debate_management.TournamentRankingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.TournamentRankingResponse;
  return proto.debate_management.TournamentRankingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.TournamentRankingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.TournamentRankingResponse}
 */
proto.debate_management.TournamentRankingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.debate_management.StudentRanking;
      reader.readMessage(value,proto.debate_management.StudentRanking.deserializeBinaryFromReader);
      msg.addRankings(value);
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
proto.debate_management.TournamentRankingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.TournamentRankingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.TournamentRankingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.TournamentRankingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRankingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.debate_management.StudentRanking.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StudentRanking rankings = 1;
 * @return {!Array<!proto.debate_management.StudentRanking>}
 */
proto.debate_management.TournamentRankingResponse.prototype.getRankingsList = function() {
  return /** @type{!Array<!proto.debate_management.StudentRanking>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.StudentRanking, 1));
};


/**
 * @param {!Array<!proto.debate_management.StudentRanking>} value
 * @return {!proto.debate_management.TournamentRankingResponse} returns this
*/
proto.debate_management.TournamentRankingResponse.prototype.setRankingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.debate_management.StudentRanking=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.StudentRanking}
 */
proto.debate_management.TournamentRankingResponse.prototype.addRankings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.debate_management.StudentRanking, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.TournamentRankingResponse} returns this
 */
proto.debate_management.TournamentRankingResponse.prototype.clearRankingsList = function() {
  return this.setRankingsList([]);
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
proto.debate_management.StudentRanking.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.StudentRanking.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.StudentRanking} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.StudentRanking.toObject = function(includeInstance, msg) {
  var f, obj = {
    studentId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    studentName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    schoolName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    totalWins: jspb.Message.getFieldWithDefault(msg, 4, 0),
    totalPoints: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    averageRank: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0)
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
 * @return {!proto.debate_management.StudentRanking}
 */
proto.debate_management.StudentRanking.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.StudentRanking;
  return proto.debate_management.StudentRanking.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.StudentRanking} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.StudentRanking}
 */
proto.debate_management.StudentRanking.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStudentId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStudentName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchoolName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalWins(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTotalPoints(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAverageRank(value);
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
proto.debate_management.StudentRanking.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.StudentRanking.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.StudentRanking} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.StudentRanking.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStudentId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getStudentName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSchoolName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotalWins();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getTotalPoints();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getAverageRank();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
};


/**
 * optional int32 student_id = 1;
 * @return {number}
 */
proto.debate_management.StudentRanking.prototype.getStudentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.StudentRanking} returns this
 */
proto.debate_management.StudentRanking.prototype.setStudentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string student_name = 2;
 * @return {string}
 */
proto.debate_management.StudentRanking.prototype.getStudentName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.StudentRanking} returns this
 */
proto.debate_management.StudentRanking.prototype.setStudentName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string school_name = 3;
 * @return {string}
 */
proto.debate_management.StudentRanking.prototype.getSchoolName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.StudentRanking} returns this
 */
proto.debate_management.StudentRanking.prototype.setSchoolName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 total_wins = 4;
 * @return {number}
 */
proto.debate_management.StudentRanking.prototype.getTotalWins = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.StudentRanking} returns this
 */
proto.debate_management.StudentRanking.prototype.setTotalWins = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double total_points = 5;
 * @return {number}
 */
proto.debate_management.StudentRanking.prototype.getTotalPoints = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.StudentRanking} returns this
 */
proto.debate_management.StudentRanking.prototype.setTotalPoints = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double average_rank = 6;
 * @return {number}
 */
proto.debate_management.StudentRanking.prototype.getAverageRank = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.StudentRanking} returns this
 */
proto.debate_management.StudentRanking.prototype.setAverageRank = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


goog.object.extend(exports, proto.debate_management);
