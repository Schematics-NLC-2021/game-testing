


const scriptsInEvents = {

		async Game_es_Event24_Act3(runtime, localVars)
		{
			const soal = "contoh pertanyaan safkhdslk safsahlk saf";
			
			soalFrame.contentWindow.setSoal(soal);
		},

		async Game_es_Event27_Act1(runtime, localVars)
		{
			console.log(localVars.jawaban);
			console.log("jawaban diterima");
		},

		async Game_es_Event28_Act1(runtime, localVars)
		{
			console.log(localVars.score)
			console.log("score diterima")
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

