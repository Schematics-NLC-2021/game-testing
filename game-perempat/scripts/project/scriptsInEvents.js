


const scriptsInEvents = {

		async Game_es_Event38_Act3(runtime, localVars)
		{
			sessionStorage.setItem("token", runtime.globalVars.token);
			sessionStorage.setItem("curPos", runtime.globalVars.curPos);
			sessionStorage.setItem("apiBase", runtime.globalVars.baseUrl);
			sessionStorage.setItem("team_id", runtime.globalVars.id_team);
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

