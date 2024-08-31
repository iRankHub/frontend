// source: tournament_management/tournament.proto
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

goog.exportSymbol('proto.tournament_management.BulkResendInvitationsRequest', null, global);
goog.exportSymbol('proto.tournament_management.BulkResendInvitationsResponse', null, global);
goog.exportSymbol('proto.tournament_management.BulkUpdateInvitationStatusRequest', null, global);
goog.exportSymbol('proto.tournament_management.BulkUpdateInvitationStatusResponse', null, global);
goog.exportSymbol('proto.tournament_management.CreateLeagueRequest', null, global);
goog.exportSymbol('proto.tournament_management.CreateLeagueRequest.LeagueDetailsCase', null, global);
goog.exportSymbol('proto.tournament_management.CreateLeagueResponse', null, global);
goog.exportSymbol('proto.tournament_management.CreateTournamentFormatRequest', null, global);
goog.exportSymbol('proto.tournament_management.CreateTournamentFormatResponse', null, global);
goog.exportSymbol('proto.tournament_management.CreateTournamentRequest', null, global);
goog.exportSymbol('proto.tournament_management.CreateTournamentResponse', null, global);
goog.exportSymbol('proto.tournament_management.DeleteLeagueRequest', null, global);
goog.exportSymbol('proto.tournament_management.DeleteLeagueResponse', null, global);
goog.exportSymbol('proto.tournament_management.DeleteTournamentFormatRequest', null, global);
goog.exportSymbol('proto.tournament_management.DeleteTournamentFormatResponse', null, global);
goog.exportSymbol('proto.tournament_management.DeleteTournamentRequest', null, global);
goog.exportSymbol('proto.tournament_management.DeleteTournamentResponse', null, global);
goog.exportSymbol('proto.tournament_management.GetInvitationsByTournamentRequest', null, global);
goog.exportSymbol('proto.tournament_management.GetInvitationsByTournamentResponse', null, global);
goog.exportSymbol('proto.tournament_management.GetInvitationsByUserRequest', null, global);
goog.exportSymbol('proto.tournament_management.GetInvitationsByUserResponse', null, global);
goog.exportSymbol('proto.tournament_management.GetLeagueRequest', null, global);
goog.exportSymbol('proto.tournament_management.GetLeagueResponse', null, global);
goog.exportSymbol('proto.tournament_management.GetTournamentFormatRequest', null, global);
goog.exportSymbol('proto.tournament_management.GetTournamentFormatResponse', null, global);
goog.exportSymbol('proto.tournament_management.GetTournamentRequest', null, global);
goog.exportSymbol('proto.tournament_management.GetTournamentResponse', null, global);
goog.exportSymbol('proto.tournament_management.InternationalDetails', null, global);
goog.exportSymbol('proto.tournament_management.InvitationInfo', null, global);
goog.exportSymbol('proto.tournament_management.League', null, global);
goog.exportSymbol('proto.tournament_management.LeagueType', null, global);
goog.exportSymbol('proto.tournament_management.ListLeaguesRequest', null, global);
goog.exportSymbol('proto.tournament_management.ListLeaguesResponse', null, global);
goog.exportSymbol('proto.tournament_management.ListTournamentFormatsRequest', null, global);
goog.exportSymbol('proto.tournament_management.ListTournamentFormatsResponse', null, global);
goog.exportSymbol('proto.tournament_management.ListTournamentsRequest', null, global);
goog.exportSymbol('proto.tournament_management.ListTournamentsResponse', null, global);
goog.exportSymbol('proto.tournament_management.LocalDetails', null, global);
goog.exportSymbol('proto.tournament_management.ResendInvitationRequest', null, global);
goog.exportSymbol('proto.tournament_management.ResendInvitationResponse', null, global);
goog.exportSymbol('proto.tournament_management.Tournament', null, global);
goog.exportSymbol('proto.tournament_management.TournamentFormat', null, global);
goog.exportSymbol('proto.tournament_management.UpdateInvitationStatusRequest', null, global);
goog.exportSymbol('proto.tournament_management.UpdateInvitationStatusResponse', null, global);
goog.exportSymbol('proto.tournament_management.UpdateLeagueRequest', null, global);
goog.exportSymbol('proto.tournament_management.UpdateLeagueRequest.LeagueDetailsCase', null, global);
goog.exportSymbol('proto.tournament_management.UpdateLeagueResponse', null, global);
goog.exportSymbol('proto.tournament_management.UpdateTournamentFormatRequest', null, global);
goog.exportSymbol('proto.tournament_management.UpdateTournamentFormatResponse', null, global);
goog.exportSymbol('proto.tournament_management.UpdateTournamentRequest', null, global);
goog.exportSymbol('proto.tournament_management.UpdateTournamentResponse', null, global);
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
proto.tournament_management.LocalDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tournament_management.LocalDetails.repeatedFields_, null);
};
goog.inherits(proto.tournament_management.LocalDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.LocalDetails.displayName = 'proto.tournament_management.LocalDetails';
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
proto.tournament_management.InternationalDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tournament_management.InternationalDetails.repeatedFields_, null);
};
goog.inherits(proto.tournament_management.InternationalDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.InternationalDetails.displayName = 'proto.tournament_management.InternationalDetails';
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
proto.tournament_management.League = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.League, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.League.displayName = 'proto.tournament_management.League';
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
proto.tournament_management.TournamentFormat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.TournamentFormat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.TournamentFormat.displayName = 'proto.tournament_management.TournamentFormat';
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
proto.tournament_management.Tournament = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.Tournament, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.Tournament.displayName = 'proto.tournament_management.Tournament';
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
proto.tournament_management.CreateLeagueRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tournament_management.CreateLeagueRequest.oneofGroups_);
};
goog.inherits(proto.tournament_management.CreateLeagueRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.CreateLeagueRequest.displayName = 'proto.tournament_management.CreateLeagueRequest';
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
proto.tournament_management.GetLeagueRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.GetLeagueRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.GetLeagueRequest.displayName = 'proto.tournament_management.GetLeagueRequest';
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
proto.tournament_management.ListLeaguesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.ListLeaguesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.ListLeaguesRequest.displayName = 'proto.tournament_management.ListLeaguesRequest';
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
proto.tournament_management.UpdateLeagueRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tournament_management.UpdateLeagueRequest.oneofGroups_);
};
goog.inherits(proto.tournament_management.UpdateLeagueRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.UpdateLeagueRequest.displayName = 'proto.tournament_management.UpdateLeagueRequest';
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
proto.tournament_management.DeleteLeagueRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.DeleteLeagueRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.DeleteLeagueRequest.displayName = 'proto.tournament_management.DeleteLeagueRequest';
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
proto.tournament_management.CreateTournamentFormatRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.CreateTournamentFormatRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.CreateTournamentFormatRequest.displayName = 'proto.tournament_management.CreateTournamentFormatRequest';
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
proto.tournament_management.GetTournamentFormatRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.GetTournamentFormatRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.GetTournamentFormatRequest.displayName = 'proto.tournament_management.GetTournamentFormatRequest';
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
proto.tournament_management.ListTournamentFormatsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.ListTournamentFormatsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.ListTournamentFormatsRequest.displayName = 'proto.tournament_management.ListTournamentFormatsRequest';
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
proto.tournament_management.UpdateTournamentFormatRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.UpdateTournamentFormatRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.UpdateTournamentFormatRequest.displayName = 'proto.tournament_management.UpdateTournamentFormatRequest';
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
proto.tournament_management.DeleteTournamentFormatRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.DeleteTournamentFormatRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.DeleteTournamentFormatRequest.displayName = 'proto.tournament_management.DeleteTournamentFormatRequest';
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
proto.tournament_management.CreateTournamentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.CreateTournamentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.CreateTournamentRequest.displayName = 'proto.tournament_management.CreateTournamentRequest';
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
proto.tournament_management.GetTournamentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.GetTournamentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.GetTournamentRequest.displayName = 'proto.tournament_management.GetTournamentRequest';
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
proto.tournament_management.ListTournamentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.ListTournamentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.ListTournamentsRequest.displayName = 'proto.tournament_management.ListTournamentsRequest';
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
proto.tournament_management.UpdateTournamentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.UpdateTournamentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.UpdateTournamentRequest.displayName = 'proto.tournament_management.UpdateTournamentRequest';
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
proto.tournament_management.DeleteTournamentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.DeleteTournamentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.DeleteTournamentRequest.displayName = 'proto.tournament_management.DeleteTournamentRequest';
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
proto.tournament_management.CreateLeagueResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.CreateLeagueResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.CreateLeagueResponse.displayName = 'proto.tournament_management.CreateLeagueResponse';
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
proto.tournament_management.GetLeagueResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.GetLeagueResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.GetLeagueResponse.displayName = 'proto.tournament_management.GetLeagueResponse';
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
proto.tournament_management.ListLeaguesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tournament_management.ListLeaguesResponse.repeatedFields_, null);
};
goog.inherits(proto.tournament_management.ListLeaguesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.ListLeaguesResponse.displayName = 'proto.tournament_management.ListLeaguesResponse';
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
proto.tournament_management.UpdateLeagueResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.UpdateLeagueResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.UpdateLeagueResponse.displayName = 'proto.tournament_management.UpdateLeagueResponse';
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
proto.tournament_management.DeleteLeagueResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.DeleteLeagueResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.DeleteLeagueResponse.displayName = 'proto.tournament_management.DeleteLeagueResponse';
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
proto.tournament_management.CreateTournamentFormatResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.CreateTournamentFormatResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.CreateTournamentFormatResponse.displayName = 'proto.tournament_management.CreateTournamentFormatResponse';
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
proto.tournament_management.GetTournamentFormatResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.GetTournamentFormatResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.GetTournamentFormatResponse.displayName = 'proto.tournament_management.GetTournamentFormatResponse';
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
proto.tournament_management.ListTournamentFormatsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tournament_management.ListTournamentFormatsResponse.repeatedFields_, null);
};
goog.inherits(proto.tournament_management.ListTournamentFormatsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.ListTournamentFormatsResponse.displayName = 'proto.tournament_management.ListTournamentFormatsResponse';
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
proto.tournament_management.UpdateTournamentFormatResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.UpdateTournamentFormatResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.UpdateTournamentFormatResponse.displayName = 'proto.tournament_management.UpdateTournamentFormatResponse';
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
proto.tournament_management.DeleteTournamentFormatResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.DeleteTournamentFormatResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.DeleteTournamentFormatResponse.displayName = 'proto.tournament_management.DeleteTournamentFormatResponse';
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
proto.tournament_management.CreateTournamentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tournament_management.CreateTournamentResponse.repeatedFields_, null);
};
goog.inherits(proto.tournament_management.CreateTournamentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.CreateTournamentResponse.displayName = 'proto.tournament_management.CreateTournamentResponse';
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
proto.tournament_management.GetTournamentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.GetTournamentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.GetTournamentResponse.displayName = 'proto.tournament_management.GetTournamentResponse';
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
proto.tournament_management.ListTournamentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tournament_management.ListTournamentsResponse.repeatedFields_, null);
};
goog.inherits(proto.tournament_management.ListTournamentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.ListTournamentsResponse.displayName = 'proto.tournament_management.ListTournamentsResponse';
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
proto.tournament_management.UpdateTournamentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.UpdateTournamentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.UpdateTournamentResponse.displayName = 'proto.tournament_management.UpdateTournamentResponse';
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
proto.tournament_management.DeleteTournamentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.DeleteTournamentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.DeleteTournamentResponse.displayName = 'proto.tournament_management.DeleteTournamentResponse';
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
proto.tournament_management.GetInvitationsByUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.GetInvitationsByUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.GetInvitationsByUserRequest.displayName = 'proto.tournament_management.GetInvitationsByUserRequest';
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
proto.tournament_management.GetInvitationsByUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tournament_management.GetInvitationsByUserResponse.repeatedFields_, null);
};
goog.inherits(proto.tournament_management.GetInvitationsByUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.GetInvitationsByUserResponse.displayName = 'proto.tournament_management.GetInvitationsByUserResponse';
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
proto.tournament_management.GetInvitationsByTournamentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.GetInvitationsByTournamentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.GetInvitationsByTournamentRequest.displayName = 'proto.tournament_management.GetInvitationsByTournamentRequest';
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
proto.tournament_management.InvitationInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.InvitationInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.InvitationInfo.displayName = 'proto.tournament_management.InvitationInfo';
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
proto.tournament_management.GetInvitationsByTournamentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tournament_management.GetInvitationsByTournamentResponse.repeatedFields_, null);
};
goog.inherits(proto.tournament_management.GetInvitationsByTournamentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.GetInvitationsByTournamentResponse.displayName = 'proto.tournament_management.GetInvitationsByTournamentResponse';
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
proto.tournament_management.UpdateInvitationStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.UpdateInvitationStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.UpdateInvitationStatusRequest.displayName = 'proto.tournament_management.UpdateInvitationStatusRequest';
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
proto.tournament_management.UpdateInvitationStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.UpdateInvitationStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.UpdateInvitationStatusResponse.displayName = 'proto.tournament_management.UpdateInvitationStatusResponse';
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
proto.tournament_management.BulkUpdateInvitationStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tournament_management.BulkUpdateInvitationStatusRequest.repeatedFields_, null);
};
goog.inherits(proto.tournament_management.BulkUpdateInvitationStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.BulkUpdateInvitationStatusRequest.displayName = 'proto.tournament_management.BulkUpdateInvitationStatusRequest';
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
proto.tournament_management.BulkUpdateInvitationStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tournament_management.BulkUpdateInvitationStatusResponse.repeatedFields_, null);
};
goog.inherits(proto.tournament_management.BulkUpdateInvitationStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.BulkUpdateInvitationStatusResponse.displayName = 'proto.tournament_management.BulkUpdateInvitationStatusResponse';
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
proto.tournament_management.ResendInvitationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.ResendInvitationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.ResendInvitationRequest.displayName = 'proto.tournament_management.ResendInvitationRequest';
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
proto.tournament_management.ResendInvitationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.ResendInvitationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.ResendInvitationResponse.displayName = 'proto.tournament_management.ResendInvitationResponse';
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
proto.tournament_management.BulkResendInvitationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tournament_management.BulkResendInvitationsRequest.repeatedFields_, null);
};
goog.inherits(proto.tournament_management.BulkResendInvitationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.BulkResendInvitationsRequest.displayName = 'proto.tournament_management.BulkResendInvitationsRequest';
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
proto.tournament_management.BulkResendInvitationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tournament_management.BulkResendInvitationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tournament_management.BulkResendInvitationsResponse.displayName = 'proto.tournament_management.BulkResendInvitationsResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tournament_management.LocalDetails.repeatedFields_ = [1,2];



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
proto.tournament_management.LocalDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.LocalDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.LocalDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.LocalDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    provincesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    districtsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.tournament_management.LocalDetails}
 */
