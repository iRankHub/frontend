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
goog.exportSymbol('proto.debate_management.GetJudgeFeedbackRequest', null, global);
goog.exportSymbol('proto.debate_management.GetJudgeFeedbackResponse', null, global);
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
goog.exportSymbol('proto.debate_management.GetStudentFeedbackRequest', null, global);
goog.exportSymbol('proto.debate_management.GetStudentFeedbackResponse', null, global);
goog.exportSymbol('proto.debate_management.GetTeamRequest', null, global);
goog.exportSymbol('proto.debate_management.GetTeamsByTournamentRequest', null, global);
goog.exportSymbol('proto.debate_management.GetTeamsByTournamentResponse', null, global);
goog.exportSymbol('proto.debate_management.GetVolunteerPerformanceRequest', null, global);
goog.exportSymbol('proto.debate_management.GetVolunteerPerformanceResponse', null, global);
goog.exportSymbol('proto.debate_management.GetVolunteerRankingRequest', null, global);
goog.exportSymbol('proto.debate_management.GetVolunteerRankingResponse', null, global);
goog.exportSymbol('proto.debate_management.Judge', null, global);
goog.exportSymbol('proto.debate_management.JudgeFeedbackEntry', null, global);
goog.exportSymbol('proto.debate_management.JudgeInfo', null, global);
goog.exportSymbol('proto.debate_management.MarkFeedbackAsReadRequest', null, global);
goog.exportSymbol('proto.debate_management.MarkFeedbackAsReadResponse', null, global);
goog.exportSymbol('proto.debate_management.OverallRankingRequest', null, global);
goog.exportSymbol('proto.debate_management.OverallRankingResponse', null, global);
goog.exportSymbol('proto.debate_management.OverallSchoolRankingRequest', null, global);
goog.exportSymbol('proto.debate_management.OverallSchoolRankingResponse', null, global);
goog.exportSymbol('proto.debate_management.Pairing', null, global);
goog.exportSymbol('proto.debate_management.PerformanceData', null, global);
goog.exportSymbol('proto.debate_management.PerformanceRequest', null, global);
goog.exportSymbol('proto.debate_management.PerformanceResponse', null, global);
goog.exportSymbol('proto.debate_management.Room', null, global);
goog.exportSymbol('proto.debate_management.RoomInfo', null, global);
goog.exportSymbol('proto.debate_management.RoomStatus', null, global);
goog.exportSymbol('proto.debate_management.RoundInfo', null, global);
goog.exportSymbol('proto.debate_management.RoundStatus', null, global);
goog.exportSymbol('proto.debate_management.SchoolInfo', null, global);
goog.exportSymbol('proto.debate_management.SchoolPerformanceData', null, global);
goog.exportSymbol('proto.debate_management.SchoolPerformanceRequest', null, global);
goog.exportSymbol('proto.debate_management.SchoolPerformanceResponse', null, global);
goog.exportSymbol('proto.debate_management.SchoolRanking', null, global);
goog.exportSymbol('proto.debate_management.Speaker', null, global);
goog.exportSymbol('proto.debate_management.StudentFeedbackEntry', null, global);
goog.exportSymbol('proto.debate_management.StudentInfo', null, global);
goog.exportSymbol('proto.debate_management.StudentRanking', null, global);
goog.exportSymbol('proto.debate_management.StudentTournamentStatsRequest', null, global);
goog.exportSymbol('proto.debate_management.StudentTournamentStatsResponse', null, global);
goog.exportSymbol('proto.debate_management.SubmitJudgeFeedbackRequest', null, global);
goog.exportSymbol('proto.debate_management.SubmitJudgeFeedbackResponse', null, global);
goog.exportSymbol('proto.debate_management.Team', null, global);
goog.exportSymbol('proto.debate_management.TeamRanking', null, global);
goog.exportSymbol('proto.debate_management.TopSchool', null, global);
goog.exportSymbol('proto.debate_management.TopStudent', null, global);
goog.exportSymbol('proto.debate_management.TopVolunteer', null, global);
goog.exportSymbol('proto.debate_management.TournamentRankingRequest', null, global);
goog.exportSymbol('proto.debate_management.TournamentRankingResponse', null, global);
goog.exportSymbol('proto.debate_management.TournamentSchoolRankingRequest', null, global);
goog.exportSymbol('proto.debate_management.TournamentSchoolRankingResponse', null, global);
goog.exportSymbol('proto.debate_management.TournamentTeamsRankingRequest', null, global);
goog.exportSymbol('proto.debate_management.TournamentTeamsRankingResponse', null, global);
goog.exportSymbol('proto.debate_management.TournamentVolunteerRankingRequest', null, global);
goog.exportSymbol('proto.debate_management.TournamentVolunteerRankingResponse', null, global);
goog.exportSymbol('proto.debate_management.UpdateBallotRequest', null, global);
goog.exportSymbol('proto.debate_management.UpdateBallotResponse', null, global);
goog.exportSymbol('proto.debate_management.UpdateJudgeRequest', null, global);
goog.exportSymbol('proto.debate_management.UpdateJudgeResponse', null, global);
goog.exportSymbol('proto.debate_management.UpdatePairingsRequest', null, global);
goog.exportSymbol('proto.debate_management.UpdatePairingsResponse', null, global);
goog.exportSymbol('proto.debate_management.UpdateRoomRequest', null, global);
goog.exportSymbol('proto.debate_management.UpdateRoomResponse', null, global);
goog.exportSymbol('proto.debate_management.UpdateTeamRequest', null, global);
goog.exportSymbol('proto.debate_management.VolunteerInfo', null, global);
goog.exportSymbol('proto.debate_management.VolunteerPerformanceData', null, global);
goog.exportSymbol('proto.debate_management.VolunteerTournamentRank', null, global);
goog.exportSymbol('proto.debate_management.VolunteerTournamentStatsRequest', null, global);
goog.exportSymbol('proto.debate_management.VolunteerTournamentStatsResponse', null, global);
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
proto.debate_management.TournamentTeamsRankingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.TournamentTeamsRankingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.TournamentTeamsRankingRequest.displayName = 'proto.debate_management.TournamentTeamsRankingRequest';
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
proto.debate_management.TournamentTeamsRankingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.TournamentTeamsRankingResponse.repeatedFields_, null);
};
goog.inherits(proto.debate_management.TournamentTeamsRankingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.TournamentTeamsRankingResponse.displayName = 'proto.debate_management.TournamentTeamsRankingResponse';
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
proto.debate_management.TeamRanking = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.TeamRanking.repeatedFields_, null);
};
goog.inherits(proto.debate_management.TeamRanking, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.TeamRanking.displayName = 'proto.debate_management.TeamRanking';
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
proto.debate_management.TournamentSchoolRankingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.TournamentSchoolRankingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.TournamentSchoolRankingRequest.displayName = 'proto.debate_management.TournamentSchoolRankingRequest';
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
proto.debate_management.TournamentSchoolRankingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.TournamentSchoolRankingResponse.repeatedFields_, null);
};
goog.inherits(proto.debate_management.TournamentSchoolRankingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.TournamentSchoolRankingResponse.displayName = 'proto.debate_management.TournamentSchoolRankingResponse';
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
proto.debate_management.SchoolRanking = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.SchoolRanking, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.SchoolRanking.displayName = 'proto.debate_management.SchoolRanking';
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
proto.debate_management.OverallSchoolRankingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.OverallSchoolRankingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.OverallSchoolRankingRequest.displayName = 'proto.debate_management.OverallSchoolRankingRequest';
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
proto.debate_management.OverallSchoolRankingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.OverallSchoolRankingResponse.repeatedFields_, null);
};
goog.inherits(proto.debate_management.OverallSchoolRankingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.OverallSchoolRankingResponse.displayName = 'proto.debate_management.OverallSchoolRankingResponse';
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
proto.debate_management.TopSchool = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.TopSchool, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.TopSchool.displayName = 'proto.debate_management.TopSchool';
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
proto.debate_management.SchoolInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.SchoolInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.SchoolInfo.displayName = 'proto.debate_management.SchoolInfo';
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
proto.debate_management.SchoolPerformanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.SchoolPerformanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.SchoolPerformanceRequest.displayName = 'proto.debate_management.SchoolPerformanceRequest';
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
proto.debate_management.SchoolPerformanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.SchoolPerformanceResponse.repeatedFields_, null);
};
goog.inherits(proto.debate_management.SchoolPerformanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.SchoolPerformanceResponse.displayName = 'proto.debate_management.SchoolPerformanceResponse';
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
proto.debate_management.SchoolPerformanceData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.SchoolPerformanceData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.SchoolPerformanceData.displayName = 'proto.debate_management.SchoolPerformanceData';
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
proto.debate_management.StudentTournamentStatsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.StudentTournamentStatsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.StudentTournamentStatsRequest.displayName = 'proto.debate_management.StudentTournamentStatsRequest';
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
proto.debate_management.StudentTournamentStatsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.StudentTournamentStatsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.StudentTournamentStatsResponse.displayName = 'proto.debate_management.StudentTournamentStatsResponse';
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
proto.debate_management.VolunteerTournamentStatsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.VolunteerTournamentStatsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.VolunteerTournamentStatsRequest.displayName = 'proto.debate_management.VolunteerTournamentStatsRequest';
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
proto.debate_management.VolunteerTournamentStatsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.VolunteerTournamentStatsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.VolunteerTournamentStatsResponse.displayName = 'proto.debate_management.VolunteerTournamentStatsResponse';
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
proto.debate_management.GetStudentFeedbackRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.GetStudentFeedbackRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetStudentFeedbackRequest.displayName = 'proto.debate_management.GetStudentFeedbackRequest';
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
proto.debate_management.StudentFeedbackEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.StudentFeedbackEntry.repeatedFields_, null);
};
goog.inherits(proto.debate_management.StudentFeedbackEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.StudentFeedbackEntry.displayName = 'proto.debate_management.StudentFeedbackEntry';
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
proto.debate_management.JudgeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.JudgeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.JudgeInfo.displayName = 'proto.debate_management.JudgeInfo';
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
proto.debate_management.GetStudentFeedbackResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.GetStudentFeedbackResponse.repeatedFields_, null);
};
goog.inherits(proto.debate_management.GetStudentFeedbackResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetStudentFeedbackResponse.displayName = 'proto.debate_management.GetStudentFeedbackResponse';
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
proto.debate_management.SubmitJudgeFeedbackRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.SubmitJudgeFeedbackRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.SubmitJudgeFeedbackRequest.displayName = 'proto.debate_management.SubmitJudgeFeedbackRequest';
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
proto.debate_management.SubmitJudgeFeedbackResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.SubmitJudgeFeedbackResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.SubmitJudgeFeedbackResponse.displayName = 'proto.debate_management.SubmitJudgeFeedbackResponse';
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
proto.debate_management.GetJudgeFeedbackRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.GetJudgeFeedbackRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetJudgeFeedbackRequest.displayName = 'proto.debate_management.GetJudgeFeedbackRequest';
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
proto.debate_management.JudgeFeedbackEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.JudgeFeedbackEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.JudgeFeedbackEntry.displayName = 'proto.debate_management.JudgeFeedbackEntry';
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
proto.debate_management.GetJudgeFeedbackResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.GetJudgeFeedbackResponse.repeatedFields_, null);
};
goog.inherits(proto.debate_management.GetJudgeFeedbackResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetJudgeFeedbackResponse.displayName = 'proto.debate_management.GetJudgeFeedbackResponse';
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
proto.debate_management.GetVolunteerRankingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.GetVolunteerRankingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetVolunteerRankingRequest.displayName = 'proto.debate_management.GetVolunteerRankingRequest';
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
proto.debate_management.TopVolunteer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.TopVolunteer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.TopVolunteer.displayName = 'proto.debate_management.TopVolunteer';
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
proto.debate_management.VolunteerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.VolunteerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.VolunteerInfo.displayName = 'proto.debate_management.VolunteerInfo';
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
proto.debate_management.GetVolunteerRankingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.GetVolunteerRankingResponse.repeatedFields_, null);
};
goog.inherits(proto.debate_management.GetVolunteerRankingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetVolunteerRankingResponse.displayName = 'proto.debate_management.GetVolunteerRankingResponse';
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
proto.debate_management.GetVolunteerPerformanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.GetVolunteerPerformanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetVolunteerPerformanceRequest.displayName = 'proto.debate_management.GetVolunteerPerformanceRequest';
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
proto.debate_management.VolunteerPerformanceData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.VolunteerPerformanceData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.VolunteerPerformanceData.displayName = 'proto.debate_management.VolunteerPerformanceData';
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
proto.debate_management.GetVolunteerPerformanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.GetVolunteerPerformanceResponse.repeatedFields_, null);
};
goog.inherits(proto.debate_management.GetVolunteerPerformanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.GetVolunteerPerformanceResponse.displayName = 'proto.debate_management.GetVolunteerPerformanceResponse';
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
proto.debate_management.MarkFeedbackAsReadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.MarkFeedbackAsReadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.MarkFeedbackAsReadRequest.displayName = 'proto.debate_management.MarkFeedbackAsReadRequest';
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
proto.debate_management.MarkFeedbackAsReadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.MarkFeedbackAsReadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.MarkFeedbackAsReadResponse.displayName = 'proto.debate_management.MarkFeedbackAsReadResponse';
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
proto.debate_management.TournamentVolunteerRankingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.TournamentVolunteerRankingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.TournamentVolunteerRankingRequest.displayName = 'proto.debate_management.TournamentVolunteerRankingRequest';
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
proto.debate_management.VolunteerTournamentRank = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.debate_management.VolunteerTournamentRank, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.VolunteerTournamentRank.displayName = 'proto.debate_management.VolunteerTournamentRank';
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
proto.debate_management.TournamentVolunteerRankingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.debate_management.TournamentVolunteerRankingResponse.repeatedFields_, null);
};
goog.inherits(proto.debate_management.TournamentVolunteerRankingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.debate_management.TournamentVolunteerRankingResponse.displayName = 'proto.debate_management.TournamentVolunteerRankingResponse';
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
    roomName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isHeadJudge: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsHeadJudge(value);
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
  f = message.getIsHeadJudge();
  if (f) {
    writer.writeBool(
      3,
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


/**
 * optional bool is_head_judge = 3;
 * @return {boolean}
 */
proto.debate_management.RoomInfo.prototype.getIsHeadJudge = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.debate_management.RoomInfo} returns this
 */
proto.debate_management.RoomInfo.prototype.setIsHeadJudge = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
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
    startDate: jspb.Message.getFieldWithDefault(msg, 2, ""),
    endDate: jspb.Message.getFieldWithDefault(msg, 3, ""),
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
      var value = /** @type {string} */ (reader.readString());
      msg.setStartDate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
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
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEndDate();
  if (f.length > 0) {
    writer.writeString(
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
 * optional string start_date = 2;
 * @return {string}
 */
proto.debate_management.PerformanceRequest.prototype.getStartDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.PerformanceRequest} returns this
 */
proto.debate_management.PerformanceRequest.prototype.setStartDate = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string end_date = 3;
 * @return {string}
 */
proto.debate_management.PerformanceRequest.prototype.getEndDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.PerformanceRequest} returns this
 */
proto.debate_management.PerformanceRequest.prototype.setEndDate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
    tournamentDate: jspb.Message.getFieldWithDefault(msg, 1, ""),
    studentTotalPoints: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    studentAveragePoints: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    tournamentRank: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
      var value = /** @type {string} */ (reader.readString());
      msg.setTournamentDate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStudentTotalPoints(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStudentAveragePoints(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTournamentRank(value);
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
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStudentTotalPoints();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getStudentAveragePoints();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getTournamentRank();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional string tournament_date = 1;
 * @return {string}
 */
proto.debate_management.PerformanceData.prototype.getTournamentDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.PerformanceData} returns this
 */
proto.debate_management.PerformanceData.prototype.setTournamentDate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double student_total_points = 2;
 * @return {number}
 */
proto.debate_management.PerformanceData.prototype.getStudentTotalPoints = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.PerformanceData} returns this
 */
proto.debate_management.PerformanceData.prototype.setStudentTotalPoints = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double student_average_points = 3;
 * @return {number}
 */
proto.debate_management.PerformanceData.prototype.getStudentAveragePoints = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.PerformanceData} returns this
 */
proto.debate_management.PerformanceData.prototype.setStudentAveragePoints = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional int32 tournament_rank = 6;
 * @return {number}
 */
proto.debate_management.PerformanceData.prototype.getTournamentRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.PerformanceData} returns this
 */
