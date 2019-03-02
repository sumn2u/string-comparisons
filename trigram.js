(function () {
    TrigramIndex = function (inputPhrases) {
        function asTrigrams(phrase, callback) {
            var rawData = "  ".concat(phrase, "  ");
            for (var i = rawData.length - 3; i >= 0; i = i - 1)
                callback.call(this, rawData.slice(i, i + 3));
        };

        var instance = {
            phrases: [],
            trigramIndex: [],

            index: function (phrase) {
                if (!phrase || phrase === "" || this.phrases.indexOf(phrase) >= 0) return;
                var phraseIndex = this.phrases.push(phrase) - 1;
                asTrigrams.call(this, phrase, function (trigram) {
                    var phrasesForTrigram = this.trigramIndex[trigram];
                    if (!phrasesForTrigram) phrasesForTrigram = [];
                    if (phrasesForTrigram.indexOf(phraseIndex) < 0) phrasesForTrigram.push(phraseIndex);
                    this.trigramIndex[trigram] = phrasesForTrigram;
                });
            },

            find: function (phrase) {
                var phraseMatches = [];
                var trigramsInPhrase = 0;
                asTrigrams.call(this, phrase, function (trigram) {
                    var phrasesForTrigram = this.trigramIndex[trigram];
                    trigramsInPhrase += 1;
                    if (phrasesForTrigram)
                        for (var j in phrasesForTrigram) {
                            phraseIndex = phrasesForTrigram[j];
                            if (!phraseMatches[phraseIndex]) phraseMatches[phraseIndex] = 0;
                            phraseMatches[phraseIndex] += 1;
                        }
                });
                var result = [];
                for (var i in phraseMatches)
                    result.push({ phrase: this.phrases[i], matches: phraseMatches[i] });

                result.sort(function (a, b) {
                    var diff = b.matches - a.matches;
                    return diff;// == 0 ? a.phrase.localeCompare(b.phrase) : diff;
                });
                return result;
            }
        };
        for (var i in inputPhrases)
            instance.index(inputPhrases[i]);
        return instance;
    };
})();
