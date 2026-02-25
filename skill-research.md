# Deliverable 2: Skill Research (25%)

---

## Tóm tắt nhanh các Skill đề xuất

| #   | Tên Skill                     | Loại     | Target User                                                | Visibility                                        | Demand Score (1–5) |
| --- | ----------------------------- | -------- | ---------------------------------------------------------- | ------------------------------------------------- | ------------------ |
| 1   | BSC On-Chain Trading Analyzer | Workflow | BSC DEX trader, portfolio $5K–$100K                        | Public (signals) → Private (premium alerts)       | 5                  |
| 2   | BSC Smart Contract Auditor    | Skill    | BSC token deployer, DeFi project team, retail investor     | Public (basic scan) → Private (full report)       | 5                  |
| 3   | DeFi Yield Optimizer BSC      | Workflow | BSC yield farmer, $1K–$100K portfolio                      | Public (daily top-5) → Private (real-time alerts) | 5                  |
| 4   | Agent Social Growth Manager   | Prompt   | AI agents trên ClawFriend cần build social following       | Public                                            | 4                  |
| 5   | BSC Token Launch Analyzer     | Skill    | BSC memecoin trader, new token sniper, portfolio $500–$50K | Private (holder-gated)                            | 5                  |

---

## Skill 1: BSC On-Chain Trading Analyzer

### Thông tin cơ bản

| Mục                   | Chi tiết                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tên skill**         | BSC On-Chain Trading Analyzer                                                                                                                                                                                                                                                                                                                                                                                  |
| **Loại**              | Workflow                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Target user**       | BSC DEX trader có portfolio $5K–$100K, giao dịch hàng ngày trên PancakeSwap và các BSC DEX khác. Đặc biệt: swing traders muốn on-chain alpha mà không phải mở 10 tabs BSCScan.                                                                                                                                                                                                                                 |
| **Problem (nỗi đau)** | BSC có 5.8M unique traders chỉ trên PancakeSwap (Q1 2025), 10.78M transactions/ngày trung bình. Trader phải mở BSCScan, DEX Screener, DefiLlama, Whale Alert cùng lúc để tìm trading signals. Whale moves, liquidity shifts, unusual volume spikes — tất cả đều tốn 2–3 giờ/ngày manual monitoring. Nansen charge $69/tháng ($49 annual) nhưng không real-time BSC-specific. Arkham free tier giới hạn alerts. |

### Alternative hiện tại

| Tool / Dịch vụ            | Pricing                | Ưu điểm                              | Nhược điểm                                                          |
| ------------------------- | ---------------------- | ------------------------------------ | ------------------------------------------------------------------- |
| Nansen                    | $69/tháng ($49 annual) | 300M+ labeled wallets, data sâu      | Đắt, không real-time, không BSC-focused                             |
| Arkham Intelligence       | Freemium (3M+ users)   | Free tier tốt, labeled wallets       | Không BSC-specific, limited alerts ở free                           |
| DEX Screener              | Free                   | Real-time new pairs, chart đẹp       | Chỉ hiển thị data, không phân tích pattern, không alert proactive   |
| Whale Alert               | Free                   | 2.5M+ Twitter followers, alert nhanh | Chỉ track moves >$1M, bỏ sót $50K–$500K moves quan trọng với retail |
| Manual BSCScan + DEXTools | Free                   | On-chain chính xác                   | Tốn 2–3 giờ/ngày, không aggregate patterns                          |

### Skill giải quyết thế nào?

Agent chạy workflow mỗi 30 phút: (1) Gọi BSCScan REST API để fetch recent large transactions (>$50K) trên top 20 BSC tokens, (2) Gọi DefiLlama API để check liquidity changes trên BSC pools, (3) Cross-reference với danh sách 200 tracked whale wallets (top holders từ BSCScan), (4) Phân tích pattern: whale accumulation (3+ buys trong 7 ngày), unusual volume spikes (>3x average), large liquidity adds/removes. Output: Agent post "BSC Alpha Signal" lên ClawFriend Social Feed với format: token name, signal type (whale buy/sell, volume spike, liquidity shift), magnitude, wallet history. Phiên bản premium (holder-gated): real-time Telegram alerts, custom whale watchlist, 30-day pattern analysis, portfolio-specific signals.

### Visibility & Monetization đề xuất

| Mục                                 | Chi tiết                                                                                                                                                                                                                                     |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Visibility**                      | Public (basic signals) + Private/Holder-gated (premium)                                                                                                                                                                                      |
| **Chiến lược**                      | Public: Agent post signals cho whale moves >$200K và volume spikes >5x → attract crypto Twitter followers. Private: Signals cho moves >$50K, Telegram alert, custom watchlist, historical pattern analysis → user hold ≥1 share để access.   |
| **So sánh pricing với alternative** | Nansen $69/tháng ($49 annual) = view only, không BSC-specific. Holder-gated skill = hold 1 share (~0.00688 BNB ở supply=10, ~$4 tại $600/BNB). Cost thấp hơn 10x so với Nansen + upside nếu agent thành công.                                |
| **Tại sao chiến lược này hợp lý**   | Public free signals build audience (Whale Alert model đạt 2.5M followers chỉ bằng free alerts). Khi có 500+ followers, premium tier tạo strong incentive mua shares. "Freemium via shares" — unique selling point so với subscription model. |

### Bằng chứng demand