proto.debate_management.PerformanceData.prototype.setTournamentRank = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
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
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    page: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
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
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
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
 * optional int32 page = 3;
 * @return {number}
 */
proto.debate_management.TournamentRankingRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TournamentRankingRequest} returns this
 */
proto.debate_management.TournamentRankingRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.debate_management.TournamentRankingRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TournamentRankingRequest} returns this
 */
proto.debate_management.TournamentRankingRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.debate_management.TournamentTeamsRankingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.TournamentTeamsRankingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.TournamentTeamsRankingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.TournamentTeamsRankingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tournamentId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    page: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.debate_management.TournamentTeamsRankingRequest}
 */
proto.debate_management.TournamentTeamsRankingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.TournamentTeamsRankingRequest;
  return proto.debate_management.TournamentTeamsRankingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.TournamentTeamsRankingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.TournamentTeamsRankingRequest}
 */
proto.debate_management.TournamentTeamsRankingRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
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
proto.debate_management.TournamentTeamsRankingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.TournamentTeamsRankingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.TournamentTeamsRankingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.TournamentTeamsRankingRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 tournament_id = 1;
 * @return {number}
 */
proto.debate_management.TournamentTeamsRankingRequest.prototype.getTournamentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TournamentTeamsRankingRequest} returns this
 */
proto.debate_management.TournamentTeamsRankingRequest.prototype.setTournamentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.debate_management.TournamentTeamsRankingRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.TournamentTeamsRankingRequest} returns this
 */
proto.debate_management.TournamentTeamsRankingRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page = 3;
 * @return {number}
 */
proto.debate_management.TournamentTeamsRankingRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TournamentTeamsRankingRequest} returns this
 */
proto.debate_management.TournamentTeamsRankingRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.debate_management.TournamentTeamsRankingRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TournamentTeamsRankingRequest} returns this
 */
proto.debate_management.TournamentTeamsRankingRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.TournamentTeamsRankingResponse.repeatedFields_ = [1];



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
proto.debate_management.TournamentTeamsRankingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.TournamentTeamsRankingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.TournamentTeamsRankingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.TournamentTeamsRankingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rankingsList: jspb.Message.toObjectList(msg.getRankingsList(),
    proto.debate_management.TeamRanking.toObject, includeInstance),
    totalCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.debate_management.TournamentTeamsRankingResponse}
 */
proto.debate_management.TournamentTeamsRankingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.TournamentTeamsRankingResponse;
  return proto.debate_management.TournamentTeamsRankingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.TournamentTeamsRankingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.TournamentTeamsRankingResponse}
 */
proto.debate_management.TournamentTeamsRankingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.debate_management.TeamRanking;
      reader.readMessage(value,proto.debate_management.TeamRanking.deserializeBinaryFromReader);
      msg.addRankings(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalCount(value);
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
proto.debate_management.TournamentTeamsRankingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.TournamentTeamsRankingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.TournamentTeamsRankingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.TournamentTeamsRankingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRankingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.debate_management.TeamRanking.serializeBinaryToWriter
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * repeated TeamRanking rankings = 1;
 * @return {!Array<!proto.debate_management.TeamRanking>}
 */
proto.debate_management.TournamentTeamsRankingResponse.prototype.getRankingsList = function() {
  return /** @type{!Array<!proto.debate_management.TeamRanking>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.TeamRanking, 1));
};


/**
 * @param {!Array<!proto.debate_management.TeamRanking>} value
 * @return {!proto.debate_management.TournamentTeamsRankingResponse} returns this
*/
proto.debate_management.TournamentTeamsRankingResponse.prototype.setRankingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.debate_management.TeamRanking=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.TeamRanking}
 */
proto.debate_management.TournamentTeamsRankingResponse.prototype.addRankings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.debate_management.TeamRanking, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.TournamentTeamsRankingResponse} returns this
 */
proto.debate_management.TournamentTeamsRankingResponse.prototype.clearRankingsList = function() {
  return this.setRankingsList([]);
};


/**
 * optional int32 total_count = 2;
 * @return {number}
 */
proto.debate_management.TournamentTeamsRankingResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TournamentTeamsRankingResponse} returns this
 */
proto.debate_management.TournamentTeamsRankingResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.TeamRanking.repeatedFields_ = [3];



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
proto.debate_management.TeamRanking.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.TeamRanking.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.TeamRanking} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.TeamRanking.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    teamName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    schoolNamesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    wins: jspb.Message.getFieldWithDefault(msg, 4, 0),
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
 * @return {!proto.debate_management.TeamRanking}
 */
proto.debate_management.TeamRanking.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.TeamRanking;
  return proto.debate_management.TeamRanking.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.TeamRanking} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.TeamRanking}
 */
proto.debate_management.TeamRanking.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTeamName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addSchoolNames(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWins(value);
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
proto.debate_management.TeamRanking.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.TeamRanking.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.TeamRanking} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.TeamRanking.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTeamName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSchoolNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getWins();
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
 * optional int32 team_id = 1;
 * @return {number}
 */
proto.debate_management.TeamRanking.prototype.getTeamId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TeamRanking} returns this
 */
proto.debate_management.TeamRanking.prototype.setTeamId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string team_name = 2;
 * @return {string}
 */
proto.debate_management.TeamRanking.prototype.getTeamName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.TeamRanking} returns this
 */
proto.debate_management.TeamRanking.prototype.setTeamName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string school_names = 3;
 * @return {!Array<string>}
 */
proto.debate_management.TeamRanking.prototype.getSchoolNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.debate_management.TeamRanking} returns this
 */
proto.debate_management.TeamRanking.prototype.setSchoolNamesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.debate_management.TeamRanking} returns this
 */
proto.debate_management.TeamRanking.prototype.addSchoolNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.TeamRanking} returns this
 */
proto.debate_management.TeamRanking.prototype.clearSchoolNamesList = function() {
  return this.setSchoolNamesList([]);
};


/**
 * optional int32 wins = 4;
 * @return {number}
 */
proto.debate_management.TeamRanking.prototype.getWins = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TeamRanking} returns this
 */
proto.debate_management.TeamRanking.prototype.setWins = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double total_points = 5;
 * @return {number}
 */
proto.debate_management.TeamRanking.prototype.getTotalPoints = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TeamRanking} returns this
 */
proto.debate_management.TeamRanking.prototype.setTotalPoints = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double average_rank = 6;
 * @return {number}
 */
proto.debate_management.TeamRanking.prototype.getAverageRank = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TeamRanking} returns this
 */
proto.debate_management.TeamRanking.prototype.setAverageRank = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
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
proto.debate_management.TournamentSchoolRankingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.TournamentSchoolRankingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.TournamentSchoolRankingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.TournamentSchoolRankingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tournamentId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    page: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.debate_management.TournamentSchoolRankingRequest}
 */
proto.debate_management.TournamentSchoolRankingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.TournamentSchoolRankingRequest;
  return proto.debate_management.TournamentSchoolRankingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.TournamentSchoolRankingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.TournamentSchoolRankingRequest}
 */
proto.debate_management.TournamentSchoolRankingRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
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
proto.debate_management.TournamentSchoolRankingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.TournamentSchoolRankingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.TournamentSchoolRankingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.TournamentSchoolRankingRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 tournament_id = 1;
 * @return {number}
 */
proto.debate_management.TournamentSchoolRankingRequest.prototype.getTournamentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TournamentSchoolRankingRequest} returns this
 */
proto.debate_management.TournamentSchoolRankingRequest.prototype.setTournamentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.debate_management.TournamentSchoolRankingRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.TournamentSchoolRankingRequest} returns this
 */
proto.debate_management.TournamentSchoolRankingRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page = 3;
 * @return {number}
 */
proto.debate_management.TournamentSchoolRankingRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TournamentSchoolRankingRequest} returns this
 */
proto.debate_management.TournamentSchoolRankingRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.debate_management.TournamentSchoolRankingRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TournamentSchoolRankingRequest} returns this
 */