proto.tournament_management.LocalDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.LocalDetails;
  return proto.tournament_management.LocalDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.LocalDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.LocalDetails}
 */
proto.tournament_management.LocalDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addProvinces(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addDistricts(value);
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
proto.tournament_management.LocalDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.LocalDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.LocalDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.LocalDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProvincesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getDistrictsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string provinces = 1;
 * @return {!Array<string>}
 */
proto.tournament_management.LocalDetails.prototype.getProvincesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.tournament_management.LocalDetails} returns this
 */
proto.tournament_management.LocalDetails.prototype.setProvincesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.tournament_management.LocalDetails} returns this
 */
proto.tournament_management.LocalDetails.prototype.addProvinces = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tournament_management.LocalDetails} returns this
 */
proto.tournament_management.LocalDetails.prototype.clearProvincesList = function() {
  return this.setProvincesList([]);
};


/**
 * repeated string districts = 2;
 * @return {!Array<string>}
 */
proto.tournament_management.LocalDetails.prototype.getDistrictsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.tournament_management.LocalDetails} returns this
 */
proto.tournament_management.LocalDetails.prototype.setDistrictsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.tournament_management.LocalDetails} returns this
 */
proto.tournament_management.LocalDetails.prototype.addDistricts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tournament_management.LocalDetails} returns this
 */
proto.tournament_management.LocalDetails.prototype.clearDistrictsList = function() {
  return this.setDistrictsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tournament_management.InternationalDetails.repeatedFields_ = [1,2];



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
proto.tournament_management.InternationalDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.InternationalDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.InternationalDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.InternationalDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    continentsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    countriesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.tournament_management.InternationalDetails}
 */
proto.tournament_management.InternationalDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.InternationalDetails;
  return proto.tournament_management.InternationalDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.InternationalDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.InternationalDetails}
 */
proto.tournament_management.InternationalDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addContinents(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addCountries(value);
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
proto.tournament_management.InternationalDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.InternationalDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.InternationalDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.InternationalDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContinentsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getCountriesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string continents = 1;
 * @return {!Array<string>}
 */
proto.tournament_management.InternationalDetails.prototype.getContinentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.tournament_management.InternationalDetails} returns this
 */
proto.tournament_management.InternationalDetails.prototype.setContinentsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.tournament_management.InternationalDetails} returns this
 */
proto.tournament_management.InternationalDetails.prototype.addContinents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tournament_management.InternationalDetails} returns this
 */
proto.tournament_management.InternationalDetails.prototype.clearContinentsList = function() {
  return this.setContinentsList([]);
};


/**
 * repeated string countries = 2;
 * @return {!Array<string>}
 */
proto.tournament_management.InternationalDetails.prototype.getCountriesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.tournament_management.InternationalDetails} returns this
 */
proto.tournament_management.InternationalDetails.prototype.setCountriesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.tournament_management.InternationalDetails} returns this
 */
proto.tournament_management.InternationalDetails.prototype.addCountries = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tournament_management.InternationalDetails} returns this
 */
proto.tournament_management.InternationalDetails.prototype.clearCountriesList = function() {
  return this.setCountriesList([]);
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
proto.tournament_management.League.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.League.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.League} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.League.toObject = function(includeInstance, msg) {
  var f, obj = {
    leagueId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    leagueType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    details: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.tournament_management.League}
 */
proto.tournament_management.League.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.League;
  return proto.tournament_management.League.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.League} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.League}
 */
proto.tournament_management.League.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLeagueId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!proto.tournament_management.LeagueType} */ (reader.readEnum());
      msg.setLeagueType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
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
proto.tournament_management.League.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.League.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.League} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.League.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeagueId();
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
  f = message.getLeagueType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 league_id = 1;
 * @return {number}
 */
proto.tournament_management.League.prototype.getLeagueId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.League} returns this
 */
proto.tournament_management.League.prototype.setLeagueId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.tournament_management.League.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.League} returns this
 */
proto.tournament_management.League.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional LeagueType league_type = 3;
 * @return {!proto.tournament_management.LeagueType}
 */
proto.tournament_management.League.prototype.getLeagueType = function() {
  return /** @type {!proto.tournament_management.LeagueType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.tournament_management.LeagueType} value
 * @return {!proto.tournament_management.League} returns this
 */
proto.tournament_management.League.prototype.setLeagueType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string details = 4;
 * @return {string}
 */
proto.tournament_management.League.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.League} returns this
 */
proto.tournament_management.League.prototype.setDetails = function(value) {
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
proto.tournament_management.TournamentFormat.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.TournamentFormat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.TournamentFormat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.TournamentFormat.toObject = function(includeInstance, msg) {
  var f, obj = {
    formatId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    formatName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    speakersPerTeam: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.tournament_management.TournamentFormat}
 */
proto.tournament_management.TournamentFormat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.TournamentFormat;
  return proto.tournament_management.TournamentFormat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.TournamentFormat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.TournamentFormat}
 */
proto.tournament_management.TournamentFormat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFormatId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormatName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSpeakersPerTeam(value);
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
proto.tournament_management.TournamentFormat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.TournamentFormat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.TournamentFormat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.TournamentFormat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFormatId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getFormatName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSpeakersPerTeam();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 format_id = 1;
 * @return {number}
 */
proto.tournament_management.TournamentFormat.prototype.getFormatId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.TournamentFormat} returns this
 */
proto.tournament_management.TournamentFormat.prototype.setFormatId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string format_name = 2;
 * @return {string}
 */
proto.tournament_management.TournamentFormat.prototype.getFormatName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.TournamentFormat} returns this
 */
proto.tournament_management.TournamentFormat.prototype.setFormatName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.tournament_management.TournamentFormat.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.TournamentFormat} returns this
 */
proto.tournament_management.TournamentFormat.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 speakers_per_team = 4;
 * @return {number}
 */
proto.tournament_management.TournamentFormat.prototype.getSpeakersPerTeam = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.TournamentFormat} returns this
 */
proto.tournament_management.TournamentFormat.prototype.setSpeakersPerTeam = function(value) {
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
proto.tournament_management.Tournament.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.Tournament.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.Tournament} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.Tournament.toObject = function(includeInstance, msg) {
  var f, obj = {
    tournamentId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    startDate: jspb.Message.getFieldWithDefault(msg, 3, ""),
    endDate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    location: jspb.Message.getFieldWithDefault(msg, 5, ""),
    formatId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    leagueId: jspb.Message.getFieldWithDefault(msg, 7, 0),
    coordinatorId: jspb.Message.getFieldWithDefault(msg, 8, 0),
    numberOfPreliminaryRounds: jspb.Message.getFieldWithDefault(msg, 9, 0),
    numberOfEliminationRounds: jspb.Message.getFieldWithDefault(msg, 10, 0),
    judgesPerDebatePreliminary: jspb.Message.getFieldWithDefault(msg, 11, 0),
    judgesPerDebateElimination: jspb.Message.getFieldWithDefault(msg, 12, 0),
    tournamentFee: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    imageUrl: jspb.Message.getFieldWithDefault(msg, 14, ""),
    numberOfSchools: jspb.Message.getFieldWithDefault(msg, 15, 0),
    numberOfTeams: jspb.Message.getFieldWithDefault(msg, 16, 0)
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
 * @return {!proto.tournament_management.Tournament}
 */
proto.tournament_management.Tournament.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.Tournament;
  return proto.tournament_management.Tournament.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.Tournament} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.Tournament}
 */
proto.tournament_management.Tournament.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartDate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndDate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFormatId(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLeagueId(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCoordinatorId(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberOfPreliminaryRounds(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberOfEliminationRounds(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setJudgesPerDebatePreliminary(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setJudgesPerDebateElimination(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTournamentFee(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageUrl(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberOfSchools(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberOfTeams(value);
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
proto.tournament_management.Tournament.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.Tournament.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.Tournament} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.Tournament.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTournamentId();
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
  f = message.getStartDate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEndDate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFormatId();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getLeagueId();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getCoordinatorId();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getNumberOfPreliminaryRounds();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getNumberOfEliminationRounds();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getJudgesPerDebatePreliminary();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getJudgesPerDebateElimination();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getTournamentFee();
  if (f !== 0.0) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = message.getImageUrl();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getNumberOfSchools();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = message.getNumberOfTeams();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
};


/**
 * optional int32 tournament_id = 1;
 * @return {number}
 */
proto.tournament_management.Tournament.prototype.getTournamentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.Tournament} returns this
 */
proto.tournament_management.Tournament.prototype.setTournamentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.tournament_management.Tournament.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.Tournament} returns this
 */
proto.tournament_management.Tournament.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string start_date = 3;
 * @return {string}
 */
proto.tournament_management.Tournament.prototype.getStartDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.Tournament} returns this
 */
proto.tournament_management.Tournament.prototype.setStartDate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string end_date = 4;
 * @return {string}
 */
proto.tournament_management.Tournament.prototype.getEndDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.Tournament} returns this
 */
proto.tournament_management.Tournament.prototype.setEndDate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string location = 5;
 * @return {string}
 */
proto.tournament_management.Tournament.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.Tournament} returns this
 */
proto.tournament_management.Tournament.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 format_id = 6;
 * @return {number}
 */
proto.tournament_management.Tournament.prototype.getFormatId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.Tournament} returns this
 */
proto.tournament_management.Tournament.prototype.setFormatId = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 league_id = 7;
 * @return {number}
 */
proto.tournament_management.Tournament.prototype.getLeagueId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.Tournament} returns this
 */
proto.tournament_management.Tournament.prototype.setLeagueId = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 coordinator_id = 8;
 * @return {number}
 */
proto.tournament_management.Tournament.prototype.getCoordinatorId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.Tournament} returns this
 */
proto.tournament_management.Tournament.prototype.setCoordinatorId = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 number_of_preliminary_rounds = 9;
 * @return {number}
 */
proto.tournament_management.Tournament.prototype.getNumberOfPreliminaryRounds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.Tournament} returns this
 */
proto.tournament_management.Tournament.prototype.setNumberOfPreliminaryRounds = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 number_of_elimination_rounds = 10;
 * @return {number}
 */
proto.tournament_management.Tournament.prototype.getNumberOfEliminationRounds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.Tournament} returns this
 */
proto.tournament_management.Tournament.prototype.setNumberOfEliminationRounds = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 judges_per_debate_preliminary = 11;
 * @return {number}
 */
proto.tournament_management.Tournament.prototype.getJudgesPerDebatePreliminary = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.Tournament} returns this
 */
proto.tournament_management.Tournament.prototype.setJudgesPerDebatePreliminary = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 judges_per_debate_elimination = 12;
 * @return {number}
 */
proto.tournament_management.Tournament.prototype.getJudgesPerDebateElimination = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.Tournament} returns this
 */
proto.tournament_management.Tournament.prototype.setJudgesPerDebateElimination = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional double tournament_fee = 13;
 * @return {number}
 */
proto.tournament_management.Tournament.prototype.getTournamentFee = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.Tournament} returns this
 */
proto.tournament_management.Tournament.prototype.setTournamentFee = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional string image_url = 14;
 * @return {string}
 */
proto.tournament_management.Tournament.prototype.getImageUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.Tournament} returns this
 */
proto.tournament_management.Tournament.prototype.setImageUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional int32 number_of_schools = 15;
 * @return {number}
 */
proto.tournament_management.Tournament.prototype.getNumberOfSchools = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.Tournament} returns this
 */
proto.tournament_management.Tournament.prototype.setNumberOfSchools = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional int32 number_of_teams = 16;
 * @return {number}
 */
proto.tournament_management.Tournament.prototype.getNumberOfTeams = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.Tournament} returns this
 */
proto.tournament_management.Tournament.prototype.setNumberOfTeams = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tournament_management.CreateLeagueRequest.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.tournament_management.CreateLeagueRequest.LeagueDetailsCase = {
  LEAGUE_DETAILS_NOT_SET: 0,
  LOCAL_DETAILS: 3,
  INTERNATIONAL_DETAILS: 4
};

/**
 * @return {proto.tournament_management.CreateLeagueRequest.LeagueDetailsCase}
 */
