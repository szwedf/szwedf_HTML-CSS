szwedf_HTML-CSS
# szwedf_HTML-CSS — 静的サイト/ポートフォリオ置き場

[![built-with](https://img.shields.io/badge/built%20with-HTML%2FCSS%2FJS-blue.svg)]()
[![pages](https://img.shields.io/badge/GitHub%20Pages-ready-brightgreen.svg)]()

自己学習で作成したポートフォリオ/LP/検証ページをまとめたリポジトリです。  
フォルダ単位で複数サイトを管理し、共通のUIルール（余白/色/タイポ/アニメ）検証も兼ねています。

- 公開（GitHub Pages 有効時）: `https://szwedf.github.io/szwedf_HTML-CSS/`
- 作者: Szwedf

---

## 収録プロジェクト（現状の構成）

> スクショに写っているフォルダ/ファイル名ベースで記載。実体に合わせて説明を更新してください。

### ディレクトリ
| ディレクトリ | 目的/中身 | 入口の想定パス |
|---|---|---|
| `/index/` | トップ/ハブ用ページ群（提出用ポートフォリオ一式） | `/index/` |
| `/Service/` | 「サービス紹介」ページ群 | `/Service/` |
| `/mission/` | 企業/プロジェクトのミッション紹介 | `/mission/` |
| `/product/` | 製品/プロダクト紹介 | `/product/` |
| `/recruit/` | 採用向けページ群 | `/recruit/` |
| `/images/` | 画像アセット（WebP/AVIF推奨） | - |
| `/chatgpt/` | 補助素材/生成物の保管 | - |

### 主要な単体HTML（ルート直下）
| ファイル | 役割 | 備考 |
|---|---|---|
| `Company.html` | 会社/概要ページ |
| `Contact.html` | お問い合わせページ（静的フォーム） |
| `Parther.html` | パートナー紹介（※綴り修正候補：`Partner.html`） |
| `Recruit.html` | 採用ページ（単体版） |
| `Service.html` | サービスページ（単体版） |
| `about.html` | 自己紹介ページ |
| `Racecourse.html` | 競馬：コース/場別の情報ページ |
| `bettingticket.html` / `betting ticket.html` | 競馬：馬券/チケット系検証ページ（※重複/命名統一候補） |
| `1.html` | 実験/一時ページ |
| `TOP.png`, `20070615a-thumb.gif`, `2022.jpg`, `arrow.png`, `button-close.png` | 画像/アイコン類（サムネ含む） |
| `Thumbs.db` | Windows自動生成ファイル（削除候補） |

> 命名はケバブケース（`betting-ticket.html` 等）に統一すると管理が楽です。

---

## 特徴
- 一貫UI：色/角丸/影/アニメ時間を共通ルールで管理
- 軽量：画像最適化＋`loading="lazy"`、不要スクリプト不使用
- セマンティック：`<section>/<article>/<nav>` などで構造化
- フェード/スクロール演出：Intersection Observer で実装
- アクセシビリティ意識：コントラストAA目標/フォーカスリング保持

---