proto.debate_management.TournamentSchoolRankingRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.TournamentSchoolRankingResponse.repeatedFields_ = [1];



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
proto.debate_management.TournamentSchoolRankingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.TournamentSchoolRankingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.TournamentSchoolRankingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.TournamentSchoolRankingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rankingsList: jspb.Message.toObjectList(msg.getRankingsList(),
    proto.debate_management.SchoolRanking.toObject, includeInstance),
    totalCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.debate_management.TournamentSchoolRankingResponse}
 */
proto.debate_management.TournamentSchoolRankingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.TournamentSchoolRankingResponse;
  return proto.debate_management.TournamentSchoolRankingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.TournamentSchoolRankingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.TournamentSchoolRankingResponse}
 */
proto.debate_management.TournamentSchoolRankingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.debate_management.SchoolRanking;
      reader.readMessage(value,proto.debate_management.SchoolRanking.deserializeBinaryFromReader);
      msg.addRankings(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalCount(value);
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
proto.debate_management.TournamentSchoolRankingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.TournamentSchoolRankingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.TournamentSchoolRankingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.TournamentSchoolRankingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRankingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.debate_management.SchoolRanking.serializeBinaryToWriter
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * repeated SchoolRanking rankings = 1;
 * @return {!Array<!proto.debate_management.SchoolRanking>}
 */
proto.debate_management.TournamentSchoolRankingResponse.prototype.getRankingsList = function() {
  return /** @type{!Array<!proto.debate_management.SchoolRanking>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.SchoolRanking, 1));
};


/**
 * @param {!Array<!proto.debate_management.SchoolRanking>} value
 * @return {!proto.debate_management.TournamentSchoolRankingResponse} returns this
*/
proto.debate_management.TournamentSchoolRankingResponse.prototype.setRankingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.debate_management.SchoolRanking=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.SchoolRanking}
 */
proto.debate_management.TournamentSchoolRankingResponse.prototype.addRankings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.debate_management.SchoolRanking, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.TournamentSchoolRankingResponse} returns this
 */
proto.debate_management.TournamentSchoolRankingResponse.prototype.clearRankingsList = function() {
  return this.setRankingsList([]);
};


/**
 * optional int32 total_count = 2;
 * @return {number}
 */
proto.debate_management.TournamentSchoolRankingResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TournamentSchoolRankingResponse} returns this
 */
proto.debate_management.TournamentSchoolRankingResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.debate_management.SchoolRanking.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.SchoolRanking.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.SchoolRanking} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.SchoolRanking.toObject = function(includeInstance, msg) {
  var f, obj = {
    schoolName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    teamCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalWins: jspb.Message.getFieldWithDefault(msg, 3, 0),
    averageRank: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    totalPoints: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
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
 * @return {!proto.debate_management.SchoolRanking}
 */
proto.debate_management.SchoolRanking.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.SchoolRanking;
  return proto.debate_management.SchoolRanking.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.SchoolRanking} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.SchoolRanking}
 */
proto.debate_management.SchoolRanking.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchoolName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTeamCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalWins(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAverageRank(value);
      break;
    case 5:
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
proto.debate_management.SchoolRanking.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.SchoolRanking.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.SchoolRanking} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.SchoolRanking.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchoolName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTeamCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTotalWins();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getAverageRank();
  if (f !== 0.0) {
    writer.writeDouble(
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
};


/**
 * optional string school_name = 1;
 * @return {string}
 */
proto.debate_management.SchoolRanking.prototype.getSchoolName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.SchoolRanking} returns this
 */
proto.debate_management.SchoolRanking.prototype.setSchoolName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 team_count = 2;
 * @return {number}
 */
proto.debate_management.SchoolRanking.prototype.getTeamCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.SchoolRanking} returns this
 */
proto.debate_management.SchoolRanking.prototype.setTeamCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 total_wins = 3;
 * @return {number}
 */
proto.debate_management.SchoolRanking.prototype.getTotalWins = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.SchoolRanking} returns this
 */
proto.debate_management.SchoolRanking.prototype.setTotalWins = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional double average_rank = 4;
 * @return {number}
 */
proto.debate_management.SchoolRanking.prototype.getAverageRank = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.SchoolRanking} returns this
 */
proto.debate_management.SchoolRanking.prototype.setAverageRank = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double total_points = 5;
 * @return {number}
 */
proto.debate_management.SchoolRanking.prototype.getTotalPoints = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.SchoolRanking} returns this
 */
proto.debate_management.SchoolRanking.prototype.setTotalPoints = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
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
proto.debate_management.OverallSchoolRankingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.OverallSchoolRankingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.OverallSchoolRankingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.OverallSchoolRankingRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.debate_management.OverallSchoolRankingRequest}
 */
proto.debate_management.OverallSchoolRankingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.OverallSchoolRankingRequest;
  return proto.debate_management.OverallSchoolRankingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.OverallSchoolRankingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.OverallSchoolRankingRequest}
 */
proto.debate_management.OverallSchoolRankingRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.debate_management.OverallSchoolRankingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.OverallSchoolRankingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.OverallSchoolRankingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.OverallSchoolRankingRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.debate_management.OverallSchoolRankingRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.OverallSchoolRankingRequest} returns this
 */
proto.debate_management.OverallSchoolRankingRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.debate_management.OverallSchoolRankingRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.OverallSchoolRankingRequest} returns this
 */
proto.debate_management.OverallSchoolRankingRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.OverallSchoolRankingResponse.repeatedFields_ = [4];



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
proto.debate_management.OverallSchoolRankingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.OverallSchoolRankingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.OverallSchoolRankingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.OverallSchoolRankingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    schoolRank: jspb.Message.getFieldWithDefault(msg, 1, 0),
    totalSchools: jspb.Message.getFieldWithDefault(msg, 2, 0),
    rankChange: jspb.Message.getFieldWithDefault(msg, 3, 0),
    topSchoolsList: jspb.Message.toObjectList(msg.getTopSchoolsList(),
    proto.debate_management.TopSchool.toObject, includeInstance),
    schoolInfo: (f = msg.getSchoolInfo()) && proto.debate_management.SchoolInfo.toObject(includeInstance, f)
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
 * @return {!proto.debate_management.OverallSchoolRankingResponse}
 */
proto.debate_management.OverallSchoolRankingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.OverallSchoolRankingResponse;
  return proto.debate_management.OverallSchoolRankingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.OverallSchoolRankingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.OverallSchoolRankingResponse}
 */
proto.debate_management.OverallSchoolRankingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSchoolRank(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalSchools(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRankChange(value);
      break;
    case 4:
      var value = new proto.debate_management.TopSchool;
      reader.readMessage(value,proto.debate_management.TopSchool.deserializeBinaryFromReader);
      msg.addTopSchools(value);
      break;
    case 5:
      var value = new proto.debate_management.SchoolInfo;
      reader.readMessage(value,proto.debate_management.SchoolInfo.deserializeBinaryFromReader);
      msg.setSchoolInfo(value);
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
proto.debate_management.OverallSchoolRankingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.OverallSchoolRankingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.OverallSchoolRankingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.OverallSchoolRankingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchoolRank();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTotalSchools();
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
  f = message.getTopSchoolsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.debate_management.TopSchool.serializeBinaryToWriter
    );
  }
  f = message.getSchoolInfo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.debate_management.SchoolInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 school_rank = 1;
 * @return {number}
 */
proto.debate_management.OverallSchoolRankingResponse.prototype.getSchoolRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.OverallSchoolRankingResponse} returns this
 */
proto.debate_management.OverallSchoolRankingResponse.prototype.setSchoolRank = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 total_schools = 2;
 * @return {number}
 */
proto.debate_management.OverallSchoolRankingResponse.prototype.getTotalSchools = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.OverallSchoolRankingResponse} returns this
 */
proto.debate_management.OverallSchoolRankingResponse.prototype.setTotalSchools = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 rank_change = 3;
 * @return {number}
 */
proto.debate_management.OverallSchoolRankingResponse.prototype.getRankChange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.OverallSchoolRankingResponse} returns this
 */
proto.debate_management.OverallSchoolRankingResponse.prototype.setRankChange = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated TopSchool top_schools = 4;
 * @return {!Array<!proto.debate_management.TopSchool>}
 */
proto.debate_management.OverallSchoolRankingResponse.prototype.getTopSchoolsList = function() {
  return /** @type{!Array<!proto.debate_management.TopSchool>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.TopSchool, 4));
};


/**
 * @param {!Array<!proto.debate_management.TopSchool>} value
 * @return {!proto.debate_management.OverallSchoolRankingResponse} returns this
*/
proto.debate_management.OverallSchoolRankingResponse.prototype.setTopSchoolsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.debate_management.TopSchool=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.TopSchool}
 */
proto.debate_management.OverallSchoolRankingResponse.prototype.addTopSchools = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.debate_management.TopSchool, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.OverallSchoolRankingResponse} returns this
 */
proto.debate_management.OverallSchoolRankingResponse.prototype.clearTopSchoolsList = function() {
  return this.setTopSchoolsList([]);
};


/**
 * optional SchoolInfo school_info = 5;
 * @return {?proto.debate_management.SchoolInfo}
 */
proto.debate_management.OverallSchoolRankingResponse.prototype.getSchoolInfo = function() {
  return /** @type{?proto.debate_management.SchoolInfo} */ (
    jspb.Message.getWrapperField(this, proto.debate_management.SchoolInfo, 5));
};


/**
 * @param {?proto.debate_management.SchoolInfo|undefined} value
 * @return {!proto.debate_management.OverallSchoolRankingResponse} returns this
*/
proto.debate_management.OverallSchoolRankingResponse.prototype.setSchoolInfo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.debate_management.OverallSchoolRankingResponse} returns this
 */
proto.debate_management.OverallSchoolRankingResponse.prototype.clearSchoolInfo = function() {
  return this.setSchoolInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.debate_management.OverallSchoolRankingResponse.prototype.hasSchoolInfo = function() {
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
proto.debate_management.TopSchool.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.TopSchool.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.TopSchool} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.TopSchool.toObject = function(includeInstance, msg) {
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
 * @return {!proto.debate_management.TopSchool}
 */
proto.debate_management.TopSchool.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.TopSchool;
  return proto.debate_management.TopSchool.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.TopSchool} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.TopSchool}
 */
proto.debate_management.TopSchool.deserializeBinaryFromReader = function(msg, reader) {
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
proto.debate_management.TopSchool.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.TopSchool.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.TopSchool} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.TopSchool.serializeBinaryToWriter = function(message, writer) {
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
proto.debate_management.TopSchool.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TopSchool} returns this
 */
proto.debate_management.TopSchool.prototype.setRank = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.debate_management.TopSchool.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.TopSchool} returns this
 */
proto.debate_management.TopSchool.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double total_points = 3;
 * @return {number}
 */
proto.debate_management.TopSchool.prototype.getTotalPoints = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TopSchool} returns this
 */
proto.debate_management.TopSchool.prototype.setTotalPoints = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional int32 rank_change = 4;
 * @return {number}
 */
proto.debate_management.TopSchool.prototype.getRankChange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TopSchool} returns this
 */
proto.debate_management.TopSchool.prototype.setRankChange = function(value) {
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
proto.debate_management.SchoolInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.SchoolInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.SchoolInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.SchoolInfo.toObject = function(includeInstance, msg) {
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
 * @return {!proto.debate_management.SchoolInfo}
 */
proto.debate_management.SchoolInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.SchoolInfo;
  return proto.debate_management.SchoolInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.SchoolInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.SchoolInfo}
 */
proto.debate_management.SchoolInfo.deserializeBinaryFromReader = function(msg, reader) {
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
proto.debate_management.SchoolInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.SchoolInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.SchoolInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.SchoolInfo.serializeBinaryToWriter = function(message, writer) {
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
proto.debate_management.SchoolInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.SchoolInfo} returns this
 */
proto.debate_management.SchoolInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double total_points = 2;
 * @return {number}
 */
proto.debate_management.SchoolInfo.prototype.getTotalPoints = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.SchoolInfo} returns this
 */
proto.debate_management.SchoolInfo.prototype.setTotalPoints = function(value) {
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
proto.debate_management.SchoolPerformanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.SchoolPerformanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.SchoolPerformanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.SchoolPerformanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startDate: jspb.Message.getFieldWithDefault(msg, 2, ""),
    endDate: jspb.Message.getFieldWithDefault(msg, 3, ""),
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
 * @return {!proto.debate_management.SchoolPerformanceRequest}
 */
proto.debate_management.SchoolPerformanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.SchoolPerformanceRequest;
  return proto.debate_management.SchoolPerformanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.SchoolPerformanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.SchoolPerformanceRequest}
 */
proto.debate_management.SchoolPerformanceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setStartDate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
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
proto.debate_management.SchoolPerformanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.SchoolPerformanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.SchoolPerformanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.SchoolPerformanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getStartDate();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEndDate();
  if (f.length > 0) {
    writer.writeString(
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
 * optional int32 user_id = 1;
 * @return {number}
 */
proto.debate_management.SchoolPerformanceRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.SchoolPerformanceRequest} returns this
 */
proto.debate_management.SchoolPerformanceRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string start_date = 2;
 * @return {string}
 */
proto.debate_management.SchoolPerformanceRequest.prototype.getStartDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.SchoolPerformanceRequest} returns this
 */
proto.debate_management.SchoolPerformanceRequest.prototype.setStartDate = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string end_date = 3;
 * @return {string}
 */
proto.debate_management.SchoolPerformanceRequest.prototype.getEndDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.SchoolPerformanceRequest} returns this
 */