proto.tournament_management.CreateLeagueRequest.prototype.getLeagueDetailsCase = function() {
  return /** @type {proto.tournament_management.CreateLeagueRequest.LeagueDetailsCase} */(jspb.Message.computeOneofCase(this, proto.tournament_management.CreateLeagueRequest.oneofGroups_[0]));
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
proto.tournament_management.CreateLeagueRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.CreateLeagueRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.CreateLeagueRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.CreateLeagueRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    leagueType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    localDetails: (f = msg.getLocalDetails()) && proto.tournament_management.LocalDetails.toObject(includeInstance, f),
    internationalDetails: (f = msg.getInternationalDetails()) && proto.tournament_management.InternationalDetails.toObject(includeInstance, f),
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
 * @return {!proto.tournament_management.CreateLeagueRequest}
 */
proto.tournament_management.CreateLeagueRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.CreateLeagueRequest;
  return proto.tournament_management.CreateLeagueRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.CreateLeagueRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.CreateLeagueRequest}
 */
proto.tournament_management.CreateLeagueRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.tournament_management.LeagueType} */ (reader.readEnum());
      msg.setLeagueType(value);
      break;
    case 3:
      var value = new proto.tournament_management.LocalDetails;
      reader.readMessage(value,proto.tournament_management.LocalDetails.deserializeBinaryFromReader);
      msg.setLocalDetails(value);
      break;
    case 4:
      var value = new proto.tournament_management.InternationalDetails;
      reader.readMessage(value,proto.tournament_management.InternationalDetails.deserializeBinaryFromReader);
      msg.setInternationalDetails(value);
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
proto.tournament_management.CreateLeagueRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.CreateLeagueRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.CreateLeagueRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.CreateLeagueRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLeagueType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getLocalDetails();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tournament_management.LocalDetails.serializeBinaryToWriter
    );
  }
  f = message.getInternationalDetails();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tournament_management.InternationalDetails.serializeBinaryToWriter
    );
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
 * optional string name = 1;
 * @return {string}
 */
proto.tournament_management.CreateLeagueRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.CreateLeagueRequest} returns this
 */
proto.tournament_management.CreateLeagueRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional LeagueType league_type = 2;
 * @return {!proto.tournament_management.LeagueType}
 */
proto.tournament_management.CreateLeagueRequest.prototype.getLeagueType = function() {
  return /** @type {!proto.tournament_management.LeagueType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.tournament_management.LeagueType} value
 * @return {!proto.tournament_management.CreateLeagueRequest} returns this
 */
proto.tournament_management.CreateLeagueRequest.prototype.setLeagueType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional LocalDetails local_details = 3;
 * @return {?proto.tournament_management.LocalDetails}
 */
proto.tournament_management.CreateLeagueRequest.prototype.getLocalDetails = function() {
  return /** @type{?proto.tournament_management.LocalDetails} */ (
    jspb.Message.getWrapperField(this, proto.tournament_management.LocalDetails, 3));
};


/**
 * @param {?proto.tournament_management.LocalDetails|undefined} value
 * @return {!proto.tournament_management.CreateLeagueRequest} returns this
*/
proto.tournament_management.CreateLeagueRequest.prototype.setLocalDetails = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.tournament_management.CreateLeagueRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tournament_management.CreateLeagueRequest} returns this
 */
proto.tournament_management.CreateLeagueRequest.prototype.clearLocalDetails = function() {
  return this.setLocalDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tournament_management.CreateLeagueRequest.prototype.hasLocalDetails = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional InternationalDetails international_details = 4;
 * @return {?proto.tournament_management.InternationalDetails}
 */
proto.tournament_management.CreateLeagueRequest.prototype.getInternationalDetails = function() {
  return /** @type{?proto.tournament_management.InternationalDetails} */ (
    jspb.Message.getWrapperField(this, proto.tournament_management.InternationalDetails, 4));
};


/**
 * @param {?proto.tournament_management.InternationalDetails|undefined} value
 * @return {!proto.tournament_management.CreateLeagueRequest} returns this
*/
proto.tournament_management.CreateLeagueRequest.prototype.setInternationalDetails = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.tournament_management.CreateLeagueRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tournament_management.CreateLeagueRequest} returns this
 */
proto.tournament_management.CreateLeagueRequest.prototype.clearInternationalDetails = function() {
  return this.setInternationalDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tournament_management.CreateLeagueRequest.prototype.hasInternationalDetails = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string token = 5;
 * @return {string}
 */
proto.tournament_management.CreateLeagueRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.CreateLeagueRequest} returns this
 */
proto.tournament_management.CreateLeagueRequest.prototype.setToken = function(value) {
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
proto.tournament_management.GetLeagueRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.GetLeagueRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.GetLeagueRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.GetLeagueRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    leagueId: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.tournament_management.GetLeagueRequest}
 */
proto.tournament_management.GetLeagueRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.GetLeagueRequest;
  return proto.tournament_management.GetLeagueRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.GetLeagueRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.GetLeagueRequest}
 */
proto.tournament_management.GetLeagueRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLeagueId(value);
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
proto.tournament_management.GetLeagueRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.GetLeagueRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.GetLeagueRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.GetLeagueRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeagueId();
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
 * optional int32 league_id = 1;
 * @return {number}
 */
proto.tournament_management.GetLeagueRequest.prototype.getLeagueId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.GetLeagueRequest} returns this
 */
proto.tournament_management.GetLeagueRequest.prototype.setLeagueId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.tournament_management.GetLeagueRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.GetLeagueRequest} returns this
 */
proto.tournament_management.GetLeagueRequest.prototype.setToken = function(value) {
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
proto.tournament_management.ListLeaguesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.ListLeaguesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.ListLeaguesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.ListLeaguesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.tournament_management.ListLeaguesRequest}
 */
proto.tournament_management.ListLeaguesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.ListLeaguesRequest;
  return proto.tournament_management.ListLeaguesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.ListLeaguesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.ListLeaguesRequest}
 */
proto.tournament_management.ListLeaguesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageToken(value);
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
proto.tournament_management.ListLeaguesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.ListLeaguesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.ListLeaguesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.ListLeaguesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageToken();
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
 * optional int32 page_size = 1;
 * @return {number}
 */
proto.tournament_management.ListLeaguesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.ListLeaguesRequest} returns this
 */
proto.tournament_management.ListLeaguesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 page_token = 2;
 * @return {number}
 */
proto.tournament_management.ListLeaguesRequest.prototype.getPageToken = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.ListLeaguesRequest} returns this
 */
proto.tournament_management.ListLeaguesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string token = 3;
 * @return {string}
 */
proto.tournament_management.ListLeaguesRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.ListLeaguesRequest} returns this
 */
proto.tournament_management.ListLeaguesRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tournament_management.UpdateLeagueRequest.oneofGroups_ = [[4,5]];

/**
 * @enum {number}
 */
proto.tournament_management.UpdateLeagueRequest.LeagueDetailsCase = {
  LEAGUE_DETAILS_NOT_SET: 0,
  LOCAL_DETAILS: 4,
  INTERNATIONAL_DETAILS: 5
};

/**
 * @return {proto.tournament_management.UpdateLeagueRequest.LeagueDetailsCase}
 */
proto.tournament_management.UpdateLeagueRequest.prototype.getLeagueDetailsCase = function() {
  return /** @type {proto.tournament_management.UpdateLeagueRequest.LeagueDetailsCase} */(jspb.Message.computeOneofCase(this, proto.tournament_management.UpdateLeagueRequest.oneofGroups_[0]));
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
proto.tournament_management.UpdateLeagueRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.UpdateLeagueRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.UpdateLeagueRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.UpdateLeagueRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    leagueId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    leagueType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    localDetails: (f = msg.getLocalDetails()) && proto.tournament_management.LocalDetails.toObject(includeInstance, f),
    internationalDetails: (f = msg.getInternationalDetails()) && proto.tournament_management.InternationalDetails.toObject(includeInstance, f),
    token: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.tournament_management.UpdateLeagueRequest}
 */
proto.tournament_management.UpdateLeagueRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.UpdateLeagueRequest;
  return proto.tournament_management.UpdateLeagueRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.UpdateLeagueRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.UpdateLeagueRequest}
 */
proto.tournament_management.UpdateLeagueRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLeagueId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!proto.tournament_management.LeagueType} */ (reader.readEnum());
      msg.setLeagueType(value);
      break;
    case 4:
      var value = new proto.tournament_management.LocalDetails;
      reader.readMessage(value,proto.tournament_management.LocalDetails.deserializeBinaryFromReader);
      msg.setLocalDetails(value);
      break;
    case 5:
      var value = new proto.tournament_management.InternationalDetails;
      reader.readMessage(value,proto.tournament_management.InternationalDetails.deserializeBinaryFromReader);
      msg.setInternationalDetails(value);
      break;
    case 6:
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
proto.tournament_management.UpdateLeagueRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.UpdateLeagueRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.UpdateLeagueRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.UpdateLeagueRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeagueId();
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
  f = message.getLeagueType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getLocalDetails();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tournament_management.LocalDetails.serializeBinaryToWriter
    );
  }
  f = message.getInternationalDetails();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.tournament_management.InternationalDetails.serializeBinaryToWriter
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional int32 league_id = 1;
 * @return {number}
 */
proto.tournament_management.UpdateLeagueRequest.prototype.getLeagueId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.UpdateLeagueRequest} returns this
 */
proto.tournament_management.UpdateLeagueRequest.prototype.setLeagueId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.tournament_management.UpdateLeagueRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.UpdateLeagueRequest} returns this
 */
proto.tournament_management.UpdateLeagueRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional LeagueType league_type = 3;
 * @return {!proto.tournament_management.LeagueType}
 */
proto.tournament_management.UpdateLeagueRequest.prototype.getLeagueType = function() {
  return /** @type {!proto.tournament_management.LeagueType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.tournament_management.LeagueType} value
 * @return {!proto.tournament_management.UpdateLeagueRequest} returns this
 */
proto.tournament_management.UpdateLeagueRequest.prototype.setLeagueType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional LocalDetails local_details = 4;
 * @return {?proto.tournament_management.LocalDetails}
 */
proto.tournament_management.UpdateLeagueRequest.prototype.getLocalDetails = function() {
  return /** @type{?proto.tournament_management.LocalDetails} */ (
    jspb.Message.getWrapperField(this, proto.tournament_management.LocalDetails, 4));
};


/**
 * @param {?proto.tournament_management.LocalDetails|undefined} value
 * @return {!proto.tournament_management.UpdateLeagueRequest} returns this
*/
proto.tournament_management.UpdateLeagueRequest.prototype.setLocalDetails = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.tournament_management.UpdateLeagueRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tournament_management.UpdateLeagueRequest} returns this
 */
proto.tournament_management.UpdateLeagueRequest.prototype.clearLocalDetails = function() {
  return this.setLocalDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tournament_management.UpdateLeagueRequest.prototype.hasLocalDetails = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional InternationalDetails international_details = 5;
 * @return {?proto.tournament_management.InternationalDetails}
 */
proto.tournament_management.UpdateLeagueRequest.prototype.getInternationalDetails = function() {
  return /** @type{?proto.tournament_management.InternationalDetails} */ (
    jspb.Message.getWrapperField(this, proto.tournament_management.InternationalDetails, 5));
};


/**
 * @param {?proto.tournament_management.InternationalDetails|undefined} value
 * @return {!proto.tournament_management.UpdateLeagueRequest} returns this
*/
proto.tournament_management.UpdateLeagueRequest.prototype.setInternationalDetails = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.tournament_management.UpdateLeagueRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tournament_management.UpdateLeagueRequest} returns this
 */
proto.tournament_management.UpdateLeagueRequest.prototype.clearInternationalDetails = function() {
  return this.setInternationalDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tournament_management.UpdateLeagueRequest.prototype.hasInternationalDetails = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string token = 6;
 * @return {string}
 */
proto.tournament_management.UpdateLeagueRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.UpdateLeagueRequest} returns this
 */
proto.tournament_management.UpdateLeagueRequest.prototype.setToken = function(value) {
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
proto.tournament_management.DeleteLeagueRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.DeleteLeagueRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.DeleteLeagueRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.DeleteLeagueRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    leagueId: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.tournament_management.DeleteLeagueRequest}
 */
proto.tournament_management.DeleteLeagueRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.DeleteLeagueRequest;
  return proto.tournament_management.DeleteLeagueRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.DeleteLeagueRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.DeleteLeagueRequest}
 */
proto.tournament_management.DeleteLeagueRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLeagueId(value);
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
proto.tournament_management.DeleteLeagueRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.DeleteLeagueRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.DeleteLeagueRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.DeleteLeagueRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeagueId();
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
 * optional int32 league_id = 1;
 * @return {number}
 */
proto.tournament_management.DeleteLeagueRequest.prototype.getLeagueId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.DeleteLeagueRequest} returns this
 */
proto.tournament_management.DeleteLeagueRequest.prototype.setLeagueId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.tournament_management.DeleteLeagueRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.DeleteLeagueRequest} returns this
 */
proto.tournament_management.DeleteLeagueRequest.prototype.setToken = function(value) {
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
proto.tournament_management.CreateTournamentFormatRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.CreateTournamentFormatRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.CreateTournamentFormatRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.CreateTournamentFormatRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    formatName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    speakersPerTeam: jspb.Message.getFieldWithDefault(msg, 3, 0),
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
 * @return {!proto.tournament_management.CreateTournamentFormatRequest}
 */
proto.tournament_management.CreateTournamentFormatRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.CreateTournamentFormatRequest;
  return proto.tournament_management.CreateTournamentFormatRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.CreateTournamentFormatRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.CreateTournamentFormatRequest}
 */