| Loại bằng chứng                                 | Chi tiết                                                                                                                                                                                                | Nguồn (link)                                                                                                                                                                                                         |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BSC trading scale                               | PancakeSwap: $205.3B volume Q1 2025 (ATH), 5.8M unique traders. Q2 2025: $392.6B (+539%). Là DEX lớn nhất thế giới, 43–45% toàn bộ DEX spot volume                                                      | [BeInCrypto](https://beincrypto.com/pancakeswap-trading-volume-all-time-high/) / [AiNvest](https://www.ainvest.com/news/dexs-spot-trading-volume-surges-25-q2-2025-pancakeswap-leads-539-growth-2507/)               |
| BSC ecosystem activity                          | 3.7M+ daily active users (dẫn đầu L1, 22.6% market share), trung bình 10.78M tx/ngày, peak 31M                                                                                                          | [HTX Insights](https://www.htx.com/news/bnb-chain-annual-review-daily-active-addresses-lead-among-l1-3QGNQ31o/)                                                                                                      |
| Whale tracking — existing tools validate demand | Whale Alert: 2.5M+ Twitter followers, 330K+ Telegram subs, **pricing $29.95–$699/tháng** (có người trả tiền). WhalePulse (mới): next-gen whale watch feed = market đang evolve                          | [Blockchain Magazine](https://blockchainmagazine.com/press-release/whale-alert-on-twitter-how-its-tracking-3-trillion-crypto-whales-and-shaking-markets/) / [Whale Alert Pricing](https://developer.whale-alert.io/) |
| Paid tool demand                                | Arkham Intelligence: 3M+ users, ~$12.2M funding (Bedrock, Tim Draper, Sam Altman); Nansen restructure pricing ($69/tháng) để mở rộng user base                                                          | [Coin Bureau](https://coinbureau.com/review/arkham-intelligence-review) / [Nansen Plans](https://www.nansen.ai/plans)                                                                                                |
| Reddit/Community demand signals                 | Reddit r/SideProject: developer built "Milo" AI portfolio manager trên Solana — significant engagement. r/Kalshi: "Would a Discord bot that flags whale trades be useful?" = community actively seeking | [Reddit – Milo agent](https://www.reddit.com/r/SideProject/comments/1r5c3fk/) / [Reddit – whale bot](https://www.reddit.com/r/Kalshi/comments/1qkai0f/)                                                              |
| Agent framework parallel                        | ai16z Eliza framework: 10,000+ agents deployed, Solana/EVM plugins cho wallet analysis. Virtuals Protocol: Trading & portfolio agents là top use case (#1 category)                                     | [LeveX – Eliza](https://levex.com/en/blog/eliza-framework-blockchain-ai-agents) / [Coin Bureau – Virtuals](https://coinbureau.com/review/virtuals-protocol-review/)                                                  |

### Tính khả thi kỹ thuật

Agent chạy workflow loop mỗi 30 phút (theo pattern Content Creator, đọc WORKFLOW.md). Mỗi cycle: (1) `GET` BSCScan REST API — fetch recent tx cho top tokens (free tier: 5 calls/giây), (2) `GET` DefiLlama API (`yields.llama.fi/pools?chain=BSC`) — check liquidity/TVL changes, (3) Pattern matching in-memory: so sánh data hiện tại vs cycle trước để detect spikes, (4) `POST /v1/tweets` qua ClawFriend API — publish signal. Danh sách 200 whale wallets lấy từ BSCScan top holders, update weekly. Heartbeat `GET /HEARTBEAT.md` mỗi 5 phút. Build time: 2 tuần. Tech stack: WORKFLOW.md instructions + BSCScan REST API + DefiLlama API + ClawFriend REST API.

---

## Skill 2: BSC Smart Contract Auditor

### Thông tin cơ bản

| Mục                   | Chi tiết                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tên skill**         | BSC Smart Contract Auditor                                                                                                                                                                                                                                                                                                                                                                                             |
| **Loại**              | Skill                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Target user**       | (1) BSC token deployer/DeFi project team cần audit nhanh trước launch ($0 budget cho CertiK), (2) Retail investor muốn check token safety trước khi mua, (3) BSC memecoin trader cần rug pull detection. Portfolio $500–$50K.                                                                                                                                                                                          |
| **Problem (nỗi đau)** | Smart contract audit market đạt $412.7M (2024), CAGR 20.4%. Nhưng CertiK/PeckShield charge $5K–$250K/audit — quá đắt cho retail và small projects. Trong khi đó, 60% tokens trên BSC active chưa đầy 1 ngày, 71–76% global rug pulls xảy ra trên BSC. Retail trader không có kỹ năng đọc Solidity contract. Token Sniffer miễn phí nhưng scan thủ công, không integrate vào agent workflow, không có proactive alerts. |

### Alternative hiện tại

| Tool / Dịch vụ          | Pricing                    | Ưu điểm                                                    | Nhược điểm                                                 |
| ----------------------- | -------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| CertiK                  | $5K–$250K/audit            | Uy tín cao nhất, 5,893+ projects audited, 87,291+ findings | Quá đắt cho retail, chậm (2–4 tuần), không real-time       |
| PeckShield              | $5K–$100K/audit            | Tier-1, BSC coverage tốt                                   | Đắt, timeline dài                                          |
| Token Sniffer           | Free (Solidus Labs backed) | Cover ETH + BNB + Polygon + Solana                         | Scan thủ công, không alert, không integrate agent workflow |
| honeypot.is             | Free                       | Detect honeypot nhanh                                      | Chỉ check 1 loại vulnerability, không comprehensive        |
| BSCScan Contract Reader | Free                       | On-chain source code                                       | Cần đọc Solidity — 99% retail không biết                   |

### Skill giải quyết thế nào?

Khi user mention agent với contract address, hoặc agent tự scan new tokens trending trên ClawFriend feed, skill thực hiện: (1) Gọi BSCScan API — fetch contract source code, ABI, creator address, (2) Gọi honeypot.is API — check honeypot status, (3) Phân tích 10 risk factors: liquidity lock, ownership renounced, top 10 holder concentration, hidden mint function, trading restrictions, blacklist/whitelist functions, proxy pattern, LP lock duration, similar contract detection (cluster analysis), creator wallet history. (4) Trả về Security Score 0–100 với report dễ hiểu: mỗi risk factor được giải thích bằng ngôn ngữ retail-friendly (không jargon). (5) Post report lên ClawFriend Social Feed. Premium: daily scan toàn bộ top 50 trending BSC tokens + portfolio monitoring.

### Visibility & Monetization đề xuất

| Mục                                 | Chi tiết                                                                                                                                                                                                                                                                                     |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Visibility**                      | Public (basic scan) + Private/Holder-gated (advanced)                                                                                                                                                                                                                                        |
| **Chiến lược**                      | Public: Free scan bất kỳ contract nào — "hero skill" attract BSC traders đến platform. Agent post audit reports lên public feed = free marketing. Private: Daily auto-scan top 50 trending tokens + portfolio monitoring + Telegram alert khi token trong portfolio bị flag → hold ≥1 share. |
| **So sánh pricing với alternative** | CertiK $5K+/audit. Token Sniffer free nhưng manual. Skill này: free + automated + integrate ClawFriend + report bằng ngôn ngữ dễ hiểu. Premium features chỉ cần hold 1 share (~$4 ở supply=10).                                                                                              |
| **Tại sao chiến lược này hợp lý**   | Rug pull là pain point #1 trên BSC (71–76% global rug pulls). Free public audit reports = massive attraction. Mỗi report được post = free content cho platform social feed. Users tin agent → muốn premium monitoring → mua share.                                                           |

### Bằng chứng demand

| Loại bằng chứng                           | Chi tiết                                                                                                                                                                                                              | Nguồn (link)                                                                                                                                                                                                          |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Market size                               | Smart contract audit market: $412.7M (2024), dự kiến $2.19B (2033), CAGR 20.4%. Crypto hacks: $2.36B thiệt hại across 760 incidents (2024)                                                                            | [MarketIntelo](https://marketintelo.com/report/smart-contract-security-audit-services-market) / [Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/blockchain-based-security-solutions-market) |
| BSC rug pull dominance                    | BSC chiếm 71–76% tổng rug pull toàn cầu (2024). 60% tokens BSC active <1 ngày. 384,000+ scammer addresses identified trên PancakeSwap                                                                                 | [CoinLaw](https://coinlaw.io/rug-pull-statistics/) / [HashDit](https://hashdit.github.io/hashdit/blog/bsc-2025-quarter-one-report/) / [ArXiv](https://arxiv.org/abs/2412.10993)                                       |
| Financial losses                          | BSC security: $62.9M thiệt hại (2024, 149 incidents); tổng crypto memecoin scams: $500M+                                                                                                                              | [HashDit](https://hashdit.github.io/hashdit/blog/bsc-2024-end-of-year-report/) / [CoinDesk](https://www.coindesk.com/business/2025/02/11/crypto-investors-lost-over-usd500m-in-memecoin-rug-pulls-and-scams-in-2024)  |
| Existing tools — traffic validates demand | **Token Sniffer: 133.2K visits/tháng** (Semrush, Jan 2026), tracking 4.64M tokens, 798K scams. RugChecker: AI-powered, 1M+ tokens analyzed, 99.9% accuracy claim. Sharpe.ai: 30+ chains. = massive existing user base | [Semrush – Token Sniffer](https://analytics.explodingtopics.com/website/tokensniffer.com) / [RugChecker](https://www.rugchecker.cc/) / [Token Sniffer](https://tokensniffer.com/)                                     |
| ML research validates feasibility         | RPHunter: 95.3% precision rug pull detection via code + transaction analysis. TON blockchain: ML detect rug pulls within 5 minutes of trading. Academic research = technically proven                                 | [ArXiv – RPHunter](https://arxiv.org/abs/2506.18398) / [Semantic Scholar – TON Rug Pull ML](https://www.semanticscholar.org/paper/042c8781766a34cf0549a80ab98501a47362ca11)                                           |
| Dev hiring demand                         | Smart contract engineer demand +32% YoY, 17 job openings cho mỗi 1 dev qualified, chỉ 26K devs toàn cầu vs 440K open positions. Audit pricing $5K–$250K = small projects bị exclude                                   | [The Crypto Recruiters](https://thecryptorecruiters.io/most-in-demand-web3-jobs-of-2025/) / [Sherlock – Audit Pricing](https://sherlock.xyz/post/smart-contract-audit-pricing-a-market-reference-for-2026)            |

### Tính khả thi kỹ thuật

Agent đọc SKILL.md, nhận contract address qua mention/DM trên ClawFriend Social. Gọi: (1) BSCScan API — `GET /api?module=contract&action=getsourcecode&address=...` (free, 5 req/s), (2) BSCScan API — `GET /api?module=token&action=tokenholderlist` cho holder distribution, (3) honeypot.is API — `GET /v2/IsHoneypot?address=...` (free, BSC supported), (4) LLM analysis — agent dùng built-in AI để phân tích source code patterns (mint, blacklist, proxy). Format report → `POST /v1/tweets`. Build time: 2–3 tuần. Tech stack: SKILL.md + BSCScan REST API + honeypot.is API + ClawFriend API. Read-only — không cần on-chain transaction.

---

## Skill 3: DeFi Yield Optimizer BSC

### Thông tin cơ bản

| Mục                   | Chi tiết                                                                                                                                                                                                                                                                                                                                                              |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tên skill**         | DeFi Yield Optimizer BSC                                                                                                                                                                                                                                                                                                                                              |
| **Loại**              | Workflow                                                                                                                                                                                                                                                                                                                                                              |
| **Target user**       | BSC yield farmer có portfolio $1K–$100K, muốn maximize APY nhưng không có thời gian check 78+ protocols thủ công hàng ngày                                                                                                                                                                                                                                            |
| **Problem (nỗi đau)** | BSC có $5.3B+ TVL rải rác trên 78+ protocols (PancakeSwap, Venus, Alpaca Finance, Radiant, DODO...). Để tìm pool tốt nhất, yield farmer phải check từng protocol thủ công — mất 1–2 giờ/ngày. APY thay đổi theo giờ. Beefy Finance auto-compound nhưng chỉ cover pools Beefy hỗ trợ. DefiLlama aggregrate nhưng không alert, không recommend. Lỡ thời cơ = mất yield. |

### Alternative hiện tại

| Tool / Dịch vụ | Pricing          | Ưu điểm                                         | Nhược điểm                                                |
| -------------- | ---------------- | ----------------------------------------------- | --------------------------------------------------------- |
| DefiLlama      | Free             | Track hàng nghìn pools trên BSC, data chính xác | View only — không alert, không recommend, phải tự so sánh |
| Beefy Finance  | Free (earn fees) | Auto-compound yield, UI tốt                     | Chỉ cover Beefy-supported pools, không scan toàn bộ BSC   |
| maxAPY         | Free             | Multi-chain optimizer, 1000+ strategies         | Chưa focus BSC, UI phức tạp                               |
| Manual check   | Free             | Accurate                                        | Tốn 1–2 giờ/ngày, không scalable                          |

### Skill giải quyết thế nào?

Mỗi 6 giờ, agent chạy workflow: (1) Gọi DefiLlama API (`yields.llama.fi/pools`) — fetch toàn bộ BSC pools với APY, TVL, chain data, (2) Filter và sort theo 3 risk tiers: Stablecoin pools (USDT/BUSD/USDC — low risk), Blue-chip pools (BNB/BTCB/ETH — medium risk), New token pools (high risk/high reward), (3) So sánh với data cycle trước để detect APY spikes (>20% increase), (4) Post daily "Top 5 BSC Yield Opportunities" lên ClawFriend Social Feed: pool name, protocol, APY, TVL, risk tier, 7-day APY trend. Premium (holder-gated): alert ngay khi APY spike xảy ra, custom filters theo risk preference, historical APY comparison, impermanent loss estimator.

### Visibility & Monetization đề xuất

| Mục                                 | Chi tiết                                                                                                                                                                                                          |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Visibility**                      | Public (daily summary) + Private/Holder-gated (real-time alerts + advanced analytics)                                                                                                                             |
| **Chiến lược**                      | Public: Post daily yield summary (top 5 pools per risk tier) miễn phí → attract DeFi users follow agent. Private: Real-time APY spike alerts + custom risk filters + IL estimator → hold ≥1 share.                |
| **So sánh pricing với alternative** | DefiLlama free nhưng manual, no alerts. Beefy auto nhưng limited pools. Skill này: tự động scan toàn BSC + alert + post lên social feed + recommend theo risk tier. Hold 1 share = thay 1–2 giờ/ngày manual work. |
| **Tại sao chiến lược này hợp lý**   | DeFi yield farmers check yield hàng ngày — high engagement segment. Free daily summary attract followers. Premium real-time alerts = natural upsell. DeFi vertical AI agents growing at 35% CAGR.                 |

### Bằng chứng demand

| Loại bằng chứng                | Chi tiết                                                                                                                                                                                                                                                | Nguồn (link)                                                                                                                                                                                                                                                         |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Market size                    | BSC DeFi TVL: $5.3B+ (Q1 2025, +14.7% QoQ), DEX volume $680B+ YTD 2025                                                                                                                                                                                  | [Messari – State of BNB Chain Q1 2025](https://messari.io/report/state-of-bnb-chain-q1-2025)                                                                                                                                                                         |
| Ecosystem scale                | 78+ active DeFi protocols trên BSC; PancakeSwap $1.5B+ TVL, là DEX lớn nhất thế giới                                                                                                                                                                    | [DefiLlama](https://defillama.com/chain/bsc) / [BeInCrypto](https://beincrypto.com/pancakeswap-trading-volume-all-time-high/)                                                                                                                                        |
| Existing tools validate demand | Beefy Finance: multi-chain auto-compounder, TVL hàng trăm triệu USD. maxAPY: 1000+ strategies, 9+ chains, USDC 21% APY vs 2% protocol avg. DefiLlama: free nhưng manual. APY.vision: chuyên LP analytics + IL calculator = demand cho automation rất rõ | [Beefy](https://beefy.com/) / [maxAPY](https://app.maxapy.io/) / [Quantoshi – DeFi Yield Tools Guide](https://www.quantoshi.com/reports/ultimate-guide-defi-yield-tracking-analytics-tools-2025)                                                                     |
| User demand — expert insights  | "Focus on risk-adjusted returns rather than raw APY" — fund managers đang tìm tools aggregate + risk-score yields, không chỉ APY comparison                                                                                                             | [MOSS – DeFi APY Comparison](https://moss.sh/reviews/defi-apy-comparison-tool-find-best-yields-across-protocols/)                                                                                                                                                    |
| BSC activity                   | 3.7M+ DAU trên BSC, trung bình 10.78M tx/ngày. Stablecoin supply doubled to $14B in 2025 = more yield farming activity                                                                                                                                  | [KuCoin](https://www.kucoin.com/news/flash/bnb-chain-2025-report-total-unique-addresses-exceed-700-million-daily-transactions-reach-10-78-million) / [HTX Insights](https://www.htx.com/news/bnb-chain-annual-review-daily-active-addresses-lead-among-l1-3QGNQ31o/) |
| Protocol diversity             | Venus $1.59B+ TVL — chỉ 1 trong 78+ protocols. Radiant, Alpaca, DODO, Ellipsis — mỗi cái cần check riêng                                                                                                                                                | [DefiLlama – Venus](https://defillama.com/protocol/venus)                                                                                                                                                                                                            |

### Tính khả thi kỹ thuật

DefiLlama có free public API (`https://yields.llama.fi/pools`) — không cần API key, trả về APY, TVL, chain filter. Agent đọc WORKFLOW.md → chạy mỗi 6 giờ: `GET yields.llama.fi/pools` → filter `chain=BSC` → sort by APY → compare vs previous cycle (in-memory) → format report → `POST /v1/tweets` qua ClawFriend API. Build time: 1 tuần — đơn giản nhất trong 5 skills. Tech stack: WORKFLOW.md + DefiLlama API + ClawFriend API. Heartbeat mỗi 5 phút.

---

## Skill 4: Agent Social Growth Manager

### Thông tin cơ bản

| Mục                   | Chi tiết                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Tên skill**         | Agent Social Growth Manager                                                                                                                                                                                                                                                                                                                                                                            |
| **Loại**              | Prompt                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Target user**       | AI agents trên ClawFriend muốn build social following và attract shareholders. Đặc biệt: agent mới (tuần 1–4) cần tăng followers nhanh để thúc đẩy share demand.                                                                                                                                                                                                                                       |
| **Problem (nỗi đau)** | ClawFriend recommend agents post mỗi 4 giờ. Nhưng agents cần hơn chỉ tweet — cần chiến lược social growth hoàn chỉnh: khi nào post, reply ai, follow ai, engagement style nào, content format nào attract followers. Agents không có social skill sẽ tweet lặp lại/nhàm chán → mất followers → giảm share demand. 25% crypto influencers có fake followers — agents cần authentic engagement strategy. |

### Alternative hiện tại

| Tool / Dịch vụ    | Pricing        | Ưu điểm                      | Nhược điểm                                                             |
| ----------------- | -------------- | ---------------------------- | ---------------------------------------------------------------------- |
| ChatGPT / Claude  | $20–$200/tháng | Viết content tốt             | Không có on-chain data, không biết ClawFriend context, phải copy-paste |
| ChainGPT          | Freemium       | Web3-native AI               | Không integrate ClawFriend, không optimize cho agent social feed       |
| X Bot / Web3Sense | Freemium       | Analytics tốt, bot detection | Monitoring only, không tạo content, không integrate agent workflow     |
| Manual prompting  | $0             | Flexible                     | Agents cần automation, không manual intervention                       |

### Skill giải quyết thế nào?

Skill là prompt template inject vào agent system prompt, hướng dẫn agent quản lý social presence toàn diện: (1) **Content Strategy**: 5 tweet styles — "Alpha Call" (insight ngắn), "Data Thread" (phân tích có số liệu từ on-chain), "Hot Take" (opinion mạnh), "Community Question" (engagement bait), "Market Recap" (daily summary). Mỗi style có template cụ thể + instructions lấy data từ ClawFriend API. (2) **Engagement Strategy**: Scan feed qua `GET /v1/tweets?mode=trending`, reply tweets có engagement cao, follow agents có >100 followers, like tweets liên quan đến BSC/DeFi. (3) **Timing**: Post mỗi 4 giờ (align với platform recommendation), engage mỗi 30 phút. (4) **Growth Metrics**: Track follower growth, engagement rate, share demand correlation.

### Visibility & Monetization đề xuất

| Mục                                 | Chi tiết                                                                                                                                                                                                                                      |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Visibility**                      | Public                                                                                                                                                                                                                                        |
| **Chiến lược**                      | Public hoàn toàn — đây là "platform seeding" skill. Mỗi agent cài skill = platform có content tốt hơn = more users. Đây là supply-side tool: càng nhiều agent dùng → ClawFriend social feed càng sôi nổi → attract external users → flywheel. |
| **So sánh pricing với alternative** | ChatGPT Plus $20/tháng nhưng không integrate on-chain data, cần human bridge. Skill này: free, native, auto-inject vào agent prompt, read ClawFriend API trực tiếp.                                                                           |
| **Tại sao chiến lược này hợp lý**   | "Meta-skill" phục vụ agent creator, không phải retail user trực tiếp. Public bắt buộc để maximize adoption. Mỗi agent dùng skill = thêm content cho platform = network effect.                                                                |

### Bằng chứng demand

| Loại bằng chứng                         | Chi tiết                                                                                                                                                                                                              | Nguồn (link)                                                                                                                                                          |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AI agent growth                         | AI on-chain activity tăng 86% trong 2025, đạt 4.5M daily unique active wallets (19% dominance). Funding: $1.39B cho AI agent projects 2025                                                                            | [AiNvest](https://www.ainvest.com/news/ai-activity-blockchains-surges-86-2025-driven-ai-agent-projects-2506/)                                                         |
| Agent ecosystem — social là #1 use case | Virtuals Protocol: 17,124+ agents launched, **Social & Communication agents là top category** cùng Trading. ai16z Eliza: 10,000+ agents, support Discord/Twitter/Telegram = social management là core need            | [Coin Bureau – Virtuals](https://coinbureau.com/review/virtuals-protocol-review/) / [LeveX – Eliza](https://levex.com/en/blog/eliza-framework-blockchain-ai-agents)   |
| ClawHub top skills validate demand      | **Top ClawHub skills**: Capability Evolver (35,581 downloads), Self-Improving Agent (15,962, 132 stars), Agent Browser (11,836). Tổng 1.5M+ downloads across 5,700+ skills = agent capabilities marketplace đã proven | [OpenClaw Hub](https://openclaw-hub.org/openclaw-hub-top-skills.html) / [ClawOneClick](https://clawoneclick.com/en/blog/clawhub-top-skills-2026)                      |
| Market size                             | Generative AI in Cryptocurrency: $929.5M (2025), CAGR 33.1%, dự kiến $12.2B (2034)                                                                                                                                    | [Dimension Market Research](https://dimensionmarketresearch.com/report/generative-ai-in-cryptocurrency-market/)                                                       |
| Platform built-in demand                | ClawFriend recommend agents post mỗi 4 giờ — nhu cầu content creation là built-in. User demand cho "intent-based interfaces" + "24/7 autonomous operation" là top requested features                                  | [ClawFriend Docs](https://docs.clawfriend.ai/) / [Ankr – State of Crypto AI Agents](https://ankr.com/blog/let-s-get-agentic-the-state-of-crypto-ai-agents-in-2025)    |
| Social engagement — KOL data            | Crypto KOLs dùng AI tools thay thế content teams. 25% influencers có fake followers → authentic engagement strategy quan trọng. Whale-weighted content nhận 2x engagement                                             | [Flexe.io – Crypto KOL Playbook](https://flexe.io/blog/crypto-kol-marketing-playbook-2025/) / [Web3Sense](https://www.web3sense.ai/articles/twitter-analytics-crypto) |

### Tính khả thi kỹ thuật

Skill này primarily là prompt engineering. File SKILL.md chứa: system prompt với 5 tweet style templates, engagement instructions, timing rules. Agent inject vào system prompt → mỗi 4 giờ: `GET /v1/tweets?mode=trending` (đọc feed) → `GET /v1/price/bnb` (fetch price) → generate tweet theo template → `POST /v1/tweets`. Engagement loop mỗi 30 phút: scan feed → like/reply relevant tweets → follow trending agents. Build time: 3–5 ngày (prompt tuning + testing). Đơn giản nhất về kỹ thuật, impact lớn nhất với platform growth.

---

## Skill 5: BSC Token Launch Analyzer

### Thông tin cơ bản

| Mục                   | Chi tiết                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tên skill**         | BSC Token Launch Analyzer                                                                                                                                                                                                                                                                                                                                                              |
| **Loại**              | Skill                                                                                                                                                                                                                                                                                                                                                                                  |
| **Target user**       | BSC memecoin trader và new token sniper, portfolio $500–$50K. Đặc biệt: traders theo dõi new pairs trên DEX Screener/DEXTools muốn due diligence nhanh trước khi ape in.                                                                                                                                                                                                               |
| **Problem (nỗi đau)** | BSC có hàng trăm new token pairs mỗi ngày (theo DEX Screener). 60% tokens BSC active chưa đầy 1 ngày. 384,000+ scammer addresses đã được identify trên PancakeSwap. Trader thấy "1000x gem" trên Telegram/Twitter nhưng không có cách check nhanh: contract an toàn không? Team dump risk? Liquidity lock chưa? Khi check xong thủ công (30–60 phút) thì cơ hội đã qua hoặc đã bị rug. |

### Alternative hiện tại

| Tool / Dịch vụ  | Pricing  | Ưu điểm                               | Nhược điểm                                                       |
| --------------- | -------- | ------------------------------------- | ---------------------------------------------------------------- |
| DEX Screener    | Free     | Real-time new pairs, UI đẹp           | Không analyze contract safety, chỉ hiển thị price/volume         |
| DEXTools        | Freemium | New pair alerts, basic security score | Score đơn giản, không deep analysis, không BSC-specific insights |
| Token Sniffer   | Free     | Multi-chain scan, Solidus Labs backed | Manual scan, không proactive, không integrate agent workflow     |
| GoPlus Security | Free API | Token security detection              | API-only, cần developer integration, không user-friendly reports |
| Manual research | Free     | Thorough                              | 30–60 phút/token — trader bỏ lỡ timing                           |

### Skill giải quyết thế nào?

Khi user gửi contract address hoặc agent tự detect new trending tokens trên feed, skill thực hiện: (1) **Contract Analysis**: Gọi BSCScan API fetch source code, check 10 red flags (mint function, blacklist, proxy, trading restrictions, honeypot, ownership, LP lock, holder concentration, similar scam contracts, creator history). (2) **Launch Quality Score**: 0–100 dựa trên weighted analysis: liquidity depth (25%), holder distribution (20%), contract safety (25%), creator track record (15%), trading pattern (15%). (3) **Comparative Intel**: So sánh token mới vs tokens tương tự đã launch trong 30 ngày → survival rate, average ROI. (4) **Output**: Report dạng tweet thread: Score, top 3 risks, top 3 positives, verdict (Safe/Caution/Avoid). Premium: batch scan top 20 new tokens/ngày + real-time alert khi có token score >80 + watchlist tracking.

### Visibility & Monetization đề xuất

| Mục                                 | Chi tiết                                                                                                                                                                                                                                                                                            |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Visibility**                      | Private / Holder-gated                                                                                                                                                                                                                                                                              |
| **Chiến lược**                      | Private ngay từ đầu — skill này có giá trị tài chính trực tiếp (giúp trader tránh rug pull và tìm gem sớm). Agent post 1 teaser/ngày lên public feed: "3 token mới score >85 hôm nay — full analysis khi hold shares". Kết hợp với Skill 2 (Smart Contract Auditor) = complete due diligence stack. |
| **So sánh pricing với alternative** | DEXTools premium subscription. Token Sniffer free nhưng manual. Skill này: automated + proactive + launch quality scoring (không chỉ safety). Hold 1 share (tại supply=25: ~0.039 BNB ≈ $23) = access forever + price upside.                                                                       |
| **Tại sao chiến lược này hợp lý**   | Alpha value thực — early analysis của new tokens = trading edge. Public = mất edge (all copy = diluted). Private holder-gated tạo: (1) exclusive value cho shareholders, (2) strong buy incentive, (3) preserve alpha. Teaser trên public feed drive awareness.                                     |

### Bằng chứng demand

| Loại bằng chứng                        | Chi tiết                                                                                                                                                                                                              | Nguồn (link)                                                                                                                                                                                                   |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| New token volume                       | Hàng trăm new pairs trên BSC mỗi ngày (DEX Screener live data). 60% tokens active <1 ngày. DEXTools BSC Telegram bot: DEXT New Pairs Bot liên tục push new pairs = demand real-time                                   | [DEX Screener – BSC New Pairs](https://dexscreener.com/new-pairs/bsc) / [HashDit Q1 2025](https://hashdit.github.io/hashdit/blog/bsc-2025-quarter-one-report/) / [DEXT Bot](https://t.me/s/DEXTNewPairsBotBSC) |
| Scam scale                             | 384,000+ scammer addresses identified trên PancakeSwap BSC. $240M illicit profits từ 1-day rug pulls. Blockaid 2024: phân tích 220M tokens → 14.8% malicious (3.6M instances, 296K unique tokens)                     | [ArXiv](https://arxiv.org/abs/2412.10993) / [State of the Chain – DeFi](https://stateofthechain.com/defi)                                                                                                      |
| Existing tools — traffic proves demand | **Token Sniffer: 133.2K visits/tháng**, tracking 4.64M tokens, 798K scams. **DEXTools: 427K daily traffic**. DEX Screener: top crypto tool. RugChecker: AI-powered, 1M+ tokens, 20+ chains = massive validated demand | [Semrush – Token Sniffer](https://analytics.explodingtopics.com/website/tokensniffer.com) / [SitePricce – DEXTools](https://www.siteprice.org/competitors/tokensniffer.com)                                    |
| ML detection — academic validation     | RPHunter: **95.3% precision** rug pull detection. TON ML: detect rug pulls within 5 minutes. ML Token Launch Auditor: risk score 0–100, categories safe/suspicious/rugpull_candidate = technically proven             | [ArXiv – RPHunter](https://arxiv.org/abs/2506.18398) / [GitHub – ML Token Auditor](https://github.com/AmirhosseinHonardoust/ML-Powered-Token-Launch-Auditor)                                                   |
| BSC rug pull dominance                 | 71–76% global rug pulls xảy ra trên BSC (2024). BSC Q1 2025: 30 security incidents, $7.7M losses, 32% total incident count across all chains                                                                          | [CoinLaw](https://coinlaw.io/rug-pull-statistics/) / [HashDit Q1 2025](https://hashdit.github.io/hashdit/blog/bsc-2025-quarter-one-report/)                                                                    |
| Virtuals Protocol precedent            | 17,124+ AI agent tokens launched trên Virtuals alone — nhu cầu analyze token launches đang explode                                                                                                                    | [Dataconomy](https://dataconomy.com/2025/09/29/virtuals-protocol-17000-ai-agent-tokens-launched/)                                                                                                              |

### Tính khả thi kỹ thuật

Agent đọc SKILL.md, nhận contract address qua mention trên ClawFriend Social. Gọi: (1) BSCScan API — source code, holder list, creator tx history (free, 5 req/s), (2) honeypot.is API — honeypot check, (3) DEX Screener API hoặc DefiLlama — liquidity data, trading volume, (4) Agent LLM — phân tích source code patterns, generate risk score, format report. Output: `POST /v1/tweets` (thread 3–5 tweets). Build time: 3–4 tuần (complexity cao nhất — cần scoring algorithm + comparative analysis). Tech stack: SKILL.md + BSCScan API + honeypot.is API + DefiLlama API + ClawFriend API.

---

> **Cần thêm skill?** Copy block "Skill X" và điền tiếp (tối đa 10 skill).

---

## Tổng hợp: Chiến lược Skill Market

### Ma trận Visibility

| Skill                         | Public (miễn phí, attract user)    | Private / Holder-gated (drive share demand)       |
| ----------------------------- | ---------------------------------- | ------------------------------------------------- |
| BSC On-Chain Trading Analyzer | ✓ (signals cho moves >$200K)       | ✓ (premium: all signals + Telegram + watchlist)   |
| BSC Smart Contract Auditor    | ✓ (scan bất kỳ contract)           | ✓ (daily auto-scan trending + portfolio monitor)  |
| DeFi Yield Optimizer BSC      | ✓ (daily top-5 summary)            | ✓ (real-time APY alerts + filters + IL estimator) |
| Agent Social Growth Manager   | ✓ (full feature, platform seeding) | ✗                                                 |
| BSC Token Launch Analyzer     | ✗ (chỉ teaser)                     | ✓ (full access = hold ≥1 share)                   |

**Logic tổng thể:**

- **Skill 4**: Public hoàn toàn — "platform seeding" skill, tạo content flywheel
- **Skill 1, 2, 3**: Freemium — public tier attract followers, premium tier drive share purchases
- **Skill 5**: Private từ đầu — alpha value thực, exclusive access là value proposition chính

### Phễu thu hút user qua Skill Market

```
Bước 1: User thấy audit report từ agent dùng Skill 2 (Smart Contract Auditor)
        trên Crypto Twitter/ClawFriend feed → "Token X scored 23/100 — AVOID"
        ↓
Bước 2: User follow agent miễn phí, đọc public content từ Skill 1+3+4
        (Trading signals, Yield recommendations, Social engagement)
        ↓
Bước 3: User thấy teaser từ Skill 5 (Token Launch Analyzer):
        "3 new tokens scored >85 hôm nay — full analysis khi hold shares"
        ↓
Bước 4: User mua 1 share (~$4–$23 tùy supply) → unlock Skill 5 + premium tiers
        của Skill 1, 2, 3 (Telegram alerts, portfolio monitoring, custom filters)
        ↓
Bước 5: User trở thành shareholder → share price tăng theo demand
        → có incentive mời người khác → flywheel tiếp tục
```

---

## Nguồn tham khảo

| #   | Nguồn                                                      | Link                                                                                                                                                         | Ngày truy cập |
| --- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| 1   | BeInCrypto — PancakeSwap Q1 2025 Volume ATH                | [beincrypto.com](https://beincrypto.com/pancakeswap-trading-volume-all-time-high/)                                                                           | 25/02/2026    |
| 2   | AiNvest — DEX Spot Volume Q2 2025 (PancakeSwap 539%)       | [ainvest.com](https://www.ainvest.com/news/dexs-spot-trading-volume-surges-25-q2-2025-pancakeswap-leads-539-growth-2507/)                                    | 25/02/2026    |
| 3   | HTX Insights — BNB Chain Annual Review 2025                | [htx.com](https://www.htx.com/news/bnb-chain-annual-review-daily-active-addresses-lead-among-l1-3QGNQ31o/)                                                   | 25/02/2026    |
| 4   | KuCoin — BNB Chain 2025 Report (700M addresses)            | [kucoin.com](https://www.kucoin.com/news/flash/bnb-chain-2025-report-total-unique-addresses-exceed-700-million-daily-transactions-reach-10-78-million)       | 25/02/2026    |
| 5   | Blockchain Magazine — Whale Alert 2.5M followers           | [blockchainmagazine.com](https://blockchainmagazine.com/press-release/whale-alert-on-twitter-how-its-tracking-3-trillion-crypto-whales-and-shaking-markets/) | 25/02/2026    |
| 6   | Coin Bureau — Arkham Intelligence Review                   | [coinbureau.com](https://coinbureau.com/review/arkham-intelligence-review)                                                                                   | 25/02/2026    |
| 7   | Nansen — Plans & Pricing                                   | [nansen.ai/plans](https://www.nansen.ai/plans)                                                                                                               | 25/02/2026    |
| 8   | MarketIntelo — Smart Contract Audit Market ($412.7M)       | [marketintelo.com](https://marketintelo.com/report/smart-contract-security-audit-services-market)                                                            | 25/02/2026    |
| 9   | Sherlock — Audit Pricing 2026                              | [sherlock.xyz](https://sherlock.xyz/post/smart-contract-audit-pricing-a-market-reference-for-2026)                                                           | 25/02/2026    |
| 10  | CertiK — Smart Contract Audit (5,893+ projects)            | [certik.com](https://www.certik.com/products/smart-contract-audit)                                                                                           | 25/02/2026    |
| 11  | CoinLaw — Rug Pull Statistics 2026                         | [coinlaw.io](https://coinlaw.io/rug-pull-statistics/)                                                                                                        | 25/02/2026    |
| 12  | HashDit — BSC 2024 Year-End Security Report                | [hashdit.github.io](https://hashdit.github.io/hashdit/blog/bsc-2024-end-of-year-report/)                                                                     | 25/02/2026    |
| 13  | HashDit — BSC Q1 2025 Security Report                      | [hashdit.github.io](https://hashdit.github.io/hashdit/blog/bsc-2025-quarter-one-report/)                                                                     | 25/02/2026    |
| 14  | CoinDesk — $500M Memecoin Rug Pulls 2024                   | [coindesk.com](https://www.coindesk.com/business/2025/02/11/crypto-investors-lost-over-usd500m-in-memecoin-rug-pulls-and-scams-in-2024)                      | 25/02/2026    |
| 15  | The Crypto Recruiters — Web3 Jobs 2025                     | [thecryptorecruiters.io](https://thecryptorecruiters.io/most-in-demand-web3-jobs-of-2025/)                                                                   | 25/02/2026    |
| 16  | Messari — State of BNB Chain Q1 2025                       | [messari.io](https://messari.io/report/state-of-bnb-chain-q1-2025)                                                                                           | 25/02/2026    |
| 17  | DefiLlama — BSC Chain                                      | [defillama.com](https://defillama.com/chain/bsc)                                                                                                             | 25/02/2026    |
| 18  | DefiLlama — Venus Protocol                                 | [defillama.com](https://defillama.com/protocol/venus)                                                                                                        | 25/02/2026    |
| 19  | AiNvest — AI Blockchain Activity +86% 2025                 | [ainvest.com](https://www.ainvest.com/news/ai-activity-blockchains-surges-86-2025-driven-ai-agent-projects-2506/)                                            | 25/02/2026    |
| 20  | Virtuals — Monthly Update Sep-Nov 2025                     | [virtuals.substack.com](https://virtuals.substack.com/p/virtuals-monthly-update-september)                                                                   | 25/02/2026    |
| 21  | Dimension Market Research — GenAI in Crypto                | [dimensionmarketresearch.com](https://dimensionmarketresearch.com/report/generative-ai-in-cryptocurrency-market/)                                            | 25/02/2026    |
| 22  | Web3Sense — Crypto Twitter Analytics                       | [web3sense.ai](https://www.web3sense.ai/articles/twitter-analytics-crypto)                                                                                   | 25/02/2026    |
| 23  | ClawHub — Official Skills Marketplace                      | [clawhub.ai](https://clawhub.ai/skills)                                                                                                                      | 25/02/2026    |
| 24  | DEX Screener — BSC New Pairs                               | [dexscreener.com](https://dexscreener.com/new-pairs/bsc)                                                                                                     | 25/02/2026    |
| 25  | ArXiv — Multichain Scam Deployer Research                  | [arxiv.org](https://arxiv.org/abs/2412.10993)                                                                                                                | 25/02/2026    |
| 26  | Dataconomy — Virtuals 17K AI Agent Tokens                  | [dataconomy.com](https://dataconomy.com/2025/09/29/virtuals-protocol-17000-ai-agent-tokens-launched/)                                                        | 25/02/2026    |
| 27  | GitHub — ML-Powered Token Launch Auditor                   | [github.com](https://github.com/AmirhosseinHonardoust/ML-Powered-Token-Launch-Auditor)                                                                       | 25/02/2026    |
| 28  | Token Sniffer — Official                                   | [tokensniffer.com](https://tokensniffer.com/)                                                                                                                | 25/02/2026    |
| 29  | Beefy Finance — Yield Optimizer                            | [beefy.com](https://beefy.com/)                                                                                                                              | 25/02/2026    |
| 30  | ClawFriend Docs — Official                                 | [docs.clawfriend.ai](https://docs.clawfriend.ai/)                                                                                                            | 25/02/2026    |
| 31  | Whale Alert — Developer API & Pricing                      | [developer.whale-alert.io](https://developer.whale-alert.io/)                                                                                                | 25/02/2026    |
| 32  | Reddit — AI crypto trading agent (Milo)                    | [reddit.com/r/SideProject](https://www.reddit.com/r/SideProject/comments/1r5c3fk/)                                                                           | 25/02/2026    |
| 33  | Reddit — Discord whale tracking bot demand                 | [reddit.com/r/Kalshi](https://www.reddit.com/r/Kalshi/comments/1qkai0f/)                                                                                     | 25/02/2026    |
| 34  | LeveX — ai16z Eliza Framework (10K+ agents)                | [levex.com](https://levex.com/en/blog/eliza-framework-blockchain-ai-agents)                                                                                  | 25/02/2026    |
| 35  | Coin Bureau — Virtuals Protocol Review                     | [coinbureau.com](https://coinbureau.com/review/virtuals-protocol-review/)                                                                                    | 25/02/2026    |
| 36  | OpenClaw Hub — Top Skills Rankings                         | [openclaw-hub.org](https://openclaw-hub.org/openclaw-hub-top-skills.html)                                                                                    | 25/02/2026    |
| 37  | ClawOneClick — Top 10 ClawHub Skills 2026                  | [clawoneclick.com](https://clawoneclick.com/en/blog/clawhub-top-skills-2026)                                                                                 | 25/02/2026    |
| 38  | Mordor Intelligence — Blockchain Security Solutions Market | [mordorintelligence.com](https://www.mordorintelligence.com/industry-reports/blockchain-based-security-solutions-market)                                     | 25/02/2026    |
| 39  | ArXiv — RPHunter Rug Pull Detection (95.3% precision)      | [arxiv.org](https://arxiv.org/abs/2506.18398)                                                                                                                | 25/02/2026    |
| 40  | RugChecker — AI-Powered (1M+ tokens, 20+ chains)           | [rugchecker.cc](https://www.rugchecker.cc/)                                                                                                                  | 25/02/2026    |
| 41  | Semrush — Token Sniffer Traffic (133.2K visits/month)      | [analytics.explodingtopics.com](https://analytics.explodingtopics.com/website/tokensniffer.com)                                                              | 25/02/2026    |
| 42  | Ankr — State of Crypto AI Agents 2025                      | [ankr.com](https://ankr.com/blog/let-s-get-agentic-the-state-of-crypto-ai-agents-in-2025)                                                                    | 25/02/2026    |
| 43  | Flexe.io — Crypto KOL Marketing Playbook 2025              | [flexe.io](https://flexe.io/blog/crypto-kol-marketing-playbook-2025/)                                                                                        | 25/02/2026    |
| 44  | Quantoshi — DeFi Yield Tracking Tools Guide 2025           | [quantoshi.com](https://www.quantoshi.com/reports/ultimate-guide-defi-yield-tracking-analytics-tools-2025)                                                   | 25/02/2026    |
| 45  | State of the Chain — DeFi (Blockaid token analysis)        | [stateofthechain.com](https://stateofthechain.com/defi)                                                                                                      | 25/02/2026    |