proto.debate_management.SchoolPerformanceRequest.prototype.setEndDate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string token = 4;
 * @return {string}
 */
proto.debate_management.SchoolPerformanceRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.SchoolPerformanceRequest} returns this
 */
proto.debate_management.SchoolPerformanceRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.SchoolPerformanceResponse.repeatedFields_ = [1];



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
proto.debate_management.SchoolPerformanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.SchoolPerformanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.SchoolPerformanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.SchoolPerformanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    performanceDataList: jspb.Message.toObjectList(msg.getPerformanceDataList(),
    proto.debate_management.SchoolPerformanceData.toObject, includeInstance)
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
 * @return {!proto.debate_management.SchoolPerformanceResponse}
 */
proto.debate_management.SchoolPerformanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.SchoolPerformanceResponse;
  return proto.debate_management.SchoolPerformanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.SchoolPerformanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.SchoolPerformanceResponse}
 */
proto.debate_management.SchoolPerformanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.debate_management.SchoolPerformanceData;
      reader.readMessage(value,proto.debate_management.SchoolPerformanceData.deserializeBinaryFromReader);
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
proto.debate_management.SchoolPerformanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.SchoolPerformanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.SchoolPerformanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.SchoolPerformanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPerformanceDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.debate_management.SchoolPerformanceData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SchoolPerformanceData performance_data = 1;
 * @return {!Array<!proto.debate_management.SchoolPerformanceData>}
 */
proto.debate_management.SchoolPerformanceResponse.prototype.getPerformanceDataList = function() {
  return /** @type{!Array<!proto.debate_management.SchoolPerformanceData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.SchoolPerformanceData, 1));
};


/**
 * @param {!Array<!proto.debate_management.SchoolPerformanceData>} value
 * @return {!proto.debate_management.SchoolPerformanceResponse} returns this
*/
proto.debate_management.SchoolPerformanceResponse.prototype.setPerformanceDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.debate_management.SchoolPerformanceData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.SchoolPerformanceData}
 */
proto.debate_management.SchoolPerformanceResponse.prototype.addPerformanceData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.debate_management.SchoolPerformanceData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.SchoolPerformanceResponse} returns this
 */
proto.debate_management.SchoolPerformanceResponse.prototype.clearPerformanceDataList = function() {
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
proto.debate_management.SchoolPerformanceData.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.SchoolPerformanceData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.SchoolPerformanceData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.SchoolPerformanceData.toObject = function(includeInstance, msg) {
  var f, obj = {
    tournamentDate: jspb.Message.getFieldWithDefault(msg, 1, ""),
    schoolTotalPoints: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    schoolAveragePoints: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    tournamentRank: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.debate_management.SchoolPerformanceData}
 */
proto.debate_management.SchoolPerformanceData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.SchoolPerformanceData;
  return proto.debate_management.SchoolPerformanceData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.SchoolPerformanceData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.SchoolPerformanceData}
 */
proto.debate_management.SchoolPerformanceData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTournamentDate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSchoolTotalPoints(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSchoolAveragePoints(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTournamentRank(value);
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
proto.debate_management.SchoolPerformanceData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.SchoolPerformanceData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.SchoolPerformanceData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.SchoolPerformanceData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTournamentDate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSchoolTotalPoints();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getSchoolAveragePoints();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getTournamentRank();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string tournament_date = 1;
 * @return {string}
 */
proto.debate_management.SchoolPerformanceData.prototype.getTournamentDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.SchoolPerformanceData} returns this
 */
proto.debate_management.SchoolPerformanceData.prototype.setTournamentDate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double school_total_points = 2;
 * @return {number}
 */
proto.debate_management.SchoolPerformanceData.prototype.getSchoolTotalPoints = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.SchoolPerformanceData} returns this
 */
proto.debate_management.SchoolPerformanceData.prototype.setSchoolTotalPoints = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double school_average_points = 3;
 * @return {number}
 */
proto.debate_management.SchoolPerformanceData.prototype.getSchoolAveragePoints = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.SchoolPerformanceData} returns this
 */
proto.debate_management.SchoolPerformanceData.prototype.setSchoolAveragePoints = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional int32 tournament_rank = 4;
 * @return {number}
 */
proto.debate_management.SchoolPerformanceData.prototype.getTournamentRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.SchoolPerformanceData} returns this
 */
proto.debate_management.SchoolPerformanceData.prototype.setTournamentRank = function(value) {
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
proto.debate_management.StudentTournamentStatsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.StudentTournamentStatsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.StudentTournamentStatsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.StudentTournamentStatsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    studentId: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.debate_management.StudentTournamentStatsRequest}
 */
proto.debate_management.StudentTournamentStatsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.StudentTournamentStatsRequest;
  return proto.debate_management.StudentTournamentStatsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.StudentTournamentStatsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.StudentTournamentStatsRequest}
 */
proto.debate_management.StudentTournamentStatsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.debate_management.StudentTournamentStatsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.StudentTournamentStatsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.StudentTournamentStatsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.StudentTournamentStatsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStudentId();
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
 * optional int32 student_id = 1;
 * @return {number}
 */
proto.debate_management.StudentTournamentStatsRequest.prototype.getStudentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.StudentTournamentStatsRequest} returns this
 */
proto.debate_management.StudentTournamentStatsRequest.prototype.setStudentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.debate_management.StudentTournamentStatsRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.StudentTournamentStatsRequest} returns this
 */
proto.debate_management.StudentTournamentStatsRequest.prototype.setToken = function(value) {
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
proto.debate_management.StudentTournamentStatsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.StudentTournamentStatsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.StudentTournamentStatsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.StudentTournamentStatsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalTournaments: jspb.Message.getFieldWithDefault(msg, 1, 0),
    totalTournamentsChange: jspb.Message.getFieldWithDefault(msg, 2, ""),
    attendedTournaments: jspb.Message.getFieldWithDefault(msg, 3, 0),
    attendedTournamentsChange: jspb.Message.getFieldWithDefault(msg, 4, ""),
    upcomingTournaments: jspb.Message.getFieldWithDefault(msg, 5, 0),
    upcomingTournamentsChange: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.debate_management.StudentTournamentStatsResponse}
 */
proto.debate_management.StudentTournamentStatsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.StudentTournamentStatsResponse;
  return proto.debate_management.StudentTournamentStatsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.StudentTournamentStatsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.StudentTournamentStatsResponse}
 */
proto.debate_management.StudentTournamentStatsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalTournaments(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotalTournamentsChange(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAttendedTournaments(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttendedTournamentsChange(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUpcomingTournaments(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpcomingTournamentsChange(value);
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
proto.debate_management.StudentTournamentStatsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.StudentTournamentStatsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.StudentTournamentStatsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.StudentTournamentStatsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalTournaments();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTotalTournamentsChange();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAttendedTournaments();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getAttendedTournamentsChange();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUpcomingTournaments();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getUpcomingTournamentsChange();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional int32 total_tournaments = 1;
 * @return {number}
 */
proto.debate_management.StudentTournamentStatsResponse.prototype.getTotalTournaments = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.StudentTournamentStatsResponse} returns this
 */
proto.debate_management.StudentTournamentStatsResponse.prototype.setTotalTournaments = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string total_tournaments_change = 2;
 * @return {string}
 */
proto.debate_management.StudentTournamentStatsResponse.prototype.getTotalTournamentsChange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.StudentTournamentStatsResponse} returns this
 */
proto.debate_management.StudentTournamentStatsResponse.prototype.setTotalTournamentsChange = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 attended_tournaments = 3;
 * @return {number}
 */
proto.debate_management.StudentTournamentStatsResponse.prototype.getAttendedTournaments = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.StudentTournamentStatsResponse} returns this
 */
proto.debate_management.StudentTournamentStatsResponse.prototype.setAttendedTournaments = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string attended_tournaments_change = 4;
 * @return {string}
 */
proto.debate_management.StudentTournamentStatsResponse.prototype.getAttendedTournamentsChange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.StudentTournamentStatsResponse} returns this
 */
proto.debate_management.StudentTournamentStatsResponse.prototype.setAttendedTournamentsChange = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 upcoming_tournaments = 5;
 * @return {number}
 */
proto.debate_management.StudentTournamentStatsResponse.prototype.getUpcomingTournaments = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.StudentTournamentStatsResponse} returns this
 */
proto.debate_management.StudentTournamentStatsResponse.prototype.setUpcomingTournaments = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string upcoming_tournaments_change = 6;
 * @return {string}
 */
proto.debate_management.StudentTournamentStatsResponse.prototype.getUpcomingTournamentsChange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.StudentTournamentStatsResponse} returns this
 */
proto.debate_management.StudentTournamentStatsResponse.prototype.setUpcomingTournamentsChange = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
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
proto.debate_management.VolunteerTournamentStatsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.VolunteerTournamentStatsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.VolunteerTournamentStatsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.VolunteerTournamentStatsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.debate_management.VolunteerTournamentStatsRequest}
 */
proto.debate_management.VolunteerTournamentStatsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.VolunteerTournamentStatsRequest;
  return proto.debate_management.VolunteerTournamentStatsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.VolunteerTournamentStatsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.VolunteerTournamentStatsRequest}
 */
proto.debate_management.VolunteerTournamentStatsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.debate_management.VolunteerTournamentStatsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.VolunteerTournamentStatsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.VolunteerTournamentStatsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.VolunteerTournamentStatsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.debate_management.VolunteerTournamentStatsRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.VolunteerTournamentStatsRequest} returns this
 */
proto.debate_management.VolunteerTournamentStatsRequest.prototype.setToken = function(value) {
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
proto.debate_management.VolunteerTournamentStatsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.VolunteerTournamentStatsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.VolunteerTournamentStatsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.VolunteerTournamentStatsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalRoundsJudged: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roundsJudgedChange: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tournamentsAttended: jspb.Message.getFieldWithDefault(msg, 3, 0),
    tournamentsAttendedChange: jspb.Message.getFieldWithDefault(msg, 4, ""),
    upcomingTournaments: jspb.Message.getFieldWithDefault(msg, 5, 0),
    upcomingTournamentsChange: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.debate_management.VolunteerTournamentStatsResponse}
 */
proto.debate_management.VolunteerTournamentStatsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.VolunteerTournamentStatsResponse;
  return proto.debate_management.VolunteerTournamentStatsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.VolunteerTournamentStatsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.VolunteerTournamentStatsResponse}
 */