proto.tournament_management.CreateTournamentFormatRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormatName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSpeakersPerTeam(value);
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
proto.tournament_management.CreateTournamentFormatRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.CreateTournamentFormatRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.CreateTournamentFormatRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.CreateTournamentFormatRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFormatName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSpeakersPerTeam();
  if (f !== 0) {
    writer.writeInt32(
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
 * optional string format_name = 1;
 * @return {string}
 */
proto.tournament_management.CreateTournamentFormatRequest.prototype.getFormatName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.CreateTournamentFormatRequest} returns this
 */
proto.tournament_management.CreateTournamentFormatRequest.prototype.setFormatName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.tournament_management.CreateTournamentFormatRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.CreateTournamentFormatRequest} returns this
 */
proto.tournament_management.CreateTournamentFormatRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 speakers_per_team = 3;
 * @return {number}
 */
proto.tournament_management.CreateTournamentFormatRequest.prototype.getSpeakersPerTeam = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.CreateTournamentFormatRequest} returns this
 */
proto.tournament_management.CreateTournamentFormatRequest.prototype.setSpeakersPerTeam = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string token = 4;
 * @return {string}
 */
proto.tournament_management.CreateTournamentFormatRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.CreateTournamentFormatRequest} returns this
 */
proto.tournament_management.CreateTournamentFormatRequest.prototype.setToken = function(value) {
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
proto.tournament_management.GetTournamentFormatRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.GetTournamentFormatRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.GetTournamentFormatRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.GetTournamentFormatRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    formatId: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.tournament_management.GetTournamentFormatRequest}
 */
proto.tournament_management.GetTournamentFormatRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.GetTournamentFormatRequest;
  return proto.tournament_management.GetTournamentFormatRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.GetTournamentFormatRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.GetTournamentFormatRequest}
 */
proto.tournament_management.GetTournamentFormatRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFormatId(value);
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
proto.tournament_management.GetTournamentFormatRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.GetTournamentFormatRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.GetTournamentFormatRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.GetTournamentFormatRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFormatId();
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
 * optional int32 format_id = 1;
 * @return {number}
 */
proto.tournament_management.GetTournamentFormatRequest.prototype.getFormatId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.GetTournamentFormatRequest} returns this
 */
proto.tournament_management.GetTournamentFormatRequest.prototype.setFormatId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.tournament_management.GetTournamentFormatRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.GetTournamentFormatRequest} returns this
 */
proto.tournament_management.GetTournamentFormatRequest.prototype.setToken = function(value) {
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
proto.tournament_management.ListTournamentFormatsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.ListTournamentFormatsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.ListTournamentFormatsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.ListTournamentFormatsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.tournament_management.ListTournamentFormatsRequest}
 */
proto.tournament_management.ListTournamentFormatsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.ListTournamentFormatsRequest;
  return proto.tournament_management.ListTournamentFormatsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.ListTournamentFormatsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.ListTournamentFormatsRequest}
 */
proto.tournament_management.ListTournamentFormatsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageToken(value);
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
proto.tournament_management.ListTournamentFormatsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.ListTournamentFormatsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.ListTournamentFormatsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.ListTournamentFormatsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageToken();
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
 * optional int32 page_size = 1;
 * @return {number}
 */
proto.tournament_management.ListTournamentFormatsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.ListTournamentFormatsRequest} returns this
 */
proto.tournament_management.ListTournamentFormatsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 page_token = 2;
 * @return {number}
 */
proto.tournament_management.ListTournamentFormatsRequest.prototype.getPageToken = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.ListTournamentFormatsRequest} returns this
 */
proto.tournament_management.ListTournamentFormatsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string token = 3;
 * @return {string}
 */
proto.tournament_management.ListTournamentFormatsRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.ListTournamentFormatsRequest} returns this
 */
proto.tournament_management.ListTournamentFormatsRequest.prototype.setToken = function(value) {
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
proto.tournament_management.UpdateTournamentFormatRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.UpdateTournamentFormatRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.UpdateTournamentFormatRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.UpdateTournamentFormatRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    formatId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    formatName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    speakersPerTeam: jspb.Message.getFieldWithDefault(msg, 4, 0),
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
 * @return {!proto.tournament_management.UpdateTournamentFormatRequest}
 */
proto.tournament_management.UpdateTournamentFormatRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.UpdateTournamentFormatRequest;
  return proto.tournament_management.UpdateTournamentFormatRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.UpdateTournamentFormatRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.UpdateTournamentFormatRequest}
 */
proto.tournament_management.UpdateTournamentFormatRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFormatId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormatName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSpeakersPerTeam(value);
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
proto.tournament_management.UpdateTournamentFormatRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.UpdateTournamentFormatRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.UpdateTournamentFormatRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.UpdateTournamentFormatRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFormatId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getFormatName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSpeakersPerTeam();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
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
 * optional int32 format_id = 1;
 * @return {number}
 */
proto.tournament_management.UpdateTournamentFormatRequest.prototype.getFormatId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.UpdateTournamentFormatRequest} returns this
 */
proto.tournament_management.UpdateTournamentFormatRequest.prototype.setFormatId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string format_name = 2;
 * @return {string}
 */
proto.tournament_management.UpdateTournamentFormatRequest.prototype.getFormatName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.UpdateTournamentFormatRequest} returns this
 */
proto.tournament_management.UpdateTournamentFormatRequest.prototype.setFormatName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.tournament_management.UpdateTournamentFormatRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.UpdateTournamentFormatRequest} returns this
 */
proto.tournament_management.UpdateTournamentFormatRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 speakers_per_team = 4;
 * @return {number}
 */
proto.tournament_management.UpdateTournamentFormatRequest.prototype.getSpeakersPerTeam = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.UpdateTournamentFormatRequest} returns this
 */
proto.tournament_management.UpdateTournamentFormatRequest.prototype.setSpeakersPerTeam = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string token = 5;
 * @return {string}
 */
proto.tournament_management.UpdateTournamentFormatRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.UpdateTournamentFormatRequest} returns this
 */
proto.tournament_management.UpdateTournamentFormatRequest.prototype.setToken = function(value) {
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
proto.tournament_management.DeleteTournamentFormatRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.DeleteTournamentFormatRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.DeleteTournamentFormatRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.DeleteTournamentFormatRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    formatId: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.tournament_management.DeleteTournamentFormatRequest}
 */
proto.tournament_management.DeleteTournamentFormatRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.DeleteTournamentFormatRequest;
  return proto.tournament_management.DeleteTournamentFormatRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.DeleteTournamentFormatRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.DeleteTournamentFormatRequest}
 */
proto.tournament_management.DeleteTournamentFormatRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFormatId(value);
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
proto.tournament_management.DeleteTournamentFormatRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.DeleteTournamentFormatRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.DeleteTournamentFormatRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.DeleteTournamentFormatRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFormatId();
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
 * optional int32 format_id = 1;
 * @return {number}
 */
proto.tournament_management.DeleteTournamentFormatRequest.prototype.getFormatId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.DeleteTournamentFormatRequest} returns this
 */
proto.tournament_management.DeleteTournamentFormatRequest.prototype.setFormatId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.tournament_management.DeleteTournamentFormatRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.DeleteTournamentFormatRequest} returns this
 */
proto.tournament_management.DeleteTournamentFormatRequest.prototype.setToken = function(value) {
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
proto.tournament_management.CreateTournamentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.CreateTournamentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.CreateTournamentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.CreateTournamentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    startDate: jspb.Message.getFieldWithDefault(msg, 2, ""),
    endDate: jspb.Message.getFieldWithDefault(msg, 3, ""),
    location: jspb.Message.getFieldWithDefault(msg, 4, ""),
    formatId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    leagueId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    coordinatorId: jspb.Message.getFieldWithDefault(msg, 7, 0),
    numberOfPreliminaryRounds: jspb.Message.getFieldWithDefault(msg, 8, 0),
    numberOfEliminationRounds: jspb.Message.getFieldWithDefault(msg, 9, 0),
    judgesPerDebatePreliminary: jspb.Message.getFieldWithDefault(msg, 10, 0),
    judgesPerDebateElimination: jspb.Message.getFieldWithDefault(msg, 11, 0),
    tournamentFee: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
    token: jspb.Message.getFieldWithDefault(msg, 13, ""),
    imageUrl: jspb.Message.getFieldWithDefault(msg, 14, "")
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
 * @return {!proto.tournament_management.CreateTournamentRequest}
 */
proto.tournament_management.CreateTournamentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.CreateTournamentRequest;
  return proto.tournament_management.CreateTournamentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.CreateTournamentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.CreateTournamentRequest}
 */
proto.tournament_management.CreateTournamentRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setStartDate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndDate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFormatId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLeagueId(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCoordinatorId(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberOfPreliminaryRounds(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberOfEliminationRounds(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setJudgesPerDebatePreliminary(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setJudgesPerDebateElimination(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTournamentFee(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageUrl(value);
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
proto.tournament_management.CreateTournamentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.CreateTournamentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.CreateTournamentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.CreateTournamentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFormatId();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getLeagueId();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getCoordinatorId();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getNumberOfPreliminaryRounds();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getNumberOfEliminationRounds();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getJudgesPerDebatePreliminary();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getJudgesPerDebateElimination();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getTournamentFee();
  if (f !== 0.0) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getImageUrl();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.tournament_management.CreateTournamentRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.CreateTournamentRequest} returns this
 */
proto.tournament_management.CreateTournamentRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string start_date = 2;
 * @return {string}
 */
proto.tournament_management.CreateTournamentRequest.prototype.getStartDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.CreateTournamentRequest} returns this
 */
proto.tournament_management.CreateTournamentRequest.prototype.setStartDate = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string end_date = 3;
 * @return {string}
 */
proto.tournament_management.CreateTournamentRequest.prototype.getEndDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.CreateTournamentRequest} returns this
 */
proto.tournament_management.CreateTournamentRequest.prototype.setEndDate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string location = 4;
 * @return {string}
 */
proto.tournament_management.CreateTournamentRequest.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.CreateTournamentRequest} returns this
 */
proto.tournament_management.CreateTournamentRequest.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 format_id = 5;
 * @return {number}
 */
proto.tournament_management.CreateTournamentRequest.prototype.getFormatId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.CreateTournamentRequest} returns this
 */
proto.tournament_management.CreateTournamentRequest.prototype.setFormatId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 league_id = 6;
 * @return {number}
 */
proto.tournament_management.CreateTournamentRequest.prototype.getLeagueId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.CreateTournamentRequest} returns this
 */
proto.tournament_management.CreateTournamentRequest.prototype.setLeagueId = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 coordinator_id = 7;
 * @return {number}
 */
proto.tournament_management.CreateTournamentRequest.prototype.getCoordinatorId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.CreateTournamentRequest} returns this
 */
proto.tournament_management.CreateTournamentRequest.prototype.setCoordinatorId = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 number_of_preliminary_rounds = 8;
 * @return {number}
 */
proto.tournament_management.CreateTournamentRequest.prototype.getNumberOfPreliminaryRounds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.CreateTournamentRequest} returns this
 */
proto.tournament_management.CreateTournamentRequest.prototype.setNumberOfPreliminaryRounds = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 number_of_elimination_rounds = 9;
 * @return {number}
 */
proto.tournament_management.CreateTournamentRequest.prototype.getNumberOfEliminationRounds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.CreateTournamentRequest} returns this
 */
proto.tournament_management.CreateTournamentRequest.prototype.setNumberOfEliminationRounds = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 judges_per_debate_preliminary = 10;
 * @return {number}
 */
proto.tournament_management.CreateTournamentRequest.prototype.getJudgesPerDebatePreliminary = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.CreateTournamentRequest} returns this
 */
proto.tournament_management.CreateTournamentRequest.prototype.setJudgesPerDebatePreliminary = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 judges_per_debate_elimination = 11;
 * @return {number}
 */
proto.tournament_management.CreateTournamentRequest.prototype.getJudgesPerDebateElimination = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.CreateTournamentRequest} returns this
 */
proto.tournament_management.CreateTournamentRequest.prototype.setJudgesPerDebateElimination = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional double tournament_fee = 12;
 * @return {number}
 */
proto.tournament_management.CreateTournamentRequest.prototype.getTournamentFee = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.CreateTournamentRequest} returns this
 */
proto.tournament_management.CreateTournamentRequest.prototype.setTournamentFee = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional string token = 13;
 * @return {string}
 */
proto.tournament_management.CreateTournamentRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.CreateTournamentRequest} returns this
 */
proto.tournament_management.CreateTournamentRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string image_url = 14;
 * @return {string}
 */
proto.tournament_management.CreateTournamentRequest.prototype.getImageUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.CreateTournamentRequest} returns this
 */
proto.tournament_management.CreateTournamentRequest.prototype.setImageUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
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
proto.tournament_management.GetTournamentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.GetTournamentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.GetTournamentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.GetTournamentRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tournament_management.GetTournamentRequest}
 */
proto.tournament_management.GetTournamentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.GetTournamentRequest;
  return proto.tournament_management.GetTournamentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.GetTournamentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.GetTournamentRequest}
 */
proto.tournament_management.GetTournamentRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tournament_management.GetTournamentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.GetTournamentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.GetTournamentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.GetTournamentRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tournament_management.GetTournamentRequest.prototype.getTournamentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.GetTournamentRequest} returns this
 */
proto.tournament_management.GetTournamentRequest.prototype.setTournamentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.tournament_management.GetTournamentRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.GetTournamentRequest} returns this
 */
