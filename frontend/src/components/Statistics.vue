<template>
  <div>
    <div class="statistics__wrapper">
      <div class="statistic__metricGroupMain">
        <div class="statistics__subheader statistics__trophyCaption">
          Troféus
        </div>
        <div class="statistics__metric">
          <div class="statistics__metricCaption ui__mediumText">
            Máximo de troféus
          </div>
          <div class="statistics__metricDots"></div>
          <div class="statistics__metricCounter ui__headerExtraSmall">
            {{ getPlayer.bestTrophies }}
          </div>
        </div>
        <div class="statistics__metric">
          <div class="statistics__metricCaption ui__mediumText">Troféus</div>
          <div class="statistics__metricDots"></div>
          <div class="statistics__metricCounter ui__headerExtraSmall">
            {{ getPlayer.trophies }}
          </div>
        </div>
        <div class="statistics__subheader statistics__matchesCaption">
          Estatísticas Royale
        </div>
        <div class="statistics__metric">
          <div class="statistics__metricCaption ui__mediumText">Vitórias</div>
          <div class="statistics__metricDots"></div>
          <div class="statistics__metricCounter ui__headerExtraSmall">
            {{ getPlayer.wins }}
          </div>
        </div>
        <div class="statistics__metric">
          <div class="statistics__metricCaption ui__mediumText">Derrotas</div>
          <div class="statistics__metricDots"></div>
          <div class="statistics__metricCounter ui__headerExtraSmall">
            {{ getPlayer.losses }}
          </div>
        </div>
        <div class="statistics__metric">
          <div class="statistics__metricCaption ui__mediumText">
            Vitórias de 3 coroas
          </div>
          <div class="statistics__metricDots"></div>
          <div class="statistics__metricCounter ui__headerExtraSmall">
            {{ getPlayer.threeCrownWins }}
          </div>
        </div>
        <div class="statistics__metric">
          <div class="statistics__metricCaption ui__mediumText">
            Total de doações
          </div>
          <div class="statistics__metricDots"></div>
          <div class="statistics__metricCounter ui__headerExtraSmall">
            {{ getPlayer.totalDonations }}
          </div>
        </div>
        <div class="statistics__subheader statistics__clanwarCaption">
          Clan War Stats
        </div>
        <div class="statistics__metric">
          <div class="statistics__metricCaption  ui__mediumText">
            War Day Wins
          </div>
          <div class="statistics__metricDots"></div>
          <div class="statistics__metricCounter ui__headerExtraSmall">
            {{ getPlayer.warDayWins }}
          </div>
        </div>
        <div class="statistics__metric">
          <div class="statistics__metricCaption ui__mediumText">
            Clan Cards Collected
          </div>
          <div class="statistics__metricDots"></div>
          <div class="statistics__metricCounter ui__headerExtraSmall">
            {{ getPlayer.clanCardsCollected }}
          </div>
        </div>
        <div class="statistics__subheader statistics__challengeCaption">
          Estatísticas de desafios
        </div>
        <div class="statistics__metric">
          <div class="statistics__metricCaption ui__mediumText">
            Máx. de vitórias
          </div>
          <div class="statistics__metricDots"></div>
          <div class="statistics__metricCounter ui__headerExtraSmall">
            {{ getPlayer.challengeMaxWins }}
          </div>
        </div>
        <div class="statistics__metric">
          <div class="statistics__metricCaption ui__mediumText">
            Cartas ganhas
          </div>
          <div class="statistics__metricDots"></div>
          <div class="statistics__metricCounter ui__headerExtraSmall">
            {{ getPlayer.challengeCardsWon }}
          </div>
        </div>
        <div class="statistics__metric">
          <div class="statistics__metricCaption ui__mediumText">
            Partidas jogadas
          </div>
          <div class="statistics__metricDots"></div>
          <div class="statistics__metricCounter ui__headerExtraSmall"></div>
        </div>
      </div>
      <div class="statistic__metricGroupChallenges">
        <div class="statistics__subheader statistics__tournamentCaption">
          Estatísticas do torneio
        </div>
        <div class="statistics__metric">
          <div class="statistics__metricCaption ui__mediumText">
            Partidas jogadas
          </div>
          <div class="statistics__metricDots"></div>
          <div class="statistics__metricCounter ui__headerExtraSmall">
            {{ getPlayer.tournamentBattleCount }}
          </div>
        </div>
        <div class="statistics__metric">
          <div class="statistics__metricCaption ui__mediumText">
            Cartas ganhas
          </div>
          <div class="statistics__metricDots"></div>
          <div class="statistics__metricCounter ui__headerExtraSmall">
            {{ getPlayer.tournamentCardsWon }}
          </div>
        </div>
        <div class="statistics__subheader statistics__seasonCaption">
          Temporada anterior
        </div>
        <div class="statistics__metric">
          <div class="statistics__metricCaption ui__mediumText">
            Máximo de troféus
          </div>
          <div class="statistics__metricDots"></div>
          <div class="statistics__metricCounter ui__headerExtraSmall">
            {{ getPlayer.leagueStatistics.previousSeason.bestTrophies }}
          </div>
        </div>
        <div class="statistics__metric">
          <div class="statistics__metricCaption ui__mediumText">Troféus</div>
          <div class="statistics__metricDots"></div>
          <div class="statistics__metricCounter ui__headerExtraSmall">
            {{ getPlayer.leagueStatistics.previousSeason.trophies }}
          </div>
        </div>
        <div class="statistics__subheader statistics__bestCaption">
          Melhor temporada
        </div>
        <div class="statistics__metric">
          <div class="statistics__metricCaption ui__mediumText">Temporada</div>
          <div class="statistics__metricDots"></div>
          <div class="statistics__metricCounter ui__headerExtraSmall">
            {{ getPlayer.leagueStatistics.bestSeason.id }}
          </div>
        </div>
        <div class="statistics__metric">
          <div class="statistics__metricCaption ui__mediumText">Troféus</div>
          <div class="statistics__metricDots"></div>
          <div class="statistics__metricCounter ui__headerExtraSmall">
            {{ getPlayer.leagueStatistics.bestSeason.trophies }}
          </div>
        </div>
        <div class="statistics__subheader statistics__league-1">
          Temporada de ligas
        </div>
        <div class="statistics__metric">
          <div class="statistics__metricCaption ui__mediumText">Liga</div>
          <div class="statistics__metricDots"></div>
          <div class="statistics__metricCounter ui__headerExtraSmall">
            {{ getPlayer.leagueStatistics.currentSeason.id }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Statistic',
  components: {},
  computed: mapGetters(['getPlayer']),
};
</script>