proto.debate_management.VolunteerTournamentStatsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalRoundsJudged(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoundsJudgedChange(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTournamentsAttended(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTournamentsAttendedChange(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUpcomingTournaments(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpcomingTournamentsChange(value);
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
proto.debate_management.VolunteerTournamentStatsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.VolunteerTournamentStatsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.VolunteerTournamentStatsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.VolunteerTournamentStatsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalRoundsJudged();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRoundsJudgedChange();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTournamentsAttended();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTournamentsAttendedChange();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUpcomingTournaments();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getUpcomingTournamentsChange();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional int32 total_rounds_judged = 1;
 * @return {number}
 */
proto.debate_management.VolunteerTournamentStatsResponse.prototype.getTotalRoundsJudged = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.VolunteerTournamentStatsResponse} returns this
 */
proto.debate_management.VolunteerTournamentStatsResponse.prototype.setTotalRoundsJudged = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string rounds_judged_change = 2;
 * @return {string}
 */
proto.debate_management.VolunteerTournamentStatsResponse.prototype.getRoundsJudgedChange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.VolunteerTournamentStatsResponse} returns this
 */
proto.debate_management.VolunteerTournamentStatsResponse.prototype.setRoundsJudgedChange = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 tournaments_attended = 3;
 * @return {number}
 */
proto.debate_management.VolunteerTournamentStatsResponse.prototype.getTournamentsAttended = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.VolunteerTournamentStatsResponse} returns this
 */
proto.debate_management.VolunteerTournamentStatsResponse.prototype.setTournamentsAttended = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string tournaments_attended_change = 4;
 * @return {string}
 */
proto.debate_management.VolunteerTournamentStatsResponse.prototype.getTournamentsAttendedChange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.VolunteerTournamentStatsResponse} returns this
 */
proto.debate_management.VolunteerTournamentStatsResponse.prototype.setTournamentsAttendedChange = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 upcoming_tournaments = 5;
 * @return {number}
 */
proto.debate_management.VolunteerTournamentStatsResponse.prototype.getUpcomingTournaments = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.VolunteerTournamentStatsResponse} returns this
 */
proto.debate_management.VolunteerTournamentStatsResponse.prototype.setUpcomingTournaments = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string upcoming_tournaments_change = 6;
 * @return {string}
 */
proto.debate_management.VolunteerTournamentStatsResponse.prototype.getUpcomingTournamentsChange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.VolunteerTournamentStatsResponse} returns this
 */
proto.debate_management.VolunteerTournamentStatsResponse.prototype.setUpcomingTournamentsChange = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
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
proto.debate_management.GetStudentFeedbackRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetStudentFeedbackRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetStudentFeedbackRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetStudentFeedbackRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tournamentId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    page: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.debate_management.GetStudentFeedbackRequest}
 */
proto.debate_management.GetStudentFeedbackRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetStudentFeedbackRequest;
  return proto.debate_management.GetStudentFeedbackRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetStudentFeedbackRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetStudentFeedbackRequest}
 */
proto.debate_management.GetStudentFeedbackRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
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
proto.debate_management.GetStudentFeedbackRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetStudentFeedbackRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetStudentFeedbackRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetStudentFeedbackRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 tournament_id = 1;
 * @return {number}
 */
proto.debate_management.GetStudentFeedbackRequest.prototype.getTournamentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetStudentFeedbackRequest} returns this
 */
proto.debate_management.GetStudentFeedbackRequest.prototype.setTournamentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.debate_management.GetStudentFeedbackRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.GetStudentFeedbackRequest} returns this
 */
proto.debate_management.GetStudentFeedbackRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page = 3;
 * @return {number}
 */
proto.debate_management.GetStudentFeedbackRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetStudentFeedbackRequest} returns this
 */
proto.debate_management.GetStudentFeedbackRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.debate_management.GetStudentFeedbackRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetStudentFeedbackRequest} returns this
 */
proto.debate_management.GetStudentFeedbackRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.StudentFeedbackEntry.repeatedFields_ = [11];



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
proto.debate_management.StudentFeedbackEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.StudentFeedbackEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.StudentFeedbackEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.StudentFeedbackEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    roundNumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isEliminationRound: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    speakerPoints: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    feedback: jspb.Message.getFieldWithDefault(msg, 4, ""),
    isRead: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    headJudgeName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    roomName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    opponentTeamName: jspb.Message.getFieldWithDefault(msg, 8, ""),
    studentTeamName: jspb.Message.getFieldWithDefault(msg, 9, ""),
    debateId: jspb.Message.getFieldWithDefault(msg, 10, 0),
    judgesList: jspb.Message.toObjectList(msg.getJudgesList(),
    proto.debate_management.JudgeInfo.toObject, includeInstance),
    ballotId: jspb.Message.getFieldWithDefault(msg, 12, 0)
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
 * @return {!proto.debate_management.StudentFeedbackEntry}
 */
proto.debate_management.StudentFeedbackEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.StudentFeedbackEntry;
  return proto.debate_management.StudentFeedbackEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.StudentFeedbackEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.StudentFeedbackEntry}
 */
proto.debate_management.StudentFeedbackEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoundNumber(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEliminationRound(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSpeakerPoints(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeedback(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsRead(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeadJudgeName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOpponentTeamName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setStudentTeamName(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDebateId(value);
      break;
    case 11:
      var value = new proto.debate_management.JudgeInfo;
      reader.readMessage(value,proto.debate_management.JudgeInfo.deserializeBinaryFromReader);
      msg.addJudges(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBallotId(value);
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
proto.debate_management.StudentFeedbackEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.StudentFeedbackEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.StudentFeedbackEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.StudentFeedbackEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoundNumber();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getIsEliminationRound();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getSpeakerPoints();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getFeedback();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIsRead();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getHeadJudgeName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRoomName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getOpponentTeamName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStudentTeamName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDebateId();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getJudgesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.debate_management.JudgeInfo.serializeBinaryToWriter
    );
  }
  f = message.getBallotId();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
};


/**
 * optional int32 round_number = 1;
 * @return {number}
 */
proto.debate_management.StudentFeedbackEntry.prototype.getRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.StudentFeedbackEntry} returns this
 */
proto.debate_management.StudentFeedbackEntry.prototype.setRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool is_elimination_round = 2;
 * @return {boolean}
 */
proto.debate_management.StudentFeedbackEntry.prototype.getIsEliminationRound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.debate_management.StudentFeedbackEntry} returns this
 */
proto.debate_management.StudentFeedbackEntry.prototype.setIsEliminationRound = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional double speaker_points = 3;
 * @return {number}
 */
proto.debate_management.StudentFeedbackEntry.prototype.getSpeakerPoints = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.StudentFeedbackEntry} returns this
 */
proto.debate_management.StudentFeedbackEntry.prototype.setSpeakerPoints = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string feedback = 4;
 * @return {string}
 */
proto.debate_management.StudentFeedbackEntry.prototype.getFeedback = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.StudentFeedbackEntry} returns this
 */
proto.debate_management.StudentFeedbackEntry.prototype.setFeedback = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool is_read = 5;
 * @return {boolean}
 */
proto.debate_management.StudentFeedbackEntry.prototype.getIsRead = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.debate_management.StudentFeedbackEntry} returns this
 */
proto.debate_management.StudentFeedbackEntry.prototype.setIsRead = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string head_judge_name = 6;
 * @return {string}
 */
proto.debate_management.StudentFeedbackEntry.prototype.getHeadJudgeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.StudentFeedbackEntry} returns this
 */
proto.debate_management.StudentFeedbackEntry.prototype.setHeadJudgeName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string room_name = 7;
 * @return {string}
 */
proto.debate_management.StudentFeedbackEntry.prototype.getRoomName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.StudentFeedbackEntry} returns this
 */
proto.debate_management.StudentFeedbackEntry.prototype.setRoomName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string opponent_team_name = 8;
 * @return {string}
 */
proto.debate_management.StudentFeedbackEntry.prototype.getOpponentTeamName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.StudentFeedbackEntry} returns this
 */
proto.debate_management.StudentFeedbackEntry.prototype.setOpponentTeamName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string student_team_name = 9;
 * @return {string}
 */
proto.debate_management.StudentFeedbackEntry.prototype.getStudentTeamName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.StudentFeedbackEntry} returns this
 */
proto.debate_management.StudentFeedbackEntry.prototype.setStudentTeamName = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 debate_id = 10;
 * @return {number}
 */
proto.debate_management.StudentFeedbackEntry.prototype.getDebateId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.StudentFeedbackEntry} returns this
 */
proto.debate_management.StudentFeedbackEntry.prototype.setDebateId = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * repeated JudgeInfo judges = 11;
 * @return {!Array<!proto.debate_management.JudgeInfo>}
 */
proto.debate_management.StudentFeedbackEntry.prototype.getJudgesList = function() {
  return /** @type{!Array<!proto.debate_management.JudgeInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.JudgeInfo, 11));
};


/**
 * @param {!Array<!proto.debate_management.JudgeInfo>} value
 * @return {!proto.debate_management.StudentFeedbackEntry} returns this
*/
proto.debate_management.StudentFeedbackEntry.prototype.setJudgesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.debate_management.JudgeInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.JudgeInfo}
 */
proto.debate_management.StudentFeedbackEntry.prototype.addJudges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.debate_management.JudgeInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.StudentFeedbackEntry} returns this
 */
proto.debate_management.StudentFeedbackEntry.prototype.clearJudgesList = function() {
  return this.setJudgesList([]);
};


/**
 * optional int32 ballot_id = 12;
 * @return {number}
 */
proto.debate_management.StudentFeedbackEntry.prototype.getBallotId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.StudentFeedbackEntry} returns this
 */
proto.debate_management.StudentFeedbackEntry.prototype.setBallotId = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
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
proto.debate_management.JudgeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.JudgeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.JudgeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.JudgeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    judgeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    judgeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isHeadJudge: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.debate_management.JudgeInfo}
 */
proto.debate_management.JudgeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.JudgeInfo;
  return proto.debate_management.JudgeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.JudgeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.JudgeInfo}
 */
proto.debate_management.JudgeInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setJudgeName(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsHeadJudge(value);
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
proto.debate_management.JudgeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.JudgeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.JudgeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.JudgeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJudgeId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getJudgeName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsHeadJudge();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional int32 judge_id = 1;
 * @return {number}
 */
proto.debate_management.JudgeInfo.prototype.getJudgeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.JudgeInfo} returns this
 */
proto.debate_management.JudgeInfo.prototype.setJudgeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string judge_name = 2;
 * @return {string}
 */
proto.debate_management.JudgeInfo.prototype.getJudgeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.JudgeInfo} returns this
 */
proto.debate_management.JudgeInfo.prototype.setJudgeName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_head_judge = 3;
 * @return {boolean}
 */
proto.debate_management.JudgeInfo.prototype.getIsHeadJudge = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.debate_management.JudgeInfo} returns this
 */
proto.debate_management.JudgeInfo.prototype.setIsHeadJudge = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.GetStudentFeedbackResponse.repeatedFields_ = [1];



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
proto.debate_management.GetStudentFeedbackResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetStudentFeedbackResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetStudentFeedbackResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetStudentFeedbackResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    feedbackEntriesList: jspb.Message.toObjectList(msg.getFeedbackEntriesList(),
    proto.debate_management.StudentFeedbackEntry.toObject, includeInstance),
    totalCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.debate_management.GetStudentFeedbackResponse}
 */
proto.debate_management.GetStudentFeedbackResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetStudentFeedbackResponse;
  return proto.debate_management.GetStudentFeedbackResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetStudentFeedbackResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetStudentFeedbackResponse}
 */
proto.debate_management.GetStudentFeedbackResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.debate_management.StudentFeedbackEntry;
      reader.readMessage(value,proto.debate_management.StudentFeedbackEntry.deserializeBinaryFromReader);
      msg.addFeedbackEntries(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalCount(value);
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
proto.debate_management.GetStudentFeedbackResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetStudentFeedbackResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetStudentFeedbackResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetStudentFeedbackResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFeedbackEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.debate_management.StudentFeedbackEntry.serializeBinaryToWriter
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * repeated StudentFeedbackEntry feedback_entries = 1;
 * @return {!Array<!proto.debate_management.StudentFeedbackEntry>}
 */
proto.debate_management.GetStudentFeedbackResponse.prototype.getFeedbackEntriesList = function() {
  return /** @type{!Array<!proto.debate_management.StudentFeedbackEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.StudentFeedbackEntry, 1));
};


/**
 * @param {!Array<!proto.debate_management.StudentFeedbackEntry>} value
 * @return {!proto.debate_management.GetStudentFeedbackResponse} returns this
*/
proto.debate_management.GetStudentFeedbackResponse.prototype.setFeedbackEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.debate_management.StudentFeedbackEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.StudentFeedbackEntry}
 */
proto.debate_management.GetStudentFeedbackResponse.prototype.addFeedbackEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.debate_management.StudentFeedbackEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.GetStudentFeedbackResponse} returns this
 */
proto.debate_management.GetStudentFeedbackResponse.prototype.clearFeedbackEntriesList = function() {
  return this.setFeedbackEntriesList([]);
};