proto.tournament_management.GetTournamentRequest.prototype.setToken = function(value) {
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
proto.tournament_management.ListTournamentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.ListTournamentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.ListTournamentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.ListTournamentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.tournament_management.ListTournamentsRequest}
 */
proto.tournament_management.ListTournamentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.ListTournamentsRequest;
  return proto.tournament_management.ListTournamentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.ListTournamentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.ListTournamentsRequest}
 */
proto.tournament_management.ListTournamentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageToken(value);
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
proto.tournament_management.ListTournamentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.ListTournamentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.ListTournamentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.ListTournamentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageToken();
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
 * optional int32 page_size = 1;
 * @return {number}
 */
proto.tournament_management.ListTournamentsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.ListTournamentsRequest} returns this
 */
proto.tournament_management.ListTournamentsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 page_token = 2;
 * @return {number}
 */
proto.tournament_management.ListTournamentsRequest.prototype.getPageToken = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.ListTournamentsRequest} returns this
 */
proto.tournament_management.ListTournamentsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string token = 3;
 * @return {string}
 */
proto.tournament_management.ListTournamentsRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.ListTournamentsRequest} returns this
 */
proto.tournament_management.ListTournamentsRequest.prototype.setToken = function(value) {
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
proto.tournament_management.UpdateTournamentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.UpdateTournamentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.UpdateTournamentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.UpdateTournamentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tournamentId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    startDate: jspb.Message.getFieldWithDefault(msg, 3, ""),
    endDate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    location: jspb.Message.getFieldWithDefault(msg, 5, ""),
    formatId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    leagueId: jspb.Message.getFieldWithDefault(msg, 7, 0),
    coordinatorId: jspb.Message.getFieldWithDefault(msg, 8, 0),
    numberOfPreliminaryRounds: jspb.Message.getFieldWithDefault(msg, 9, 0),
    numberOfEliminationRounds: jspb.Message.getFieldWithDefault(msg, 10, 0),
    judgesPerDebatePreliminary: jspb.Message.getFieldWithDefault(msg, 11, 0),
    judgesPerDebateElimination: jspb.Message.getFieldWithDefault(msg, 12, 0),
    tournamentFee: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    token: jspb.Message.getFieldWithDefault(msg, 14, ""),
    imageUrl: jspb.Message.getFieldWithDefault(msg, 15, "")
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
 * @return {!proto.tournament_management.UpdateTournamentRequest}
 */
proto.tournament_management.UpdateTournamentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.UpdateTournamentRequest;
  return proto.tournament_management.UpdateTournamentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.UpdateTournamentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.UpdateTournamentRequest}
 */
proto.tournament_management.UpdateTournamentRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartDate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndDate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFormatId(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLeagueId(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCoordinatorId(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberOfPreliminaryRounds(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberOfEliminationRounds(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setJudgesPerDebatePreliminary(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setJudgesPerDebateElimination(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTournamentFee(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageUrl(value);
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
proto.tournament_management.UpdateTournamentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.UpdateTournamentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.UpdateTournamentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.UpdateTournamentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTournamentId();
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
  f = message.getStartDate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEndDate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFormatId();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getLeagueId();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getCoordinatorId();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getNumberOfPreliminaryRounds();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getNumberOfEliminationRounds();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getJudgesPerDebatePreliminary();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getJudgesPerDebateElimination();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getTournamentFee();
  if (f !== 0.0) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getImageUrl();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
};


/**
 * optional int32 tournament_id = 1;
 * @return {number}
 */
proto.tournament_management.UpdateTournamentRequest.prototype.getTournamentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.UpdateTournamentRequest} returns this
 */
proto.tournament_management.UpdateTournamentRequest.prototype.setTournamentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.tournament_management.UpdateTournamentRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.UpdateTournamentRequest} returns this
 */
proto.tournament_management.UpdateTournamentRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string start_date = 3;
 * @return {string}
 */
proto.tournament_management.UpdateTournamentRequest.prototype.getStartDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.UpdateTournamentRequest} returns this
 */
proto.tournament_management.UpdateTournamentRequest.prototype.setStartDate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string end_date = 4;
 * @return {string}
 */
proto.tournament_management.UpdateTournamentRequest.prototype.getEndDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.UpdateTournamentRequest} returns this
 */
proto.tournament_management.UpdateTournamentRequest.prototype.setEndDate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string location = 5;
 * @return {string}
 */
proto.tournament_management.UpdateTournamentRequest.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.UpdateTournamentRequest} returns this
 */
proto.tournament_management.UpdateTournamentRequest.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 format_id = 6;
 * @return {number}
 */
proto.tournament_management.UpdateTournamentRequest.prototype.getFormatId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.UpdateTournamentRequest} returns this
 */
proto.tournament_management.UpdateTournamentRequest.prototype.setFormatId = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 league_id = 7;
 * @return {number}
 */
proto.tournament_management.UpdateTournamentRequest.prototype.getLeagueId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.UpdateTournamentRequest} returns this
 */
proto.tournament_management.UpdateTournamentRequest.prototype.setLeagueId = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 coordinator_id = 8;
 * @return {number}
 */
proto.tournament_management.UpdateTournamentRequest.prototype.getCoordinatorId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.UpdateTournamentRequest} returns this
 */
proto.tournament_management.UpdateTournamentRequest.prototype.setCoordinatorId = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 number_of_preliminary_rounds = 9;
 * @return {number}
 */
proto.tournament_management.UpdateTournamentRequest.prototype.getNumberOfPreliminaryRounds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.UpdateTournamentRequest} returns this
 */
proto.tournament_management.UpdateTournamentRequest.prototype.setNumberOfPreliminaryRounds = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 number_of_elimination_rounds = 10;
 * @return {number}
 */
proto.tournament_management.UpdateTournamentRequest.prototype.getNumberOfEliminationRounds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.UpdateTournamentRequest} returns this
 */
proto.tournament_management.UpdateTournamentRequest.prototype.setNumberOfEliminationRounds = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 judges_per_debate_preliminary = 11;
 * @return {number}
 */
proto.tournament_management.UpdateTournamentRequest.prototype.getJudgesPerDebatePreliminary = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.UpdateTournamentRequest} returns this
 */
proto.tournament_management.UpdateTournamentRequest.prototype.setJudgesPerDebatePreliminary = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 judges_per_debate_elimination = 12;
 * @return {number}
 */
proto.tournament_management.UpdateTournamentRequest.prototype.getJudgesPerDebateElimination = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.UpdateTournamentRequest} returns this
 */
proto.tournament_management.UpdateTournamentRequest.prototype.setJudgesPerDebateElimination = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional double tournament_fee = 13;
 * @return {number}
 */
proto.tournament_management.UpdateTournamentRequest.prototype.getTournamentFee = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.UpdateTournamentRequest} returns this
 */
proto.tournament_management.UpdateTournamentRequest.prototype.setTournamentFee = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional string token = 14;
 * @return {string}
 */
proto.tournament_management.UpdateTournamentRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.UpdateTournamentRequest} returns this
 */
proto.tournament_management.UpdateTournamentRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string image_url = 15;
 * @return {string}
 */
proto.tournament_management.UpdateTournamentRequest.prototype.getImageUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.UpdateTournamentRequest} returns this
 */
proto.tournament_management.UpdateTournamentRequest.prototype.setImageUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
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
proto.tournament_management.DeleteTournamentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.DeleteTournamentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.DeleteTournamentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.DeleteTournamentRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tournament_management.DeleteTournamentRequest}
 */
proto.tournament_management.DeleteTournamentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.DeleteTournamentRequest;
  return proto.tournament_management.DeleteTournamentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.DeleteTournamentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.DeleteTournamentRequest}
 */
proto.tournament_management.DeleteTournamentRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tournament_management.DeleteTournamentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.DeleteTournamentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.DeleteTournamentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.DeleteTournamentRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tournament_management.DeleteTournamentRequest.prototype.getTournamentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.DeleteTournamentRequest} returns this
 */
proto.tournament_management.DeleteTournamentRequest.prototype.setTournamentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.tournament_management.DeleteTournamentRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.DeleteTournamentRequest} returns this
 */
proto.tournament_management.DeleteTournamentRequest.prototype.setToken = function(value) {
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
proto.tournament_management.CreateLeagueResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.CreateLeagueResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.CreateLeagueResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.CreateLeagueResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    league: (f = msg.getLeague()) && proto.tournament_management.League.toObject(includeInstance, f)
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
 * @return {!proto.tournament_management.CreateLeagueResponse}
 */
proto.tournament_management.CreateLeagueResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.CreateLeagueResponse;
  return proto.tournament_management.CreateLeagueResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.CreateLeagueResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.CreateLeagueResponse}
 */
proto.tournament_management.CreateLeagueResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tournament_management.League;
      reader.readMessage(value,proto.tournament_management.League.deserializeBinaryFromReader);
      msg.setLeague(value);
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
proto.tournament_management.CreateLeagueResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.CreateLeagueResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.CreateLeagueResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.CreateLeagueResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeague();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tournament_management.League.serializeBinaryToWriter
    );
  }
};


/**
 * optional League league = 1;
 * @return {?proto.tournament_management.League}
 */
proto.tournament_management.CreateLeagueResponse.prototype.getLeague = function() {
  return /** @type{?proto.tournament_management.League} */ (
    jspb.Message.getWrapperField(this, proto.tournament_management.League, 1));
};


/**
 * @param {?proto.tournament_management.League|undefined} value
 * @return {!proto.tournament_management.CreateLeagueResponse} returns this
*/
proto.tournament_management.CreateLeagueResponse.prototype.setLeague = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tournament_management.CreateLeagueResponse} returns this
 */
proto.tournament_management.CreateLeagueResponse.prototype.clearLeague = function() {
  return this.setLeague(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tournament_management.CreateLeagueResponse.prototype.hasLeague = function() {
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
proto.tournament_management.GetLeagueResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.GetLeagueResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.GetLeagueResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.GetLeagueResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    league: (f = msg.getLeague()) && proto.tournament_management.League.toObject(includeInstance, f)
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
 * @return {!proto.tournament_management.GetLeagueResponse}
 */
proto.tournament_management.GetLeagueResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.GetLeagueResponse;
  return proto.tournament_management.GetLeagueResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.GetLeagueResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.GetLeagueResponse}
 */
proto.tournament_management.GetLeagueResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tournament_management.League;
      reader.readMessage(value,proto.tournament_management.League.deserializeBinaryFromReader);
      msg.setLeague(value);
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
proto.tournament_management.GetLeagueResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.GetLeagueResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.GetLeagueResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.GetLeagueResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeague();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tournament_management.League.serializeBinaryToWriter
    );
  }
};


/**
 * optional League league = 1;
 * @return {?proto.tournament_management.League}
 */
proto.tournament_management.GetLeagueResponse.prototype.getLeague = function() {
  return /** @type{?proto.tournament_management.League} */ (
    jspb.Message.getWrapperField(this, proto.tournament_management.League, 1));
};


/**
 * @param {?proto.tournament_management.League|undefined} value
 * @return {!proto.tournament_management.GetLeagueResponse} returns this
*/
proto.tournament_management.GetLeagueResponse.prototype.setLeague = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tournament_management.GetLeagueResponse} returns this
 */
proto.tournament_management.GetLeagueResponse.prototype.clearLeague = function() {
  return this.setLeague(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tournament_management.GetLeagueResponse.prototype.hasLeague = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tournament_management.ListLeaguesResponse.repeatedFields_ = [1];



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
proto.tournament_management.ListLeaguesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.ListLeaguesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.ListLeaguesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.ListLeaguesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    leaguesList: jspb.Message.toObjectList(msg.getLeaguesList(),
    proto.tournament_management.League.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.tournament_management.ListLeaguesResponse}
 */
proto.tournament_management.ListLeaguesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.ListLeaguesResponse;
  return proto.tournament_management.ListLeaguesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.ListLeaguesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.ListLeaguesResponse}
 */
proto.tournament_management.ListLeaguesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tournament_management.League;
      reader.readMessage(value,proto.tournament_management.League.deserializeBinaryFromReader);
      msg.addLeagues(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNextPageToken(value);
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
proto.tournament_management.ListLeaguesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.ListLeaguesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.ListLeaguesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.ListLeaguesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeaguesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tournament_management.League.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * repeated League leagues = 1;
 * @return {!Array<!proto.tournament_management.League>}
 */
proto.tournament_management.ListLeaguesResponse.prototype.getLeaguesList = function() {
  return /** @type{!Array<!proto.tournament_management.League>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tournament_management.League, 1));
};


/**
 * @param {!Array<!proto.tournament_management.League>} value
 * @return {!proto.tournament_management.ListLeaguesResponse} returns this
*/
proto.tournament_management.ListLeaguesResponse.prototype.setLeaguesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tournament_management.League=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tournament_management.League}
 */
proto.tournament_management.ListLeaguesResponse.prototype.addLeagues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tournament_management.League, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tournament_management.ListLeaguesResponse} returns this
 */
proto.tournament_management.ListLeaguesResponse.prototype.clearLeaguesList = function() {
  return this.setLeaguesList([]);
};


/**
 * optional int32 next_page_token = 2;
 * @return {number}
 */
proto.tournament_management.ListLeaguesResponse.prototype.getNextPageToken = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.ListLeaguesResponse} returns this
 */
