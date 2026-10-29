// Logos do Devicon (https://devicon.dev, licença MIT em LICENSE-devicon), copiados para não depender de CDN.
// Claude e OpenAI (Codex) vêm do Simple Icons (https://simpleicons.org, CC0), que o Devicon não cobre.
// Ajustes para o fundo escuro: azuis do MySQL, do Java e do Windows mais claros e Linux (versão plain),
// texto do AWS, CircleCI e OpenAI na cor do texto.
import android from './android.svg'
import aws from './aws.svg'
import bitbucket from './bitbucket.svg'
import circleci from './circleci.svg'
import claude from './claude.svg'
import dart from './dart.svg'
import firebase from './firebase.svg'
import flutter from './flutter.svg'
import git from './git.svg'
import go from './go.svg'
import java from './java.svg'
import linux from './linux.svg'
import mysql from './mysql.svg'
import openai from './openai.svg'
import quarkus from './quarkus.svg'
import sqlite from './sqlite.svg'
import windows from './windows.svg'

/** Logo por nome da tecnologia, igual ao texto da bolha (o mesmo em PT e EN). */
export const techIcons: Record<string, string> = {
  Flutter: flutter,
  Dart: dart,
  // Crashlytics é um produto do Firebase e não tem logo próprio no Devicon
  Crashlytics: firebase,
  Android: android,
  Go: go,
  Java: java,
  Quarkus: quarkus,
  AWS: aws,
  MySQL: mysql,
  SQLite: sqlite,
  Git: git,
  Bitbucket: bitbucket,
  CircleCI: circleci,
  Linux: linux,
  Windows: windows,
  'Claude Code': claude,
  // O Codex usa a marca da OpenAI
  Codex: openai,
}

/** Cor do halo de cada logo na esteira (a cor principal da marca). */
export const techGlow: Record<string, string> = {
  Flutter: '#47c5fb',
  Dart: '#00b4ab',
  Crashlytics: '#ffca28',
  Android: '#a4c439',
  Go: '#6ad7e5',
  Java: '#ea2d2e',
  Quarkus: '#4695eb',
  AWS: '#ff9900',
  MySQL: '#3d9cc4',
  SQLite: '#4fa7d6',
  Git: '#f34f29',
  Bitbucket: '#2684ff',
  CircleCI: '#f7ece6',
  Linux: '#f7ece6',
  Windows: '#2b95e9',
  'Claude Code': '#d97757',
  Codex: '#f7ece6',
}