/**
 * optional int32 total_count = 2;
 * @return {number}
 */
proto.debate_management.GetStudentFeedbackResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetStudentFeedbackResponse} returns this
 */
proto.debate_management.GetStudentFeedbackResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.debate_management.SubmitJudgeFeedbackRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.SubmitJudgeFeedbackRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.SubmitJudgeFeedbackRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.SubmitJudgeFeedbackRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    judgeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    debateId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    clarityRating: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    constructivenessRating: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    timelinessRating: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    fairnessRating: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    engagementRating: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    textFeedback: jspb.Message.getFieldWithDefault(msg, 8, ""),
    token: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.debate_management.SubmitJudgeFeedbackRequest}
 */
proto.debate_management.SubmitJudgeFeedbackRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.SubmitJudgeFeedbackRequest;
  return proto.debate_management.SubmitJudgeFeedbackRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.SubmitJudgeFeedbackRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.SubmitJudgeFeedbackRequest}
 */
proto.debate_management.SubmitJudgeFeedbackRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDebateId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setClarityRating(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setConstructivenessRating(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimelinessRating(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFairnessRating(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEngagementRating(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextFeedback(value);
      break;
    case 9:
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
proto.debate_management.SubmitJudgeFeedbackRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.SubmitJudgeFeedbackRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.SubmitJudgeFeedbackRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.SubmitJudgeFeedbackRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJudgeId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getDebateId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getClarityRating();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getConstructivenessRating();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getTimelinessRating();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getFairnessRating();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getEngagementRating();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getTextFeedback();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional int32 judge_id = 1;
 * @return {number}
 */
proto.debate_management.SubmitJudgeFeedbackRequest.prototype.getJudgeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.SubmitJudgeFeedbackRequest} returns this
 */
proto.debate_management.SubmitJudgeFeedbackRequest.prototype.setJudgeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 debate_id = 2;
 * @return {number}
 */
proto.debate_management.SubmitJudgeFeedbackRequest.prototype.getDebateId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.SubmitJudgeFeedbackRequest} returns this
 */
proto.debate_management.SubmitJudgeFeedbackRequest.prototype.setDebateId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional double clarity_rating = 3;
 * @return {number}
 */
proto.debate_management.SubmitJudgeFeedbackRequest.prototype.getClarityRating = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.SubmitJudgeFeedbackRequest} returns this
 */
proto.debate_management.SubmitJudgeFeedbackRequest.prototype.setClarityRating = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double constructiveness_rating = 4;
 * @return {number}
 */
proto.debate_management.SubmitJudgeFeedbackRequest.prototype.getConstructivenessRating = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.SubmitJudgeFeedbackRequest} returns this
 */
proto.debate_management.SubmitJudgeFeedbackRequest.prototype.setConstructivenessRating = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double timeliness_rating = 5;
 * @return {number}
 */
proto.debate_management.SubmitJudgeFeedbackRequest.prototype.getTimelinessRating = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.SubmitJudgeFeedbackRequest} returns this
 */
proto.debate_management.SubmitJudgeFeedbackRequest.prototype.setTimelinessRating = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double fairness_rating = 6;
 * @return {number}
 */
proto.debate_management.SubmitJudgeFeedbackRequest.prototype.getFairnessRating = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.SubmitJudgeFeedbackRequest} returns this
 */
proto.debate_management.SubmitJudgeFeedbackRequest.prototype.setFairnessRating = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double engagement_rating = 7;
 * @return {number}
 */
proto.debate_management.SubmitJudgeFeedbackRequest.prototype.getEngagementRating = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.SubmitJudgeFeedbackRequest} returns this
 */
proto.debate_management.SubmitJudgeFeedbackRequest.prototype.setEngagementRating = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional string text_feedback = 8;
 * @return {string}
 */
proto.debate_management.SubmitJudgeFeedbackRequest.prototype.getTextFeedback = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.SubmitJudgeFeedbackRequest} returns this
 */
proto.debate_management.SubmitJudgeFeedbackRequest.prototype.setTextFeedback = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string token = 9;
 * @return {string}
 */
proto.debate_management.SubmitJudgeFeedbackRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.SubmitJudgeFeedbackRequest} returns this
 */
proto.debate_management.SubmitJudgeFeedbackRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
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
proto.debate_management.SubmitJudgeFeedbackResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.SubmitJudgeFeedbackResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.SubmitJudgeFeedbackResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.SubmitJudgeFeedbackResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.debate_management.SubmitJudgeFeedbackResponse}
 */
proto.debate_management.SubmitJudgeFeedbackResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.SubmitJudgeFeedbackResponse;
  return proto.debate_management.SubmitJudgeFeedbackResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.SubmitJudgeFeedbackResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.SubmitJudgeFeedbackResponse}
 */
proto.debate_management.SubmitJudgeFeedbackResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.debate_management.SubmitJudgeFeedbackResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.SubmitJudgeFeedbackResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.SubmitJudgeFeedbackResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.SubmitJudgeFeedbackResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.debate_management.SubmitJudgeFeedbackResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.debate_management.SubmitJudgeFeedbackResponse} returns this
 */
proto.debate_management.SubmitJudgeFeedbackResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.debate_management.SubmitJudgeFeedbackResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.SubmitJudgeFeedbackResponse} returns this
 */
proto.debate_management.SubmitJudgeFeedbackResponse.prototype.setMessage = function(value) {
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
proto.debate_management.GetJudgeFeedbackRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetJudgeFeedbackRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetJudgeFeedbackRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetJudgeFeedbackRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    page: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.debate_management.GetJudgeFeedbackRequest}
 */
proto.debate_management.GetJudgeFeedbackRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetJudgeFeedbackRequest;
  return proto.debate_management.GetJudgeFeedbackRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetJudgeFeedbackRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetJudgeFeedbackRequest}
 */
proto.debate_management.GetJudgeFeedbackRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
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
proto.debate_management.GetJudgeFeedbackRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetJudgeFeedbackRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetJudgeFeedbackRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetJudgeFeedbackRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.debate_management.GetJudgeFeedbackRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.GetJudgeFeedbackRequest} returns this
 */
proto.debate_management.GetJudgeFeedbackRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page = 2;
 * @return {number}
 */
proto.debate_management.GetJudgeFeedbackRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetJudgeFeedbackRequest} returns this
 */
proto.debate_management.GetJudgeFeedbackRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.debate_management.GetJudgeFeedbackRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetJudgeFeedbackRequest} returns this
 */
proto.debate_management.GetJudgeFeedbackRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.debate_management.JudgeFeedbackEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.JudgeFeedbackEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.JudgeFeedbackEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.JudgeFeedbackEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    studentAlias: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tournamentDate: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isRead: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    clarityRating: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    constructivenessRating: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    timelinessRating: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    fairnessRating: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    engagementRating: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    textFeedback: jspb.Message.getFieldWithDefault(msg, 9, ""),
    roundNumber: jspb.Message.getFieldWithDefault(msg, 10, 0),
    isEliminationRound: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    feedbackId: jspb.Message.getFieldWithDefault(msg, 12, 0)
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
 * @return {!proto.debate_management.JudgeFeedbackEntry}
 */
proto.debate_management.JudgeFeedbackEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.JudgeFeedbackEntry;
  return proto.debate_management.JudgeFeedbackEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.JudgeFeedbackEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.JudgeFeedbackEntry}
 */
proto.debate_management.JudgeFeedbackEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStudentAlias(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTournamentDate(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsRead(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setClarityRating(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setConstructivenessRating(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimelinessRating(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFairnessRating(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEngagementRating(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextFeedback(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoundNumber(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEliminationRound(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFeedbackId(value);
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
proto.debate_management.JudgeFeedbackEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.JudgeFeedbackEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.JudgeFeedbackEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.JudgeFeedbackEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStudentAlias();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTournamentDate();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsRead();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getClarityRating();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getConstructivenessRating();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getTimelinessRating();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getFairnessRating();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getEngagementRating();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getTextFeedback();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getRoundNumber();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getIsEliminationRound();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getFeedbackId();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
};


/**
 * optional string student_alias = 1;
 * @return {string}
 */
proto.debate_management.JudgeFeedbackEntry.prototype.getStudentAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.JudgeFeedbackEntry} returns this
 */
proto.debate_management.JudgeFeedbackEntry.prototype.setStudentAlias = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tournament_date = 2;
 * @return {string}
 */
proto.debate_management.JudgeFeedbackEntry.prototype.getTournamentDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.JudgeFeedbackEntry} returns this
 */
proto.debate_management.JudgeFeedbackEntry.prototype.setTournamentDate = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_read = 3;
 * @return {boolean}
 */
proto.debate_management.JudgeFeedbackEntry.prototype.getIsRead = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.debate_management.JudgeFeedbackEntry} returns this
 */
proto.debate_management.JudgeFeedbackEntry.prototype.setIsRead = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional double clarity_rating = 4;
 * @return {number}
 */
proto.debate_management.JudgeFeedbackEntry.prototype.getClarityRating = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.JudgeFeedbackEntry} returns this
 */
proto.debate_management.JudgeFeedbackEntry.prototype.setClarityRating = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double constructiveness_rating = 5;
 * @return {number}
 */
proto.debate_management.JudgeFeedbackEntry.prototype.getConstructivenessRating = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.JudgeFeedbackEntry} returns this
 */
proto.debate_management.JudgeFeedbackEntry.prototype.setConstructivenessRating = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double timeliness_rating = 6;
 * @return {number}
 */
proto.debate_management.JudgeFeedbackEntry.prototype.getTimelinessRating = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.JudgeFeedbackEntry} returns this
 */
proto.debate_management.JudgeFeedbackEntry.prototype.setTimelinessRating = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double fairness_rating = 7;
 * @return {number}
 */
proto.debate_management.JudgeFeedbackEntry.prototype.getFairnessRating = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.JudgeFeedbackEntry} returns this
 */
proto.debate_management.JudgeFeedbackEntry.prototype.setFairnessRating = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double engagement_rating = 8;
 * @return {number}
 */
proto.debate_management.JudgeFeedbackEntry.prototype.getEngagementRating = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.JudgeFeedbackEntry} returns this
 */
proto.debate_management.JudgeFeedbackEntry.prototype.setEngagementRating = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional string text_feedback = 9;
 * @return {string}
 */
proto.debate_management.JudgeFeedbackEntry.prototype.getTextFeedback = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.JudgeFeedbackEntry} returns this
 */
proto.debate_management.JudgeFeedbackEntry.prototype.setTextFeedback = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 round_number = 10;
 * @return {number}
 */
proto.debate_management.JudgeFeedbackEntry.prototype.getRoundNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.JudgeFeedbackEntry} returns this
 */
proto.debate_management.JudgeFeedbackEntry.prototype.setRoundNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional bool is_elimination_round = 11;
 * @return {boolean}
 */
proto.debate_management.JudgeFeedbackEntry.prototype.getIsEliminationRound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.debate_management.JudgeFeedbackEntry} returns this
 */
proto.debate_management.JudgeFeedbackEntry.prototype.setIsEliminationRound = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional int32 feedback_id = 12;
 * @return {number}
 */
proto.debate_management.JudgeFeedbackEntry.prototype.getFeedbackId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.JudgeFeedbackEntry} returns this
 */
proto.debate_management.JudgeFeedbackEntry.prototype.setFeedbackId = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.GetJudgeFeedbackResponse.repeatedFields_ = [1];



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
proto.debate_management.GetJudgeFeedbackResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetJudgeFeedbackResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetJudgeFeedbackResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetJudgeFeedbackResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    feedbackEntriesList: jspb.Message.toObjectList(msg.getFeedbackEntriesList(),
    proto.debate_management.JudgeFeedbackEntry.toObject, includeInstance),
    totalCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.debate_management.GetJudgeFeedbackResponse}
 */
proto.debate_management.GetJudgeFeedbackResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetJudgeFeedbackResponse;
  return proto.debate_management.GetJudgeFeedbackResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetJudgeFeedbackResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetJudgeFeedbackResponse}
 */
