# 栃木県 新型コロナウイルス感染症対策サイト
<img width="1015" alt="OGB_sample3" src="https://user-images.githubusercontent.com/62798392/78030914-c9beb600-739d-11ea-9d1a-a32d3c04c040.png">

## 貢献の仕方
Issues にあるいろいろな修正にご協力いただけると嬉しいです。
気づいた点があれば issue 発行やコメントもご自由にどうぞ。

栃木県版に貢献頂ける方々のコミュニケーションの場として Slack を利用しています。[こちらから登録](https://covid19-tochigi.herokuapp.com/)できます。

詳しくは[貢献の仕方](./.github/CONTRIBUTING.md)を御覧ください。


## 行動原則
詳しくは[サイト構築にあたっての行動原則](./.github/CODE_OF_CONDUCT.md)を御覧ください。

## ライセンス
本ソフトウェアは、[MITライセンス](./LICENSE.txt)の元提供されています。

## このサイトのもとになったプロジェクト
東京都 新型コロナウイルス感染症対策サイト（ https://github.com/tokyo-metropolitan-gov/covid19 ）<br/>
上記プロジェクトの派生プロジェクトは、 [こちらのドキュメント](https://github.com/a01sa01to/covid19-ibaraki/blob/development/FORKED_SITES.md) をご覧ください。

## 翻訳者向け情報

翻訳をお手伝いいただける方は、[こちらのドキュメント](./.github/TRANSLATION.md)を御覧ください。

## 開発者向け情報

### 環境構築の手順

- 必要となるNode.jsのバージョン: 10.19.0以上

**yarn を使う場合**
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

**docker compose を使う場合**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

### `Cannot find module ****` と怒られた時

**yarn を使う場合**
```bash
$ yarn install
```

**docker compose を使う場合**
```bash
$ docker-compose run --rm app yarn install
```

### VSCode + Remote Cotainersで開発する場合

1. VSCodeの拡張機能「[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)」を導入します。
2. [この画像（外部サイト）](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)のように左下部の「Open Folder in Container」でこのリポジトリのルートを選択すれば環境構築が始まります。

[Topic]
- 設定を変更したい場合は、`.devcontainer/devcontainer.json`を修正してください。<br/>
    詳細は[devcontainer.jsonのリファレンス](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference)を参照してください。
- Remote Container実行時のみ有効な拡張機能「ESlint」を導入していますが、必要に応じて`devcontainer.json`の`extensions`に追加してください。<br/>
    詳細な手順は[こちら（外部サイト）](https://code.visualstudio.com/docs/remote/containers#_managing-extensions)を参照してください。
- 開発環境を再構築する場合は、左下部の「Rebuild Container」を実行してください。

### 本番環境/その他の判定

`process.env.GENERATE_ENV` の値が、本番の場合は`'production'`に、それ以外の場合は `'development'` になっています。
テスト環境のみで実行したい処理がある場合はこちらの値をご利用ください。

### ステージング・本番環境への反映

`master` ブランチがアップデートされると、自動的に `production` ブランチにHTML類がbuildされます。そして、本番サイト https://covid19-tochigi.netlify.com/ が更新されます。

`development` ブランチがアップデートされると、自動的に `dev-pages` ブランチにHTML類がbuildされます。そして、開発用サイト https://dev-covid19-tochigi.netlify.com/ が更新されます。

### ブランチルール

development, dev-i18n, dev-hotfix 以外は Pull Request は禁止です。
Pull Request を送る際の branch は、以下のネーミングルールでお願いします。

機能追加系： feature/#{ISSUE_ID}-#{branch_title_name}
ホットフィックス系: hotfix/#{ISSUE_ID}-#{branch_title_name}

#### 基本的なブランチ
| 目的 | ブランチ | 確認URL | 備考 |
| ---- | -------- | ---- | ---- |
| 開発 | development | http://dev-covid19-tochigi.netlify.com/ | base branch。基本はこちらに Pull Requestを送ってください |
| 緊急適用用 | dev-hotfix | なし | 急ぎ本番に適用するべき修正。管理者から依頼された場合こちらを使ってください |
| 本番 | master | https://covid19-tochigi.netlify.com/ | 管理者以外の Pull Request は禁止です |