<style scoped>
.statistics__wrapper {
  display: flex;
  flex-flow: column wrap;
  position: relative;
  align-items: flex-start;
  margin-left: 24px;
}
.statistic__metricGroupChallenges,
.statistic__metricGroupLeague,
.statistic__metricGroupMain {
  width: 45%;
  flex: 1 1 0%;
  margin: 0px;
  padding: 0px;
}
.statistics__subheader {
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  color: rgb(0, 0, 0);
  letter-spacing: 0.9px;
  line-height: 24px;
  margin: 16px 0px 6px;
}
.statistics__trophyCaption::before {
  height: 21px;
  background: url('../assets/trophy.png') 0% 0% / cover;
}
.statistics__cardCaption::before,
.statistics__trophyCaption::before {
  display: inline-block;
  vertical-align: middle;
  content: '';
  width: 22px;
  margin-right: 8px;
  margin-top: -2px;
}
.statistics__metric {
  width: 100%;
  margin-bottom: 0px;
  display: flex;
  min-height: 32px;
}
.ui__mediumText {
  font-size: 16px;
  line-height: 26px;
}
.statistics__metricCaption {
  white-space: nowrap;
}
.statistics__metricDots {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 0%;
  border-bottom: 1px dotted rgb(204, 204, 204);
  margin-left: 5px;
  margin-right: 5px;
  position: relative;
  top: -13px;
}
.ui__headerExtraSmall {
  font-size: 20px;
  line-height: 20px;
  font-weight: 900;
}
.statistics__metricCounter {
  font-size: 18px;
  margin-top: 3px;
  text-align: right;
  font-feature-settings: 'tnum';
}
.statistics__legendaryCaption::before,
.statistics__matchesCaption::before {
  display: inline-block;
  vertical-align: middle;
  content: '';
  width: 22px;
  height: 20px;
  margin-right: 8px;
  margin-top: -2px;
}
.statistics__matchesCaption::before {
  background: url('../assets/battle.png') 0% 0% / cover;
}
.statistics__clanwarCaption::before,
.statistics__tournamentCaption::before {
  display: inline-block;
  vertical-align: middle;
  content: '';
  width: 21px;
  margin-right: 8px;
  margin-top: -2px;
}
.statistics__clanwarCaption::before {
  height: 25px;
  background: url('../assets/clan-wars.png') 0% 0% / cover;
}
.statistics__challengeCaption::before {
  width: 21px;
  height: 23px;
  background: url('../assets/challenges.png') 0% 0% / cover;
}
.statistics__challengeCaption::before,
.statistics__donationCaption::before {
  display: inline-block;
  vertical-align: middle;
  content: '';
  margin-right: 8px;
  margin-top: -2px;
}
.statistic__metricGroupChallenges {
  position: absolute;
  width: 45%;
  right: 5%;
  top: 0px;
}
.statistics__tournamentCaption::before {
  height: 23px;
  background: url('../assets/tournament.png') 0% 0% / cover;
}
.statistics__bestCaption::before,
.statistics__seasonCaption::before {
  display: inline-block;
  vertical-align: middle;
  content: '';
  width: 22px;
  height: 24px;
  background: url('../assets/legendaryPoints.png') 0% 0% / cover;
  margin-right: 8px;
  margin-top: -2px;
}
.statistics__crownCaption::before,
.statistics__league-1::before {
  display: inline-block;
  vertical-align: middle;
  content: '';
  width: 22px;
  margin-right: 8px;
  margin-top: -2px;
}
.statistics__league-1::before {
  height: 25px;
  background: url('../assets/league-1.png') 0% 0% / cover;
}
</style>