proto.debate_management.GetJudgeFeedbackResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.debate_management.JudgeFeedbackEntry;
      reader.readMessage(value,proto.debate_management.JudgeFeedbackEntry.deserializeBinaryFromReader);
      msg.addFeedbackEntries(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalCount(value);
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
proto.debate_management.GetJudgeFeedbackResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetJudgeFeedbackResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetJudgeFeedbackResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetJudgeFeedbackResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFeedbackEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.debate_management.JudgeFeedbackEntry.serializeBinaryToWriter
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * repeated JudgeFeedbackEntry feedback_entries = 1;
 * @return {!Array<!proto.debate_management.JudgeFeedbackEntry>}
 */
proto.debate_management.GetJudgeFeedbackResponse.prototype.getFeedbackEntriesList = function() {
  return /** @type{!Array<!proto.debate_management.JudgeFeedbackEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.JudgeFeedbackEntry, 1));
};


/**
 * @param {!Array<!proto.debate_management.JudgeFeedbackEntry>} value
 * @return {!proto.debate_management.GetJudgeFeedbackResponse} returns this
*/
proto.debate_management.GetJudgeFeedbackResponse.prototype.setFeedbackEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.debate_management.JudgeFeedbackEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.JudgeFeedbackEntry}
 */
proto.debate_management.GetJudgeFeedbackResponse.prototype.addFeedbackEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.debate_management.JudgeFeedbackEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.GetJudgeFeedbackResponse} returns this
 */
proto.debate_management.GetJudgeFeedbackResponse.prototype.clearFeedbackEntriesList = function() {
  return this.setFeedbackEntriesList([]);
};


/**
 * optional int32 total_count = 2;
 * @return {number}
 */
proto.debate_management.GetJudgeFeedbackResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetJudgeFeedbackResponse} returns this
 */
proto.debate_management.GetJudgeFeedbackResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.debate_management.GetVolunteerRankingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetVolunteerRankingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetVolunteerRankingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetVolunteerRankingRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.debate_management.GetVolunteerRankingRequest}
 */
proto.debate_management.GetVolunteerRankingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetVolunteerRankingRequest;
  return proto.debate_management.GetVolunteerRankingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetVolunteerRankingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetVolunteerRankingRequest}
 */
proto.debate_management.GetVolunteerRankingRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.debate_management.GetVolunteerRankingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetVolunteerRankingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetVolunteerRankingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetVolunteerRankingRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.debate_management.GetVolunteerRankingRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.GetVolunteerRankingRequest} returns this
 */
proto.debate_management.GetVolunteerRankingRequest.prototype.setToken = function(value) {
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
proto.debate_management.TopVolunteer.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.TopVolunteer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.TopVolunteer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.TopVolunteer.toObject = function(includeInstance, msg) {
  var f, obj = {
    rank: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    averageRating: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
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
 * @return {!proto.debate_management.TopVolunteer}
 */
proto.debate_management.TopVolunteer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.TopVolunteer;
  return proto.debate_management.TopVolunteer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.TopVolunteer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.TopVolunteer}
 */
proto.debate_management.TopVolunteer.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setAverageRating(value);
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
proto.debate_management.TopVolunteer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.TopVolunteer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.TopVolunteer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.TopVolunteer.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getAverageRating();
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
proto.debate_management.TopVolunteer.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TopVolunteer} returns this
 */
proto.debate_management.TopVolunteer.prototype.setRank = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.debate_management.TopVolunteer.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.TopVolunteer} returns this
 */
proto.debate_management.TopVolunteer.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double average_rating = 3;
 * @return {number}
 */
proto.debate_management.TopVolunteer.prototype.getAverageRating = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TopVolunteer} returns this
 */
proto.debate_management.TopVolunteer.prototype.setAverageRating = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional int32 rank_change = 4;
 * @return {number}
 */
proto.debate_management.TopVolunteer.prototype.getRankChange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TopVolunteer} returns this
 */
proto.debate_management.TopVolunteer.prototype.setRankChange = function(value) {
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
proto.debate_management.VolunteerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.VolunteerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.VolunteerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.VolunteerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    averageRating: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.debate_management.VolunteerInfo}
 */
proto.debate_management.VolunteerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.VolunteerInfo;
  return proto.debate_management.VolunteerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.VolunteerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.VolunteerInfo}
 */
proto.debate_management.VolunteerInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setAverageRating(value);
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
proto.debate_management.VolunteerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.VolunteerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.VolunteerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.VolunteerInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAverageRating();
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
proto.debate_management.VolunteerInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.VolunteerInfo} returns this
 */
proto.debate_management.VolunteerInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double average_rating = 2;
 * @return {number}
 */
proto.debate_management.VolunteerInfo.prototype.getAverageRating = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.VolunteerInfo} returns this
 */
proto.debate_management.VolunteerInfo.prototype.setAverageRating = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.GetVolunteerRankingResponse.repeatedFields_ = [4];



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
proto.debate_management.GetVolunteerRankingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetVolunteerRankingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetVolunteerRankingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetVolunteerRankingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    volunteerRank: jspb.Message.getFieldWithDefault(msg, 1, 0),
    totalVolunteers: jspb.Message.getFieldWithDefault(msg, 2, 0),
    rankChange: jspb.Message.getFieldWithDefault(msg, 3, 0),
    topVolunteersList: jspb.Message.toObjectList(msg.getTopVolunteersList(),
    proto.debate_management.TopVolunteer.toObject, includeInstance),
    volunteerInfo: (f = msg.getVolunteerInfo()) && proto.debate_management.VolunteerInfo.toObject(includeInstance, f)
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
 * @return {!proto.debate_management.GetVolunteerRankingResponse}
 */
proto.debate_management.GetVolunteerRankingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetVolunteerRankingResponse;
  return proto.debate_management.GetVolunteerRankingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetVolunteerRankingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetVolunteerRankingResponse}
 */
proto.debate_management.GetVolunteerRankingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVolunteerRank(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalVolunteers(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRankChange(value);
      break;
    case 4:
      var value = new proto.debate_management.TopVolunteer;
      reader.readMessage(value,proto.debate_management.TopVolunteer.deserializeBinaryFromReader);
      msg.addTopVolunteers(value);
      break;
    case 5:
      var value = new proto.debate_management.VolunteerInfo;
      reader.readMessage(value,proto.debate_management.VolunteerInfo.deserializeBinaryFromReader);
      msg.setVolunteerInfo(value);
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
proto.debate_management.GetVolunteerRankingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetVolunteerRankingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetVolunteerRankingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetVolunteerRankingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolunteerRank();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTotalVolunteers();
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
  f = message.getTopVolunteersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.debate_management.TopVolunteer.serializeBinaryToWriter
    );
  }
  f = message.getVolunteerInfo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.debate_management.VolunteerInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 volunteer_rank = 1;
 * @return {number}
 */
proto.debate_management.GetVolunteerRankingResponse.prototype.getVolunteerRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetVolunteerRankingResponse} returns this
 */
proto.debate_management.GetVolunteerRankingResponse.prototype.setVolunteerRank = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 total_volunteers = 2;
 * @return {number}
 */
proto.debate_management.GetVolunteerRankingResponse.prototype.getTotalVolunteers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetVolunteerRankingResponse} returns this
 */
proto.debate_management.GetVolunteerRankingResponse.prototype.setTotalVolunteers = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 rank_change = 3;
 * @return {number}
 */
proto.debate_management.GetVolunteerRankingResponse.prototype.getRankChange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.GetVolunteerRankingResponse} returns this
 */
proto.debate_management.GetVolunteerRankingResponse.prototype.setRankChange = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated TopVolunteer top_volunteers = 4;
 * @return {!Array<!proto.debate_management.TopVolunteer>}
 */
proto.debate_management.GetVolunteerRankingResponse.prototype.getTopVolunteersList = function() {
  return /** @type{!Array<!proto.debate_management.TopVolunteer>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.TopVolunteer, 4));
};


/**
 * @param {!Array<!proto.debate_management.TopVolunteer>} value
 * @return {!proto.debate_management.GetVolunteerRankingResponse} returns this
*/
proto.debate_management.GetVolunteerRankingResponse.prototype.setTopVolunteersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.debate_management.TopVolunteer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.TopVolunteer}
 */
proto.debate_management.GetVolunteerRankingResponse.prototype.addTopVolunteers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.debate_management.TopVolunteer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.GetVolunteerRankingResponse} returns this
 */
proto.debate_management.GetVolunteerRankingResponse.prototype.clearTopVolunteersList = function() {
  return this.setTopVolunteersList([]);
};


/**
 * optional VolunteerInfo volunteer_info = 5;
 * @return {?proto.debate_management.VolunteerInfo}
 */
proto.debate_management.GetVolunteerRankingResponse.prototype.getVolunteerInfo = function() {
  return /** @type{?proto.debate_management.VolunteerInfo} */ (
    jspb.Message.getWrapperField(this, proto.debate_management.VolunteerInfo, 5));
};


/**
 * @param {?proto.debate_management.VolunteerInfo|undefined} value
 * @return {!proto.debate_management.GetVolunteerRankingResponse} returns this
*/
proto.debate_management.GetVolunteerRankingResponse.prototype.setVolunteerInfo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.debate_management.GetVolunteerRankingResponse} returns this
 */
proto.debate_management.GetVolunteerRankingResponse.prototype.clearVolunteerInfo = function() {
  return this.setVolunteerInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.debate_management.GetVolunteerRankingResponse.prototype.hasVolunteerInfo = function() {
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
proto.debate_management.GetVolunteerPerformanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetVolunteerPerformanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetVolunteerPerformanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetVolunteerPerformanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    startDate: jspb.Message.getFieldWithDefault(msg, 1, ""),
    endDate: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.debate_management.GetVolunteerPerformanceRequest}
 */
proto.debate_management.GetVolunteerPerformanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetVolunteerPerformanceRequest;
  return proto.debate_management.GetVolunteerPerformanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetVolunteerPerformanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetVolunteerPerformanceRequest}
 */
proto.debate_management.GetVolunteerPerformanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartDate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndDate(value);
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
proto.debate_management.GetVolunteerPerformanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetVolunteerPerformanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetVolunteerPerformanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetVolunteerPerformanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartDate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEndDate();
  if (f.length > 0) {
    writer.writeString(
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
 * optional string start_date = 1;
 * @return {string}
 */
proto.debate_management.GetVolunteerPerformanceRequest.prototype.getStartDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.GetVolunteerPerformanceRequest} returns this
 */
proto.debate_management.GetVolunteerPerformanceRequest.prototype.setStartDate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string end_date = 2;
 * @return {string}
 */
proto.debate_management.GetVolunteerPerformanceRequest.prototype.getEndDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.GetVolunteerPerformanceRequest} returns this
 */
proto.debate_management.GetVolunteerPerformanceRequest.prototype.setEndDate = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string token = 3;
 * @return {string}
 */
proto.debate_management.GetVolunteerPerformanceRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.GetVolunteerPerformanceRequest} returns this
 */
proto.debate_management.GetVolunteerPerformanceRequest.prototype.setToken = function(value) {
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
proto.debate_management.VolunteerPerformanceData.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.VolunteerPerformanceData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.VolunteerPerformanceData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.VolunteerPerformanceData.toObject = function(includeInstance, msg) {
  var f, obj = {
    tournamentDate: jspb.Message.getFieldWithDefault(msg, 1, ""),
    volunteerAverageRating: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    overallAverageRating: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    tournamentRank: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.debate_management.VolunteerPerformanceData}
 */
proto.debate_management.VolunteerPerformanceData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.VolunteerPerformanceData;
  return proto.debate_management.VolunteerPerformanceData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.VolunteerPerformanceData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.VolunteerPerformanceData}
 */
proto.debate_management.VolunteerPerformanceData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTournamentDate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolunteerAverageRating(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOverallAverageRating(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTournamentRank(value);
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
proto.debate_management.VolunteerPerformanceData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.VolunteerPerformanceData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.VolunteerPerformanceData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.VolunteerPerformanceData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTournamentDate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVolunteerAverageRating();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getOverallAverageRating();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getTournamentRank();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string tournament_date = 1;
 * @return {string}
 */
proto.debate_management.VolunteerPerformanceData.prototype.getTournamentDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.VolunteerPerformanceData} returns this
 */
proto.debate_management.VolunteerPerformanceData.prototype.setTournamentDate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double volunteer_average_rating = 2;
 * @return {number}
 */
proto.debate_management.VolunteerPerformanceData.prototype.getVolunteerAverageRating = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.VolunteerPerformanceData} returns this
 */
proto.debate_management.VolunteerPerformanceData.prototype.setVolunteerAverageRating = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double overall_average_rating = 3;
 * @return {number}
 */
proto.debate_management.VolunteerPerformanceData.prototype.getOverallAverageRating = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.VolunteerPerformanceData} returns this
 */