proto.tournament_management.ListLeaguesResponse.prototype.setNextPageToken = function(value) {
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
proto.tournament_management.UpdateLeagueResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.UpdateLeagueResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.UpdateLeagueResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.UpdateLeagueResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    league: (f = msg.getLeague()) && proto.tournament_management.League.toObject(includeInstance, f)
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
 * @return {!proto.tournament_management.UpdateLeagueResponse}
 */
proto.tournament_management.UpdateLeagueResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.UpdateLeagueResponse;
  return proto.tournament_management.UpdateLeagueResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.UpdateLeagueResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.UpdateLeagueResponse}
 */
proto.tournament_management.UpdateLeagueResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tournament_management.League;
      reader.readMessage(value,proto.tournament_management.League.deserializeBinaryFromReader);
      msg.setLeague(value);
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
proto.tournament_management.UpdateLeagueResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.UpdateLeagueResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.UpdateLeagueResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.UpdateLeagueResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeague();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tournament_management.League.serializeBinaryToWriter
    );
  }
};


/**
 * optional League league = 1;
 * @return {?proto.tournament_management.League}
 */
proto.tournament_management.UpdateLeagueResponse.prototype.getLeague = function() {
  return /** @type{?proto.tournament_management.League} */ (
    jspb.Message.getWrapperField(this, proto.tournament_management.League, 1));
};


/**
 * @param {?proto.tournament_management.League|undefined} value
 * @return {!proto.tournament_management.UpdateLeagueResponse} returns this
*/
proto.tournament_management.UpdateLeagueResponse.prototype.setLeague = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tournament_management.UpdateLeagueResponse} returns this
 */
proto.tournament_management.UpdateLeagueResponse.prototype.clearLeague = function() {
  return this.setLeague(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tournament_management.UpdateLeagueResponse.prototype.hasLeague = function() {
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
proto.tournament_management.DeleteLeagueResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.DeleteLeagueResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.DeleteLeagueResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.DeleteLeagueResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tournament_management.DeleteLeagueResponse}
 */
proto.tournament_management.DeleteLeagueResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.DeleteLeagueResponse;
  return proto.tournament_management.DeleteLeagueResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.DeleteLeagueResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.DeleteLeagueResponse}
 */
proto.tournament_management.DeleteLeagueResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tournament_management.DeleteLeagueResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.DeleteLeagueResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.DeleteLeagueResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.DeleteLeagueResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.tournament_management.DeleteLeagueResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tournament_management.DeleteLeagueResponse} returns this
 */
proto.tournament_management.DeleteLeagueResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.tournament_management.DeleteLeagueResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.DeleteLeagueResponse} returns this
 */
proto.tournament_management.DeleteLeagueResponse.prototype.setMessage = function(value) {
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
proto.tournament_management.CreateTournamentFormatResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.CreateTournamentFormatResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.CreateTournamentFormatResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.CreateTournamentFormatResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    format: (f = msg.getFormat()) && proto.tournament_management.TournamentFormat.toObject(includeInstance, f)
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
 * @return {!proto.tournament_management.CreateTournamentFormatResponse}
 */
proto.tournament_management.CreateTournamentFormatResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.CreateTournamentFormatResponse;
  return proto.tournament_management.CreateTournamentFormatResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.CreateTournamentFormatResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.CreateTournamentFormatResponse}
 */
proto.tournament_management.CreateTournamentFormatResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tournament_management.TournamentFormat;
      reader.readMessage(value,proto.tournament_management.TournamentFormat.deserializeBinaryFromReader);
      msg.setFormat(value);
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
proto.tournament_management.CreateTournamentFormatResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.CreateTournamentFormatResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.CreateTournamentFormatResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.CreateTournamentFormatResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFormat();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tournament_management.TournamentFormat.serializeBinaryToWriter
    );
  }
};


/**
 * optional TournamentFormat format = 1;
 * @return {?proto.tournament_management.TournamentFormat}
 */
proto.tournament_management.CreateTournamentFormatResponse.prototype.getFormat = function() {
  return /** @type{?proto.tournament_management.TournamentFormat} */ (
    jspb.Message.getWrapperField(this, proto.tournament_management.TournamentFormat, 1));
};


/**
 * @param {?proto.tournament_management.TournamentFormat|undefined} value
 * @return {!proto.tournament_management.CreateTournamentFormatResponse} returns this
*/
proto.tournament_management.CreateTournamentFormatResponse.prototype.setFormat = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tournament_management.CreateTournamentFormatResponse} returns this
 */
proto.tournament_management.CreateTournamentFormatResponse.prototype.clearFormat = function() {
  return this.setFormat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tournament_management.CreateTournamentFormatResponse.prototype.hasFormat = function() {
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
proto.tournament_management.GetTournamentFormatResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.GetTournamentFormatResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.GetTournamentFormatResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.GetTournamentFormatResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    format: (f = msg.getFormat()) && proto.tournament_management.TournamentFormat.toObject(includeInstance, f)
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
 * @return {!proto.tournament_management.GetTournamentFormatResponse}
 */
proto.tournament_management.GetTournamentFormatResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.GetTournamentFormatResponse;
  return proto.tournament_management.GetTournamentFormatResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.GetTournamentFormatResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.GetTournamentFormatResponse}
 */
proto.tournament_management.GetTournamentFormatResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tournament_management.TournamentFormat;
      reader.readMessage(value,proto.tournament_management.TournamentFormat.deserializeBinaryFromReader);
      msg.setFormat(value);
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
proto.tournament_management.GetTournamentFormatResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.GetTournamentFormatResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.GetTournamentFormatResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.GetTournamentFormatResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFormat();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tournament_management.TournamentFormat.serializeBinaryToWriter
    );
  }
};


/**
 * optional TournamentFormat format = 1;
 * @return {?proto.tournament_management.TournamentFormat}
 */
proto.tournament_management.GetTournamentFormatResponse.prototype.getFormat = function() {
  return /** @type{?proto.tournament_management.TournamentFormat} */ (
    jspb.Message.getWrapperField(this, proto.tournament_management.TournamentFormat, 1));
};


/**
 * @param {?proto.tournament_management.TournamentFormat|undefined} value
 * @return {!proto.tournament_management.GetTournamentFormatResponse} returns this
*/
proto.tournament_management.GetTournamentFormatResponse.prototype.setFormat = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tournament_management.GetTournamentFormatResponse} returns this
 */
proto.tournament_management.GetTournamentFormatResponse.prototype.clearFormat = function() {
  return this.setFormat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tournament_management.GetTournamentFormatResponse.prototype.hasFormat = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tournament_management.ListTournamentFormatsResponse.repeatedFields_ = [1];



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
proto.tournament_management.ListTournamentFormatsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.ListTournamentFormatsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.ListTournamentFormatsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.ListTournamentFormatsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    formatsList: jspb.Message.toObjectList(msg.getFormatsList(),
    proto.tournament_management.TournamentFormat.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.tournament_management.ListTournamentFormatsResponse}
 */
proto.tournament_management.ListTournamentFormatsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.ListTournamentFormatsResponse;
  return proto.tournament_management.ListTournamentFormatsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.ListTournamentFormatsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.ListTournamentFormatsResponse}
 */
proto.tournament_management.ListTournamentFormatsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tournament_management.TournamentFormat;
      reader.readMessage(value,proto.tournament_management.TournamentFormat.deserializeBinaryFromReader);
      msg.addFormats(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNextPageToken(value);
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
proto.tournament_management.ListTournamentFormatsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.ListTournamentFormatsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.ListTournamentFormatsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.ListTournamentFormatsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFormatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tournament_management.TournamentFormat.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * repeated TournamentFormat formats = 1;
 * @return {!Array<!proto.tournament_management.TournamentFormat>}
 */
proto.tournament_management.ListTournamentFormatsResponse.prototype.getFormatsList = function() {
  return /** @type{!Array<!proto.tournament_management.TournamentFormat>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tournament_management.TournamentFormat, 1));
};


/**
 * @param {!Array<!proto.tournament_management.TournamentFormat>} value
 * @return {!proto.tournament_management.ListTournamentFormatsResponse} returns this
*/
proto.tournament_management.ListTournamentFormatsResponse.prototype.setFormatsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tournament_management.TournamentFormat=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tournament_management.TournamentFormat}
 */
proto.tournament_management.ListTournamentFormatsResponse.prototype.addFormats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tournament_management.TournamentFormat, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tournament_management.ListTournamentFormatsResponse} returns this
 */
proto.tournament_management.ListTournamentFormatsResponse.prototype.clearFormatsList = function() {
  return this.setFormatsList([]);
};


/**
 * optional int32 next_page_token = 2;
 * @return {number}
 */
proto.tournament_management.ListTournamentFormatsResponse.prototype.getNextPageToken = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.ListTournamentFormatsResponse} returns this
 */
proto.tournament_management.ListTournamentFormatsResponse.prototype.setNextPageToken = function(value) {
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
proto.tournament_management.UpdateTournamentFormatResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.UpdateTournamentFormatResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.UpdateTournamentFormatResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.UpdateTournamentFormatResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    format: (f = msg.getFormat()) && proto.tournament_management.TournamentFormat.toObject(includeInstance, f)
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
 * @return {!proto.tournament_management.UpdateTournamentFormatResponse}
 */
proto.tournament_management.UpdateTournamentFormatResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.UpdateTournamentFormatResponse;
  return proto.tournament_management.UpdateTournamentFormatResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.UpdateTournamentFormatResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.UpdateTournamentFormatResponse}
 */
proto.tournament_management.UpdateTournamentFormatResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tournament_management.TournamentFormat;
      reader.readMessage(value,proto.tournament_management.TournamentFormat.deserializeBinaryFromReader);
      msg.setFormat(value);
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
proto.tournament_management.UpdateTournamentFormatResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.UpdateTournamentFormatResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.UpdateTournamentFormatResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.UpdateTournamentFormatResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFormat();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tournament_management.TournamentFormat.serializeBinaryToWriter
    );
  }
};


/**
 * optional TournamentFormat format = 1;
 * @return {?proto.tournament_management.TournamentFormat}
 */
proto.tournament_management.UpdateTournamentFormatResponse.prototype.getFormat = function() {
  return /** @type{?proto.tournament_management.TournamentFormat} */ (
    jspb.Message.getWrapperField(this, proto.tournament_management.TournamentFormat, 1));
};


/**
 * @param {?proto.tournament_management.TournamentFormat|undefined} value
 * @return {!proto.tournament_management.UpdateTournamentFormatResponse} returns this
*/
proto.tournament_management.UpdateTournamentFormatResponse.prototype.setFormat = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tournament_management.UpdateTournamentFormatResponse} returns this
 */
proto.tournament_management.UpdateTournamentFormatResponse.prototype.clearFormat = function() {
  return this.setFormat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tournament_management.UpdateTournamentFormatResponse.prototype.hasFormat = function() {
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
proto.tournament_management.DeleteTournamentFormatResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.DeleteTournamentFormatResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.DeleteTournamentFormatResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.DeleteTournamentFormatResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tournament_management.DeleteTournamentFormatResponse}
 */
proto.tournament_management.DeleteTournamentFormatResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.DeleteTournamentFormatResponse;
  return proto.tournament_management.DeleteTournamentFormatResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.DeleteTournamentFormatResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.DeleteTournamentFormatResponse}
 */
proto.tournament_management.DeleteTournamentFormatResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tournament_management.DeleteTournamentFormatResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.DeleteTournamentFormatResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.DeleteTournamentFormatResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.DeleteTournamentFormatResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.tournament_management.DeleteTournamentFormatResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tournament_management.DeleteTournamentFormatResponse} returns this
 */
proto.tournament_management.DeleteTournamentFormatResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.tournament_management.DeleteTournamentFormatResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.DeleteTournamentFormatResponse} returns this
 */
proto.tournament_management.DeleteTournamentFormatResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tournament_management.CreateTournamentResponse.repeatedFields_ = [2];



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
proto.tournament_management.CreateTournamentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.CreateTournamentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.CreateTournamentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.CreateTournamentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tournament: (f = msg.getTournament()) && proto.tournament_management.Tournament.toObject(includeInstance, f),
    invitationIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.tournament_management.CreateTournamentResponse}
 */
proto.tournament_management.CreateTournamentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.CreateTournamentResponse;
  return proto.tournament_management.CreateTournamentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.CreateTournamentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.CreateTournamentResponse}
 */
proto.tournament_management.CreateTournamentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tournament_management.Tournament;
      reader.readMessage(value,proto.tournament_management.Tournament.deserializeBinaryFromReader);
      msg.setTournament(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addInvitationIds(values[i]);
      }
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
proto.tournament_management.CreateTournamentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.CreateTournamentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.CreateTournamentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.CreateTournamentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTournament();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tournament_management.Tournament.serializeBinaryToWriter
    );
  }
  f = message.getInvitationIdsList();
  if (f.length > 0) {
    writer.writePackedInt32(
      2,
      f
    );
  }
};


/**
 * optional Tournament tournament = 1;
 * @return {?proto.tournament_management.Tournament}
 */
proto.tournament_management.CreateTournamentResponse.prototype.getTournament = function() {
  return /** @type{?proto.tournament_management.Tournament} */ (
    jspb.Message.getWrapperField(this, proto.tournament_management.Tournament, 1));
};


/**
 * @param {?proto.tournament_management.Tournament|undefined} value
 * @return {!proto.tournament_management.CreateTournamentResponse} returns this
*/
proto.tournament_management.CreateTournamentResponse.prototype.setTournament = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tournament_management.CreateTournamentResponse} returns this
 */