proto.debate_management.VolunteerPerformanceData.prototype.setOverallAverageRating = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional int32 tournament_rank = 4;
 * @return {number}
 */
proto.debate_management.VolunteerPerformanceData.prototype.getTournamentRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.VolunteerPerformanceData} returns this
 */
proto.debate_management.VolunteerPerformanceData.prototype.setTournamentRank = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.GetVolunteerPerformanceResponse.repeatedFields_ = [1];



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
proto.debate_management.GetVolunteerPerformanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.GetVolunteerPerformanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.GetVolunteerPerformanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetVolunteerPerformanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    performanceDataList: jspb.Message.toObjectList(msg.getPerformanceDataList(),
    proto.debate_management.VolunteerPerformanceData.toObject, includeInstance)
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
 * @return {!proto.debate_management.GetVolunteerPerformanceResponse}
 */
proto.debate_management.GetVolunteerPerformanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.GetVolunteerPerformanceResponse;
  return proto.debate_management.GetVolunteerPerformanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.GetVolunteerPerformanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.GetVolunteerPerformanceResponse}
 */
proto.debate_management.GetVolunteerPerformanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.debate_management.VolunteerPerformanceData;
      reader.readMessage(value,proto.debate_management.VolunteerPerformanceData.deserializeBinaryFromReader);
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
proto.debate_management.GetVolunteerPerformanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.GetVolunteerPerformanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.GetVolunteerPerformanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.GetVolunteerPerformanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPerformanceDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.debate_management.VolunteerPerformanceData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated VolunteerPerformanceData performance_data = 1;
 * @return {!Array<!proto.debate_management.VolunteerPerformanceData>}
 */
proto.debate_management.GetVolunteerPerformanceResponse.prototype.getPerformanceDataList = function() {
  return /** @type{!Array<!proto.debate_management.VolunteerPerformanceData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.VolunteerPerformanceData, 1));
};


/**
 * @param {!Array<!proto.debate_management.VolunteerPerformanceData>} value
 * @return {!proto.debate_management.GetVolunteerPerformanceResponse} returns this
*/
proto.debate_management.GetVolunteerPerformanceResponse.prototype.setPerformanceDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.debate_management.VolunteerPerformanceData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.VolunteerPerformanceData}
 */
proto.debate_management.GetVolunteerPerformanceResponse.prototype.addPerformanceData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.debate_management.VolunteerPerformanceData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.GetVolunteerPerformanceResponse} returns this
 */
proto.debate_management.GetVolunteerPerformanceResponse.prototype.clearPerformanceDataList = function() {
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
proto.debate_management.MarkFeedbackAsReadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.MarkFeedbackAsReadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.MarkFeedbackAsReadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.MarkFeedbackAsReadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    feedbackId: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.debate_management.MarkFeedbackAsReadRequest}
 */
proto.debate_management.MarkFeedbackAsReadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.MarkFeedbackAsReadRequest;
  return proto.debate_management.MarkFeedbackAsReadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.MarkFeedbackAsReadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.MarkFeedbackAsReadRequest}
 */
proto.debate_management.MarkFeedbackAsReadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFeedbackId(value);
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
proto.debate_management.MarkFeedbackAsReadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.MarkFeedbackAsReadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.MarkFeedbackAsReadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.MarkFeedbackAsReadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFeedbackId();
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
 * optional int32 feedback_id = 1;
 * @return {number}
 */
proto.debate_management.MarkFeedbackAsReadRequest.prototype.getFeedbackId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.MarkFeedbackAsReadRequest} returns this
 */
proto.debate_management.MarkFeedbackAsReadRequest.prototype.setFeedbackId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.debate_management.MarkFeedbackAsReadRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.MarkFeedbackAsReadRequest} returns this
 */
proto.debate_management.MarkFeedbackAsReadRequest.prototype.setToken = function(value) {
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
proto.debate_management.MarkFeedbackAsReadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.MarkFeedbackAsReadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.MarkFeedbackAsReadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.MarkFeedbackAsReadResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.debate_management.MarkFeedbackAsReadResponse}
 */
proto.debate_management.MarkFeedbackAsReadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.MarkFeedbackAsReadResponse;
  return proto.debate_management.MarkFeedbackAsReadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.MarkFeedbackAsReadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.MarkFeedbackAsReadResponse}
 */
proto.debate_management.MarkFeedbackAsReadResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.debate_management.MarkFeedbackAsReadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.MarkFeedbackAsReadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.MarkFeedbackAsReadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.MarkFeedbackAsReadResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.debate_management.MarkFeedbackAsReadResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.debate_management.MarkFeedbackAsReadResponse} returns this
 */
proto.debate_management.MarkFeedbackAsReadResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.debate_management.MarkFeedbackAsReadResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.MarkFeedbackAsReadResponse} returns this
 */
proto.debate_management.MarkFeedbackAsReadResponse.prototype.setMessage = function(value) {
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
proto.debate_management.TournamentVolunteerRankingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.TournamentVolunteerRankingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.TournamentVolunteerRankingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.TournamentVolunteerRankingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tournamentId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    page: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.debate_management.TournamentVolunteerRankingRequest}
 */
proto.debate_management.TournamentVolunteerRankingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.TournamentVolunteerRankingRequest;
  return proto.debate_management.TournamentVolunteerRankingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.TournamentVolunteerRankingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.TournamentVolunteerRankingRequest}
 */
proto.debate_management.TournamentVolunteerRankingRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
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
proto.debate_management.TournamentVolunteerRankingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.TournamentVolunteerRankingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.TournamentVolunteerRankingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.TournamentVolunteerRankingRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 tournament_id = 1;
 * @return {number}
 */
proto.debate_management.TournamentVolunteerRankingRequest.prototype.getTournamentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TournamentVolunteerRankingRequest} returns this
 */
proto.debate_management.TournamentVolunteerRankingRequest.prototype.setTournamentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.debate_management.TournamentVolunteerRankingRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.TournamentVolunteerRankingRequest} returns this
 */
proto.debate_management.TournamentVolunteerRankingRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page = 3;
 * @return {number}
 */
proto.debate_management.TournamentVolunteerRankingRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TournamentVolunteerRankingRequest} returns this
 */
proto.debate_management.TournamentVolunteerRankingRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.debate_management.TournamentVolunteerRankingRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TournamentVolunteerRankingRequest} returns this
 */
proto.debate_management.TournamentVolunteerRankingRequest.prototype.setPageSize = function(value) {
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
proto.debate_management.VolunteerTournamentRank.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.VolunteerTournamentRank.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.VolunteerTournamentRank} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.VolunteerTournamentRank.toObject = function(includeInstance, msg) {
  var f, obj = {
    volunteerId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    volunteerName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    averageRating: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    preliminaryRounds: jspb.Message.getFieldWithDefault(msg, 4, 0),
    eliminationRounds: jspb.Message.getFieldWithDefault(msg, 5, 0),
    rank: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.debate_management.VolunteerTournamentRank}
 */
proto.debate_management.VolunteerTournamentRank.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.VolunteerTournamentRank;
  return proto.debate_management.VolunteerTournamentRank.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.VolunteerTournamentRank} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.VolunteerTournamentRank}
 */
proto.debate_management.VolunteerTournamentRank.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVolunteerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolunteerName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAverageRating(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPreliminaryRounds(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEliminationRounds(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRank(value);
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
proto.debate_management.VolunteerTournamentRank.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.VolunteerTournamentRank.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.VolunteerTournamentRank} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.VolunteerTournamentRank.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolunteerId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getVolunteerName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAverageRating();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getPreliminaryRounds();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getEliminationRounds();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getRank();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional int32 volunteer_id = 1;
 * @return {number}
 */
proto.debate_management.VolunteerTournamentRank.prototype.getVolunteerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.VolunteerTournamentRank} returns this
 */
proto.debate_management.VolunteerTournamentRank.prototype.setVolunteerId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string volunteer_name = 2;
 * @return {string}
 */
proto.debate_management.VolunteerTournamentRank.prototype.getVolunteerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.debate_management.VolunteerTournamentRank} returns this
 */
proto.debate_management.VolunteerTournamentRank.prototype.setVolunteerName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double average_rating = 3;
 * @return {number}
 */
proto.debate_management.VolunteerTournamentRank.prototype.getAverageRating = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.VolunteerTournamentRank} returns this
 */
proto.debate_management.VolunteerTournamentRank.prototype.setAverageRating = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional int32 preliminary_rounds = 4;
 * @return {number}
 */
proto.debate_management.VolunteerTournamentRank.prototype.getPreliminaryRounds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.VolunteerTournamentRank} returns this
 */
proto.debate_management.VolunteerTournamentRank.prototype.setPreliminaryRounds = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 elimination_rounds = 5;
 * @return {number}
 */
proto.debate_management.VolunteerTournamentRank.prototype.getEliminationRounds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.VolunteerTournamentRank} returns this
 */
proto.debate_management.VolunteerTournamentRank.prototype.setEliminationRounds = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 rank = 6;
 * @return {number}
 */
proto.debate_management.VolunteerTournamentRank.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.VolunteerTournamentRank} returns this
 */
proto.debate_management.VolunteerTournamentRank.prototype.setRank = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.debate_management.TournamentVolunteerRankingResponse.repeatedFields_ = [1];



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
proto.debate_management.TournamentVolunteerRankingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.debate_management.TournamentVolunteerRankingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.debate_management.TournamentVolunteerRankingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.TournamentVolunteerRankingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rankingsList: jspb.Message.toObjectList(msg.getRankingsList(),
    proto.debate_management.VolunteerTournamentRank.toObject, includeInstance),
    totalCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.debate_management.TournamentVolunteerRankingResponse}
 */
proto.debate_management.TournamentVolunteerRankingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.debate_management.TournamentVolunteerRankingResponse;
  return proto.debate_management.TournamentVolunteerRankingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.debate_management.TournamentVolunteerRankingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.debate_management.TournamentVolunteerRankingResponse}
 */
proto.debate_management.TournamentVolunteerRankingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.debate_management.VolunteerTournamentRank;
      reader.readMessage(value,proto.debate_management.VolunteerTournamentRank.deserializeBinaryFromReader);
      msg.addRankings(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalCount(value);
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
proto.debate_management.TournamentVolunteerRankingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.debate_management.TournamentVolunteerRankingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.debate_management.TournamentVolunteerRankingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.debate_management.TournamentVolunteerRankingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRankingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.debate_management.VolunteerTournamentRank.serializeBinaryToWriter
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * repeated VolunteerTournamentRank rankings = 1;
 * @return {!Array<!proto.debate_management.VolunteerTournamentRank>}
 */
proto.debate_management.TournamentVolunteerRankingResponse.prototype.getRankingsList = function() {
  return /** @type{!Array<!proto.debate_management.VolunteerTournamentRank>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.debate_management.VolunteerTournamentRank, 1));
};


/**
 * @param {!Array<!proto.debate_management.VolunteerTournamentRank>} value
 * @return {!proto.debate_management.TournamentVolunteerRankingResponse} returns this
*/
proto.debate_management.TournamentVolunteerRankingResponse.prototype.setRankingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.debate_management.VolunteerTournamentRank=} opt_value
 * @param {number=} opt_index
 * @return {!proto.debate_management.VolunteerTournamentRank}
 */
proto.debate_management.TournamentVolunteerRankingResponse.prototype.addRankings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.debate_management.VolunteerTournamentRank, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.debate_management.TournamentVolunteerRankingResponse} returns this
 */
proto.debate_management.TournamentVolunteerRankingResponse.prototype.clearRankingsList = function() {
  return this.setRankingsList([]);
};


/**
 * optional int32 total_count = 2;
 * @return {number}
 */
proto.debate_management.TournamentVolunteerRankingResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.debate_management.TournamentVolunteerRankingResponse} returns this
 */
proto.debate_management.TournamentVolunteerRankingResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.debate_management);