proto.tournament_management.CreateTournamentResponse.prototype.clearTournament = function() {
  return this.setTournament(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tournament_management.CreateTournamentResponse.prototype.hasTournament = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated int32 invitation_ids = 2;
 * @return {!Array<number>}
 */
proto.tournament_management.CreateTournamentResponse.prototype.getInvitationIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.tournament_management.CreateTournamentResponse} returns this
 */
proto.tournament_management.CreateTournamentResponse.prototype.setInvitationIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.tournament_management.CreateTournamentResponse} returns this
 */
proto.tournament_management.CreateTournamentResponse.prototype.addInvitationIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tournament_management.CreateTournamentResponse} returns this
 */
proto.tournament_management.CreateTournamentResponse.prototype.clearInvitationIdsList = function() {
  return this.setInvitationIdsList([]);
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
proto.tournament_management.GetTournamentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.GetTournamentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.GetTournamentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.GetTournamentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tournament: (f = msg.getTournament()) && proto.tournament_management.Tournament.toObject(includeInstance, f)
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
 * @return {!proto.tournament_management.GetTournamentResponse}
 */
proto.tournament_management.GetTournamentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.GetTournamentResponse;
  return proto.tournament_management.GetTournamentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.GetTournamentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.GetTournamentResponse}
 */
proto.tournament_management.GetTournamentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tournament_management.Tournament;
      reader.readMessage(value,proto.tournament_management.Tournament.deserializeBinaryFromReader);
      msg.setTournament(value);
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
proto.tournament_management.GetTournamentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.GetTournamentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.GetTournamentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.GetTournamentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTournament();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tournament_management.Tournament.serializeBinaryToWriter
    );
  }
};


/**
 * optional Tournament tournament = 1;
 * @return {?proto.tournament_management.Tournament}
 */
proto.tournament_management.GetTournamentResponse.prototype.getTournament = function() {
  return /** @type{?proto.tournament_management.Tournament} */ (
    jspb.Message.getWrapperField(this, proto.tournament_management.Tournament, 1));
};


/**
 * @param {?proto.tournament_management.Tournament|undefined} value
 * @return {!proto.tournament_management.GetTournamentResponse} returns this
*/
proto.tournament_management.GetTournamentResponse.prototype.setTournament = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tournament_management.GetTournamentResponse} returns this
 */
proto.tournament_management.GetTournamentResponse.prototype.clearTournament = function() {
  return this.setTournament(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tournament_management.GetTournamentResponse.prototype.hasTournament = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tournament_management.ListTournamentsResponse.repeatedFields_ = [1];



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
proto.tournament_management.ListTournamentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.ListTournamentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.ListTournamentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.ListTournamentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tournamentsList: jspb.Message.toObjectList(msg.getTournamentsList(),
    proto.tournament_management.Tournament.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.tournament_management.ListTournamentsResponse}
 */
proto.tournament_management.ListTournamentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.ListTournamentsResponse;
  return proto.tournament_management.ListTournamentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.ListTournamentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.ListTournamentsResponse}
 */
proto.tournament_management.ListTournamentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tournament_management.Tournament;
      reader.readMessage(value,proto.tournament_management.Tournament.deserializeBinaryFromReader);
      msg.addTournaments(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNextPageToken(value);
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
proto.tournament_management.ListTournamentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.ListTournamentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.ListTournamentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.ListTournamentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTournamentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tournament_management.Tournament.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * repeated Tournament tournaments = 1;
 * @return {!Array<!proto.tournament_management.Tournament>}
 */
proto.tournament_management.ListTournamentsResponse.prototype.getTournamentsList = function() {
  return /** @type{!Array<!proto.tournament_management.Tournament>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tournament_management.Tournament, 1));
};


/**
 * @param {!Array<!proto.tournament_management.Tournament>} value
 * @return {!proto.tournament_management.ListTournamentsResponse} returns this
*/
proto.tournament_management.ListTournamentsResponse.prototype.setTournamentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tournament_management.Tournament=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tournament_management.Tournament}
 */
proto.tournament_management.ListTournamentsResponse.prototype.addTournaments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tournament_management.Tournament, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tournament_management.ListTournamentsResponse} returns this
 */
proto.tournament_management.ListTournamentsResponse.prototype.clearTournamentsList = function() {
  return this.setTournamentsList([]);
};


/**
 * optional int32 next_page_token = 2;
 * @return {number}
 */
proto.tournament_management.ListTournamentsResponse.prototype.getNextPageToken = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.ListTournamentsResponse} returns this
 */
proto.tournament_management.ListTournamentsResponse.prototype.setNextPageToken = function(value) {
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
proto.tournament_management.UpdateTournamentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.UpdateTournamentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.UpdateTournamentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.UpdateTournamentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tournament: (f = msg.getTournament()) && proto.tournament_management.Tournament.toObject(includeInstance, f)
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
 * @return {!proto.tournament_management.UpdateTournamentResponse}
 */
proto.tournament_management.UpdateTournamentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.UpdateTournamentResponse;
  return proto.tournament_management.UpdateTournamentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.UpdateTournamentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.UpdateTournamentResponse}
 */
proto.tournament_management.UpdateTournamentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tournament_management.Tournament;
      reader.readMessage(value,proto.tournament_management.Tournament.deserializeBinaryFromReader);
      msg.setTournament(value);
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
proto.tournament_management.UpdateTournamentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.UpdateTournamentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.UpdateTournamentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.UpdateTournamentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTournament();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tournament_management.Tournament.serializeBinaryToWriter
    );
  }
};


/**
 * optional Tournament tournament = 1;
 * @return {?proto.tournament_management.Tournament}
 */
proto.tournament_management.UpdateTournamentResponse.prototype.getTournament = function() {
  return /** @type{?proto.tournament_management.Tournament} */ (
    jspb.Message.getWrapperField(this, proto.tournament_management.Tournament, 1));
};


/**
 * @param {?proto.tournament_management.Tournament|undefined} value
 * @return {!proto.tournament_management.UpdateTournamentResponse} returns this
*/
proto.tournament_management.UpdateTournamentResponse.prototype.setTournament = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tournament_management.UpdateTournamentResponse} returns this
 */
proto.tournament_management.UpdateTournamentResponse.prototype.clearTournament = function() {
  return this.setTournament(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tournament_management.UpdateTournamentResponse.prototype.hasTournament = function() {
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
proto.tournament_management.DeleteTournamentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.DeleteTournamentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.DeleteTournamentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.DeleteTournamentResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tournament_management.DeleteTournamentResponse}
 */
proto.tournament_management.DeleteTournamentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.DeleteTournamentResponse;
  return proto.tournament_management.DeleteTournamentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.DeleteTournamentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.DeleteTournamentResponse}
 */
proto.tournament_management.DeleteTournamentResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tournament_management.DeleteTournamentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.DeleteTournamentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.DeleteTournamentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.DeleteTournamentResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.tournament_management.DeleteTournamentResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tournament_management.DeleteTournamentResponse} returns this
 */
proto.tournament_management.DeleteTournamentResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.tournament_management.DeleteTournamentResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.DeleteTournamentResponse} returns this
 */
proto.tournament_management.DeleteTournamentResponse.prototype.setMessage = function(value) {
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
proto.tournament_management.GetInvitationsByUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.GetInvitationsByUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.GetInvitationsByUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.GetInvitationsByUserRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tournament_management.GetInvitationsByUserRequest}
 */
proto.tournament_management.GetInvitationsByUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.GetInvitationsByUserRequest;
  return proto.tournament_management.GetInvitationsByUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.GetInvitationsByUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.GetInvitationsByUserRequest}
 */
proto.tournament_management.GetInvitationsByUserRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tournament_management.GetInvitationsByUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.GetInvitationsByUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.GetInvitationsByUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.GetInvitationsByUserRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tournament_management.GetInvitationsByUserRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.GetInvitationsByUserRequest} returns this
 */
proto.tournament_management.GetInvitationsByUserRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tournament_management.GetInvitationsByUserResponse.repeatedFields_ = [1];



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
proto.tournament_management.GetInvitationsByUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.GetInvitationsByUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.GetInvitationsByUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.GetInvitationsByUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    invitationsList: jspb.Message.toObjectList(msg.getInvitationsList(),
    proto.tournament_management.InvitationInfo.toObject, includeInstance)
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
 * @return {!proto.tournament_management.GetInvitationsByUserResponse}
 */
proto.tournament_management.GetInvitationsByUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.GetInvitationsByUserResponse;
  return proto.tournament_management.GetInvitationsByUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.GetInvitationsByUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.GetInvitationsByUserResponse}
 */
proto.tournament_management.GetInvitationsByUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tournament_management.InvitationInfo;
      reader.readMessage(value,proto.tournament_management.InvitationInfo.deserializeBinaryFromReader);
      msg.addInvitations(value);
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
proto.tournament_management.GetInvitationsByUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.GetInvitationsByUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.GetInvitationsByUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.GetInvitationsByUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvitationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tournament_management.InvitationInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated InvitationInfo invitations = 1;
 * @return {!Array<!proto.tournament_management.InvitationInfo>}
 */
proto.tournament_management.GetInvitationsByUserResponse.prototype.getInvitationsList = function() {
  return /** @type{!Array<!proto.tournament_management.InvitationInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tournament_management.InvitationInfo, 1));
};


/**
 * @param {!Array<!proto.tournament_management.InvitationInfo>} value
 * @return {!proto.tournament_management.GetInvitationsByUserResponse} returns this
*/
proto.tournament_management.GetInvitationsByUserResponse.prototype.setInvitationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tournament_management.InvitationInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tournament_management.InvitationInfo}
 */
proto.tournament_management.GetInvitationsByUserResponse.prototype.addInvitations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tournament_management.InvitationInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tournament_management.GetInvitationsByUserResponse} returns this
 */
proto.tournament_management.GetInvitationsByUserResponse.prototype.clearInvitationsList = function() {
  return this.setInvitationsList([]);
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
proto.tournament_management.GetInvitationsByTournamentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.GetInvitationsByTournamentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.GetInvitationsByTournamentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.GetInvitationsByTournamentRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tournament_management.GetInvitationsByTournamentRequest}
 */
proto.tournament_management.GetInvitationsByTournamentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.GetInvitationsByTournamentRequest;
  return proto.tournament_management.GetInvitationsByTournamentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.GetInvitationsByTournamentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.GetInvitationsByTournamentRequest}
 */
proto.tournament_management.GetInvitationsByTournamentRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tournament_management.GetInvitationsByTournamentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.GetInvitationsByTournamentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.GetInvitationsByTournamentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.GetInvitationsByTournamentRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.tournament_management.GetInvitationsByTournamentRequest.prototype.getTournamentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.GetInvitationsByTournamentRequest} returns this
 */
proto.tournament_management.GetInvitationsByTournamentRequest.prototype.setTournamentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.tournament_management.GetInvitationsByTournamentRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.GetInvitationsByTournamentRequest} returns this
 */
proto.tournament_management.GetInvitationsByTournamentRequest.prototype.setToken = function(value) {
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
proto.tournament_management.InvitationInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.InvitationInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.InvitationInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.InvitationInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    invitationId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    status: jspb.Message.getFieldWithDefault(msg, 2, ""),
    idebateId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    inviteeName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    inviteeRole: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 6, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.tournament_management.InvitationInfo}
 */
proto.tournament_management.InvitationInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.InvitationInfo;
  return proto.tournament_management.InvitationInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.InvitationInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.InvitationInfo}
 */
proto.tournament_management.InvitationInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInvitationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdebateId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInviteeName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setInviteeRole(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
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
proto.tournament_management.InvitationInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.InvitationInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.InvitationInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.InvitationInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvitationId();
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
  f = message.getIdebateId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInviteeName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInviteeRole();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional int32 invitation_id = 1;
 * @return {number}
 */
proto.tournament_management.InvitationInfo.prototype.getInvitationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.InvitationInfo} returns this
 */
proto.tournament_management.InvitationInfo.prototype.setInvitationId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.tournament_management.InvitationInfo.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.InvitationInfo} returns this
 */
proto.tournament_management.InvitationInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string idebate_id = 3;
 * @return {string}
 */
proto.tournament_management.InvitationInfo.prototype.getIdebateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.InvitationInfo} returns this
 */
proto.tournament_management.InvitationInfo.prototype.setIdebateId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string invitee_name = 4;
 * @return {string}
 */
proto.tournament_management.InvitationInfo.prototype.getInviteeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.InvitationInfo} returns this
 */
proto.tournament_management.InvitationInfo.prototype.setInviteeName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string invitee_role = 5;
 * @return {string}
 */
proto.tournament_management.InvitationInfo.prototype.getInviteeRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.InvitationInfo} returns this
 */
proto.tournament_management.InvitationInfo.prototype.setInviteeRole = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string created_at = 6;
 * @return {string}
 */
proto.tournament_management.InvitationInfo.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.InvitationInfo} returns this
 */
proto.tournament_management.InvitationInfo.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string updated_at = 7;
 * @return {string}
 */
proto.tournament_management.InvitationInfo.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.InvitationInfo} returns this
 */
proto.tournament_management.InvitationInfo.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tournament_management.GetInvitationsByTournamentResponse.repeatedFields_ = [1];



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
proto.tournament_management.GetInvitationsByTournamentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.GetInvitationsByTournamentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.GetInvitationsByTournamentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.GetInvitationsByTournamentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    invitationsList: jspb.Message.toObjectList(msg.getInvitationsList(),
    proto.tournament_management.InvitationInfo.toObject, includeInstance)
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
 * @return {!proto.tournament_management.GetInvitationsByTournamentResponse}
 */
proto.tournament_management.GetInvitationsByTournamentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.GetInvitationsByTournamentResponse;
  return proto.tournament_management.GetInvitationsByTournamentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.GetInvitationsByTournamentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.GetInvitationsByTournamentResponse}
 */
proto.tournament_management.GetInvitationsByTournamentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tournament_management.InvitationInfo;
      reader.readMessage(value,proto.tournament_management.InvitationInfo.deserializeBinaryFromReader);
      msg.addInvitations(value);
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
proto.tournament_management.GetInvitationsByTournamentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.GetInvitationsByTournamentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.GetInvitationsByTournamentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.GetInvitationsByTournamentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvitationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tournament_management.InvitationInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated InvitationInfo invitations = 1;
 * @return {!Array<!proto.tournament_management.InvitationInfo>}
 */
proto.tournament_management.GetInvitationsByTournamentResponse.prototype.getInvitationsList = function() {
  return /** @type{!Array<!proto.tournament_management.InvitationInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tournament_management.InvitationInfo, 1));
};


/**
 * @param {!Array<!proto.tournament_management.InvitationInfo>} value
 * @return {!proto.tournament_management.GetInvitationsByTournamentResponse} returns this
*/
proto.tournament_management.GetInvitationsByTournamentResponse.prototype.setInvitationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tournament_management.InvitationInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tournament_management.InvitationInfo}
 */
proto.tournament_management.GetInvitationsByTournamentResponse.prototype.addInvitations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tournament_management.InvitationInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tournament_management.GetInvitationsByTournamentResponse} returns this
 */
proto.tournament_management.GetInvitationsByTournamentResponse.prototype.clearInvitationsList = function() {
  return this.setInvitationsList([]);
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
proto.tournament_management.UpdateInvitationStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.UpdateInvitationStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.UpdateInvitationStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.UpdateInvitationStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    invitationId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    newStatus: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.tournament_management.UpdateInvitationStatusRequest}
 */
proto.tournament_management.UpdateInvitationStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.UpdateInvitationStatusRequest;
  return proto.tournament_management.UpdateInvitationStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.UpdateInvitationStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.UpdateInvitationStatusRequest}
 */
proto.tournament_management.UpdateInvitationStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInvitationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewStatus(value);
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
proto.tournament_management.UpdateInvitationStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.UpdateInvitationStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.UpdateInvitationStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.UpdateInvitationStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvitationId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getNewStatus();
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
 * optional int32 invitation_id = 1;
 * @return {number}
 */
proto.tournament_management.UpdateInvitationStatusRequest.prototype.getInvitationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.UpdateInvitationStatusRequest} returns this
 */
proto.tournament_management.UpdateInvitationStatusRequest.prototype.setInvitationId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string new_status = 2;
 * @return {string}
 */
proto.tournament_management.UpdateInvitationStatusRequest.prototype.getNewStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.UpdateInvitationStatusRequest} returns this
 */
proto.tournament_management.UpdateInvitationStatusRequest.prototype.setNewStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string token = 3;
 * @return {string}
 */
proto.tournament_management.UpdateInvitationStatusRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.UpdateInvitationStatusRequest} returns this
 */
proto.tournament_management.UpdateInvitationStatusRequest.prototype.setToken = function(value) {
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
proto.tournament_management.UpdateInvitationStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.UpdateInvitationStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.UpdateInvitationStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.UpdateInvitationStatusResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tournament_management.UpdateInvitationStatusResponse}
 */
proto.tournament_management.UpdateInvitationStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.UpdateInvitationStatusResponse;
  return proto.tournament_management.UpdateInvitationStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.UpdateInvitationStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.UpdateInvitationStatusResponse}
 */
proto.tournament_management.UpdateInvitationStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tournament_management.UpdateInvitationStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.UpdateInvitationStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.UpdateInvitationStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.UpdateInvitationStatusResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.tournament_management.UpdateInvitationStatusResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tournament_management.UpdateInvitationStatusResponse} returns this
 */
proto.tournament_management.UpdateInvitationStatusResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.tournament_management.UpdateInvitationStatusResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.UpdateInvitationStatusResponse} returns this
 */
proto.tournament_management.UpdateInvitationStatusResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tournament_management.BulkUpdateInvitationStatusRequest.repeatedFields_ = [1];



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
proto.tournament_management.BulkUpdateInvitationStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.BulkUpdateInvitationStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.BulkUpdateInvitationStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.BulkUpdateInvitationStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    invitationIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    newStatus: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.tournament_management.BulkUpdateInvitationStatusRequest}
 */
proto.tournament_management.BulkUpdateInvitationStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.BulkUpdateInvitationStatusRequest;
  return proto.tournament_management.BulkUpdateInvitationStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.BulkUpdateInvitationStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.BulkUpdateInvitationStatusRequest}
 */
proto.tournament_management.BulkUpdateInvitationStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addInvitationIds(values[i]);
      }
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewStatus(value);
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
proto.tournament_management.BulkUpdateInvitationStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.BulkUpdateInvitationStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.BulkUpdateInvitationStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.BulkUpdateInvitationStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvitationIdsList();
  if (f.length > 0) {
    writer.writePackedInt32(
      1,
      f
    );
  }
  f = message.getNewStatus();
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
 * repeated int32 invitation_ids = 1;
 * @return {!Array<number>}
 */
proto.tournament_management.BulkUpdateInvitationStatusRequest.prototype.getInvitationIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.tournament_management.BulkUpdateInvitationStatusRequest} returns this
 */
proto.tournament_management.BulkUpdateInvitationStatusRequest.prototype.setInvitationIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.tournament_management.BulkUpdateInvitationStatusRequest} returns this
 */
proto.tournament_management.BulkUpdateInvitationStatusRequest.prototype.addInvitationIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tournament_management.BulkUpdateInvitationStatusRequest} returns this
 */
proto.tournament_management.BulkUpdateInvitationStatusRequest.prototype.clearInvitationIdsList = function() {
  return this.setInvitationIdsList([]);
};


/**
 * optional string new_status = 2;
 * @return {string}
 */
proto.tournament_management.BulkUpdateInvitationStatusRequest.prototype.getNewStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.BulkUpdateInvitationStatusRequest} returns this
 */
proto.tournament_management.BulkUpdateInvitationStatusRequest.prototype.setNewStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string token = 3;
 * @return {string}
 */
proto.tournament_management.BulkUpdateInvitationStatusRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.BulkUpdateInvitationStatusRequest} returns this
 */
proto.tournament_management.BulkUpdateInvitationStatusRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tournament_management.BulkUpdateInvitationStatusResponse.repeatedFields_ = [3];



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
proto.tournament_management.BulkUpdateInvitationStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.BulkUpdateInvitationStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.BulkUpdateInvitationStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.BulkUpdateInvitationStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    updatedInvitationIdsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.tournament_management.BulkUpdateInvitationStatusResponse}
 */
proto.tournament_management.BulkUpdateInvitationStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.BulkUpdateInvitationStatusResponse;
  return proto.tournament_management.BulkUpdateInvitationStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.BulkUpdateInvitationStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.BulkUpdateInvitationStatusResponse}
 */
proto.tournament_management.BulkUpdateInvitationStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addUpdatedInvitationIds(values[i]);
      }
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
proto.tournament_management.BulkUpdateInvitationStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.BulkUpdateInvitationStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.BulkUpdateInvitationStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.BulkUpdateInvitationStatusResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getUpdatedInvitationIdsList();
  if (f.length > 0) {
    writer.writePackedInt32(
      3,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.tournament_management.BulkUpdateInvitationStatusResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tournament_management.BulkUpdateInvitationStatusResponse} returns this
 */
proto.tournament_management.BulkUpdateInvitationStatusResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.tournament_management.BulkUpdateInvitationStatusResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.BulkUpdateInvitationStatusResponse} returns this
 */
proto.tournament_management.BulkUpdateInvitationStatusResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated int32 updated_invitation_ids = 3;
 * @return {!Array<number>}
 */
proto.tournament_management.BulkUpdateInvitationStatusResponse.prototype.getUpdatedInvitationIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.tournament_management.BulkUpdateInvitationStatusResponse} returns this
 */
proto.tournament_management.BulkUpdateInvitationStatusResponse.prototype.setUpdatedInvitationIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.tournament_management.BulkUpdateInvitationStatusResponse} returns this
 */
proto.tournament_management.BulkUpdateInvitationStatusResponse.prototype.addUpdatedInvitationIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tournament_management.BulkUpdateInvitationStatusResponse} returns this
 */
proto.tournament_management.BulkUpdateInvitationStatusResponse.prototype.clearUpdatedInvitationIdsList = function() {
  return this.setUpdatedInvitationIdsList([]);
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
proto.tournament_management.ResendInvitationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.ResendInvitationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.ResendInvitationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.ResendInvitationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    invitationId: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.tournament_management.ResendInvitationRequest}
 */
proto.tournament_management.ResendInvitationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.ResendInvitationRequest;
  return proto.tournament_management.ResendInvitationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.ResendInvitationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.ResendInvitationRequest}
 */
proto.tournament_management.ResendInvitationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInvitationId(value);
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
proto.tournament_management.ResendInvitationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.ResendInvitationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.ResendInvitationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.ResendInvitationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvitationId();
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
 * optional int32 invitation_id = 1;
 * @return {number}
 */
proto.tournament_management.ResendInvitationRequest.prototype.getInvitationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tournament_management.ResendInvitationRequest} returns this
 */
proto.tournament_management.ResendInvitationRequest.prototype.setInvitationId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.tournament_management.ResendInvitationRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.ResendInvitationRequest} returns this
 */
proto.tournament_management.ResendInvitationRequest.prototype.setToken = function(value) {
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
proto.tournament_management.ResendInvitationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.ResendInvitationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.ResendInvitationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.ResendInvitationResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tournament_management.ResendInvitationResponse}
 */
proto.tournament_management.ResendInvitationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.ResendInvitationResponse;
  return proto.tournament_management.ResendInvitationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.ResendInvitationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.ResendInvitationResponse}
 */
proto.tournament_management.ResendInvitationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tournament_management.ResendInvitationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.ResendInvitationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.ResendInvitationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.ResendInvitationResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.tournament_management.ResendInvitationResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tournament_management.ResendInvitationResponse} returns this
 */
proto.tournament_management.ResendInvitationResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.tournament_management.ResendInvitationResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.ResendInvitationResponse} returns this
 */
proto.tournament_management.ResendInvitationResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tournament_management.BulkResendInvitationsRequest.repeatedFields_ = [1];



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
proto.tournament_management.BulkResendInvitationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.BulkResendInvitationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.BulkResendInvitationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.BulkResendInvitationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    invitationIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
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
 * @return {!proto.tournament_management.BulkResendInvitationsRequest}
 */
proto.tournament_management.BulkResendInvitationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.BulkResendInvitationsRequest;
  return proto.tournament_management.BulkResendInvitationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.BulkResendInvitationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.BulkResendInvitationsRequest}
 */
proto.tournament_management.BulkResendInvitationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addInvitationIds(values[i]);
      }
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
proto.tournament_management.BulkResendInvitationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.BulkResendInvitationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.BulkResendInvitationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.BulkResendInvitationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvitationIdsList();
  if (f.length > 0) {
    writer.writePackedInt32(
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
 * repeated int32 invitation_ids = 1;
 * @return {!Array<number>}
 */
proto.tournament_management.BulkResendInvitationsRequest.prototype.getInvitationIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.tournament_management.BulkResendInvitationsRequest} returns this
 */
proto.tournament_management.BulkResendInvitationsRequest.prototype.setInvitationIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.tournament_management.BulkResendInvitationsRequest} returns this
 */
proto.tournament_management.BulkResendInvitationsRequest.prototype.addInvitationIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tournament_management.BulkResendInvitationsRequest} returns this
 */
proto.tournament_management.BulkResendInvitationsRequest.prototype.clearInvitationIdsList = function() {
  return this.setInvitationIdsList([]);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.tournament_management.BulkResendInvitationsRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.BulkResendInvitationsRequest} returns this
 */
proto.tournament_management.BulkResendInvitationsRequest.prototype.setToken = function(value) {
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
proto.tournament_management.BulkResendInvitationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tournament_management.BulkResendInvitationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tournament_management.BulkResendInvitationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.BulkResendInvitationsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tournament_management.BulkResendInvitationsResponse}
 */
proto.tournament_management.BulkResendInvitationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tournament_management.BulkResendInvitationsResponse;
  return proto.tournament_management.BulkResendInvitationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tournament_management.BulkResendInvitationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tournament_management.BulkResendInvitationsResponse}
 */
proto.tournament_management.BulkResendInvitationsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.tournament_management.BulkResendInvitationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tournament_management.BulkResendInvitationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tournament_management.BulkResendInvitationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tournament_management.BulkResendInvitationsResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.tournament_management.BulkResendInvitationsResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tournament_management.BulkResendInvitationsResponse} returns this
 */
proto.tournament_management.BulkResendInvitationsResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.tournament_management.BulkResendInvitationsResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tournament_management.BulkResendInvitationsResponse} returns this
 */
proto.tournament_management.BulkResendInvitationsResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.tournament_management.LeagueType = {
  LOCAL: 0,
  INTERNATIONAL: 1
};

goog.object.extend(exports, proto.tournament_management);
