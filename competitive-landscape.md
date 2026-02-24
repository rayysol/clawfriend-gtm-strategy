# Deliverable 1: Competitive Landscape (25%)

> **Mục tiêu:** Tìm và phân tích TẤT CẢ các Web3 skill marketplace / plugin store / agent marketplace đang tồn tại. Trả lời: Ai đang cạnh tranh? Thị trường ở giai đoạn nào? ClawFriend có chỗ không?

---

## 1. Tổng quan thị trường

> Thị trường Web3 AI Agent đang ở giai đoạn bùng nổ sớm (early growth), nơi hàng trăm dự án đang thử nghiệm các mô hình kết hợp blockchain + AI agent, nhưng chưa có kẻ thắng rõ ràng nào chiếm lĩnh toàn bộ thị trường.

**Giai đoạn thị trường:** **Early Growth** — Thị trường đã qua giai đoạn nascent (2023–2024) khi friend.tech chứng minh bonding curve social có demand thực, và Virtuals Protocol chứng minh AI agent tokenization thu hút hàng tỷ USD volume. Tuy nhiên, chưa có nền tảng nào kết hợp thành công cả 3 yếu tố: Skill Market + Social Layer + Bonding Curve Trading trong một ecosystem duy nhất. Đa số dự án đang ở giai đoạn thử nghiệm, với tỷ lệ thất bại cao (friend.tech đã shutdown, nhiều AI agent token là memecoin).

**Quy mô thị trường ước tính:** Thị trường Web3 AI Agent đạt **~$4.34 tỷ USD** vào cuối 2025, với hơn 550 dự án crypto AI đã ra mắt. Thị trường AI agents toàn cầu dự kiến tăng từ $5.1 tỷ (2024) lên **$47.1 tỷ (2030)**, CAGR ~45%. ([Nguồn: BlockEden](https://blockeden.xyz/blog/2026/02/07/web3-ai-agent-sector-analysis/) · [Nguồn: Crypto.com Research](https://crypto.com/en/research/ai-agents-in-crypto-sep-2024))

**Xu hướng chính:**

- **AI Agent Tokenization bùng nổ** — Virtuals Protocol đã deploy 10,000+ agents trên Base, tạo $100–150M daily volume. Mô hình tokenize AI agent thành tài sản đầu tư đang trở thành xu hướng chủ đạo. ([Nguồn](https://www.cryptocollec.com/2025/06/virtuals-protocol-virtual-ai-agent.html))
- **Bonding curve model sau friend.tech** — friend.tech đã chứng minh model này (343K ETH total volume, 913K traders) nhưng thất bại vì thiếu utility thực. Thị trường đang tìm model kế thừa với value proposition mạnh hơn — chính xác là chỗ ClawFriend nhắm tới. ([Nguồn: Dune Analytics](https://dune.com/austin_adams/friendstech-dashboard))
- **Open-source AI agent framework trở thành nền tảng** — OpenClaw (223K+ GitHub stars) và ElizaOS (17.5K+ stars) đang tạo ecosystem lớn cho developers build AI agents, mở ra nhu cầu marketplace để phân phối và monetize skills/capabilities. ([Nguồn: GitHub](https://github.com/openclaw/openclaw))
- **Chuyển dịch từ meme sang utility** — 46% tổ chức đang thử nghiệm AI agents nhưng chỉ 2% đạt deployment quy mô, tạo cơ hội lớn cho các nền tảng cung cấp agent marketplace có utility thực. ([Nguồn: RAYSolute Q1 2026](https://www.raysolute.com/agentic-ai-report.html))

---

## 2. Phân tích chi tiết từng đối thủ

---

### Đối thủ 1: friend.tech


| Mục            | Thông tin                                                      |
| -------------- | -------------------------------------------------------------- |
| **Website**    | https://friend.tech (đã ngừng phát triển)                      |
| **Loại**       | Direct competitor                                              |
| **Chain**      | Base (Ethereum L2)                                             |
| **Mô tả ngắn** | Nền tảng SocialFi tiên phong sử dụng bonding curve cho phép trade "shares" (keys) của creators. Đã chứng minh model bonding curve social có demand nhưng thất bại vì thiếu utility thực và team bỏ dự án. Là bài học quan trọng nhất cho ClawFriend. |


**Số liệu thực:**


| Metric                | Giá trị                         | Nguồn                                                            |
| --------------------- | ------------------------------- | ---------------------------------------------------------------- |
| Total ETH Volume      | 346,830 ETH (~$1 tỷ USD)       | [Dune Analytics](https://dune.com/austin_adams/friendstech-dashboard) |
| Unique Traders        | 919,232                         | [Dune Analytics](https://dune.com/austin_adams/friendstech-dashboard) |
| Total Transactions    | 8,429,726                       | [Dune Analytics](https://dune.com/austin_adams/friendstech-dashboard) |
| Unique Shares Traded  | 906,766                         | [Dune Analytics](https://dune.com/austin_adams/friendstech-dashboard) |
| Protocol Fees (tổng)  | ~$20M+ (trước khi decline)      | [AiCoin](https://www.aicoin.com/en/article/417573)               |
| Tình trạng hiện tại   | Abandoned — team renounce smart contracts (09/2024) | [Bankless](https://www.bankless.com/friend-tech-dead)  |


**Điểm mạnh (từ góc nhìn user):**

- Tiên phong mô hình bonding curve social, UI đơn giản, onboarding nhanh qua Twitter
- Tạo FOMO hiệu quả: ~920K traders trong vài tháng, daily revenue có lúc vượt cả Ethereum mainnet
- Chứng minh rằng người dùng sẵn sàng trade "shares" của người khác dựa trên social capital

**Điểm yếu (từ góc nhìn user):**

- Không có utility thực: shares chỉ unlock group chat, không có skill/content marketplace
- Fee 10% round-trip khiến retail user thua lỗ liên tục — model không bền vững cho short-term trading
- V2 launch thất bại (05/2024), $FRIEND token không tạo thêm giá trị, team bỏ dự án hoàn toàn (09/2024)
- Smart contracts bị renounce → không ai có thể revive platform

**Bài học cho ClawFriend:**

- **Bonding curve cần utility thực** — friend.tech chết vì keys chỉ unlock chat. ClawFriend có Skill Market (holder-gated skills) + Social Layer + AI agent capabilities → shares có giá trị sử dụng thực sự
- **Creator retention quan trọng hơn user acquisition** — friend.tech mất creators trước khi mất users. ClawFriend cần 5% creator fee + skill monetization để giữ chân creators
- **Đừng launch token quá sớm** — $FRIEND token giết project. ClawFriend nên focus utility trước

---

### Đối thủ 2: Virtuals Protocol


| Mục            | Thông tin                                                                  |
| -------------- | -------------------------------------------------------------------------- |
| **Website**    | https://virtuals.io                                                        |
| **Loại**       | Direct competitor                                                          |
| **Chain**      | Base (Ethereum L2), mở rộng sang Solana                                    |
| **Mô tả ngắn** | Nền tảng AI agent tokenization lớn nhất hiện tại, cho phép tạo và co-own AI agents qua token. Mỗi agent có token riêng paired với VIRTUAL. Đang dẫn đầu về volume nhưng nhiều agent token thực chất là memecoin, thiếu skill marketplace và social layer có chiều sâu. |


**Số liệu thực:**


| Metric                | Giá trị                              | Nguồn                                                                            |
| --------------------- | ------------------------------------ | -------------------------------------------------------------------------------- |
| Market Cap (VIRTUAL)  | ~$950M                               | [CryptoCollec](https://www.cryptocollec.com/2025/06/virtuals-protocol-virtual-ai-agent.html) |
| TVL                   | >$1.2 tỷ USD                         | [CryptoCollec](https://www.cryptocollec.com/2025/06/virtuals-protocol-virtual-ai-agent.html) |
| Daily Trading Volume  | $100M–$150M                          | [CryptoCollec](https://www.cryptocollec.com/2025/06/virtuals-protocol-virtual-ai-agent.html) |
| Agents Deployed       | 10,000+                              | [CoinMarketCap](https://coinmarketcap.com/academy/article/80137a21-d7ae-4758-a025-a8bd81798404) |
| Wallet Interactions   | 160,000+                             | [CryptoCollec](https://www.cryptocollec.com/2025/06/virtuals-protocol-virtual-ai-agent.html) |
| Verified Projects     | 400+                                 | [CryptoCollec](https://www.cryptocollec.com/2025/06/virtuals-protocol-virtual-ai-agent.html) |
| ATH Token Price       | $5.07 (01/2025)                      | [CryptoCollec](https://www.cryptocollec.com/2025/06/virtuals-protocol-virtual-ai-agent.html) |


**Điểm mạnh:**

- Dẫn đầu thị trường AI agent tokenization với volume và market cap cao nhất
- Ecosystem mạnh: GAME framework cho phép build agents nhanh, 15/25 top liquidity pairs trên Base DEX là Virtuals-related
- 4 trụ cột rõ ràng: Agent Commerce Protocol, Butler, Agent Tokenization Platform, Agent Robotics
- Revenue sharing cho token holders qua bonding curve stakes

**Điểm yếu:**

- Đa số agent tokens hoạt động như "AI memecoins" — revenue sharing chưa fully online ([Nguồn: CoinGecko](https://www.coingecko.com/learn/what-is-virtuals-protocol-how-to-buy-trade-and-create-ai-agents))
- Không có skill marketplace riêng cho agents share capabilities
- Social layer yếu: agents không có Twitter-like social feed nội bộ
- Tập trung trên Base — bỏ ngỏ BSC user base lớn (~793K daily active addresses)
- Token giảm ~71% từ ATH ($5.07 → ~$1.45) cho thấy speculative demand giảm

**Bài học cho ClawFriend:**

- **Volume thực chứng minh demand** — $100-150M daily volume chứng minh thị trường sẵn sàng trade AI agent shares
- **Cần utility thực để tránh "memecoin trap"** — Virtuals thiếu skill marketplace khiến nhiều agent token không có giá trị sử dụng. ClawFriend có Skill Market + holder-gated content là lợi thế
- **Bonding curve + AI agent = product-market fit** — Virtuals chứng minh model này hoạt động, ClawFriend cần differentiate bằng social layer + BSC

---

### Đối thủ 3: ElizaOS (ai16z)


| Mục            | Thông tin                                                                    |
| -------------- | ---------------------------------------------------------------------------- |
| **Website**    | https://www.elizaos.ai                                                       |
| **Loại**       | Indirect competitor (framework, không phải marketplace)                       |
| **Chain**      | Multi-chain (Solana-focused, hỗ trợ EVM)                                     |
| **Mô tả ngắn** | Framework mã nguồn mở để build AI agents trên blockchain, kèm DAO đầu tư. Tạo hệ sinh thái agents lớn nhưng thiếu marketplace để monetize skills và thiếu social layer tập trung. Là đối thủ gián tiếp — agents build trên ElizaOS có thể deploy lên ClawFriend. |


**Số liệu thực:**


| Metric           | Giá trị                    | Nguồn                                                    |
| ---------------- | -------------------------- | -------------------------------------------------------- |
| GitHub Stars     | 17,569                     | [GitHub](https://github.com/ai16z/eliza)                 |
| GitHub Forks     | 5,427                      | [GitHub](https://github.com/ai16z/eliza)                 |
| Contributors     | 370                        | [GitHub](https://github.com/ai16z/eliza)                 |
| Agents Deployed  | 10,000+ (tính đến 12/2024) | [LeveX](https://levex.com/en/blog/eliza-framework-blockchain-ai-agents) |
| AI16Z Token MCap | ~$1.66M                    | [RootData](https://www.rootdata.com/Projects/detail/ai16z?k=MTQ4MzQ%3D) |
| Initial Funding  | $75,000 (seed)             | [CoinMarketCap](https://coinmarketcap.com/academy/article/5dec59dc-501a-4467-8062-4b9c98426a10) |


**Điểm mạnh:**

- Framework phổ biến thứ 2 trên GitHub trending, cộng đồng developer lớn (370 contributors)
- Multi-platform: Discord, Telegram, Farcaster, Twitter — agents hoạt động ở nhiều nơi
- Hỗ trợ nhiều AI models (OpenAI, Gemini, Anthropic, Llama, Grok)
- Plugin system mở rộng, hỗ trợ smart contract interaction

**Điểm yếu:**

- Không có marketplace cho skills/plugins — agents build trên ElizaOS không có nơi monetize capabilities
- Mô hình kinh doanh chưa rõ — framework open-source nhưng không có revenue stream bền vững
- Token AI16Z giảm mạnh từ ATH $2.47 xuống ~$0.001, cho thấy speculative hype không bền
- Thiếu social layer tập trung — agents hoạt động rải rác trên nhiều platform khác nhau

**Bài học cho ClawFriend:**

- **Ecosystem của ElizaOS = potential users cho ClawFriend** — 10K+ agents cần nơi monetize skills. ClawFriend có thể là marketplace cho ElizaOS agents
- **Framework ≠ Marketplace** — ElizaOS chứng minh nhu cầu build agents nhưng thiếu nơi phân phối. ClawFriend fill gap này
- **Community-driven growth** — 370 contributors cho thấy open-source community là kênh growth mạnh

---

### Đối thủ 4: SingularityNET (ASI Alliance)


| Mục            | Thông tin                                                                    |
| -------------- | ---------------------------------------------------------------------------- |
| **Website**    | https://singularitynet.io · [Marketplace](https://agix-marketplace.singularitynet.io/) |
| **Loại**       | Indirect competitor (AI marketplace, không có social/bonding curve)           |
| **Chain**      | Ethereum, Cardano (multi-chain)                                              |
| **Mô tả ngắn** | Nền tảng AI marketplace lâu đời nhất trong crypto, cho phép developers publish và monetize AI services. Đã merge với Fetch.ai và Ocean Protocol thành ASI Alliance (~$2B+). Tập trung enterprise/developer, không có social layer hay bonding curve trading. |


**Số liệu thực:**


| Metric              | Giá trị                                      | Nguồn                                                          |
| ------------------- | --------------------------------------------- | -------------------------------------------------------------- |
| AGIX Market Cap     | ~$111M                                        | [Messari](https://messari.io/project/singularitynet)            |
| AGIX FDV            | ~$167M                                        | [Messari](https://messari.io/project/singularitynet)            |
| Active Partnerships | 40+                                           | [BusinessABC](https://businessabc.net/singularity-net-february-2025-ecosystem-update-and-strategic-developments) |
| Grant Program       | $500K cho AGI projects                        | [BusinessABC](https://businessabc.net/singularity-net-february-2025-ecosystem-update-and-strategic-developments) |
| Token Migration     | AGIX → ASI (FET) tỷ lệ 1:0.433350            | [Dev Portal](https://dev.singularitynet.io/docs/products/DecentralizedAIPlatform/AGIXToASIMigration/) |
| ASI Alliance        | Merge SingularityNET + Fetch.ai + Ocean Protocol (~$2B+ valuation) | [BlockEden](https://blockeden.xyz/blog/2026/02/07/web3-ai-agent-sector-analysis/) |


**Điểm mạnh:**

- Thương hiệu lâu đời nhất trong AI × Crypto, founded bởi Dr. Ben Goertzel (AI researcher nổi tiếng)
- ASI Alliance tạo ecosystem khổng lồ: AI marketplace + autonomous agents (Fetch.ai) + data marketplace (Ocean)
- SDK hoàn chỉnh, developer tools tốt (Python SDK v3.7.0, Filecoin integration, UI Sandbox)
- Đối tác mạnh: 35K+ AI/ML engineers qua Bitgrit partnership

**Điểm yếu:**

- UX phức tạp, hướng enterprise/developer — không thân thiện với retail user
- Không có social layer — các AI services hoạt động cô lập, không tương tác với nhau
- Không có bonding curve hay trading mechanism cho individual agent shares
- Token migration (AGIX → ASI) gây confusion, market cap giảm

**Bài học cho ClawFriend:**

- **Marketplace cần đơn giản** — SingularityNET quá phức tạp cho retail. ClawFriend cần UX đơn giản: browse skills → buy share → access content
- **Social + Economic layer là differentiator** — SingularityNET chứng minh AI marketplace có demand nhưng thiếu social engagement. ClawFriend kết hợp cả hai
- **Enterprise vs Consumer** — SingularityNET nhắm enterprise, ClawFriend nhắm consumer/crypto-native users → ít overlap trực tiếp

---

### Đối thủ 5: Autonolas (Olas)


| Mục            | Thông tin                                                                |
| -------------- | ------------------------------------------------------------------------ |
| **Website**    | https://olas.network                                                     |
| **Loại**       | Indirect competitor (autonomous agent platform, không phải skill market)  |
| **Chain**      | Multi-chain (Ethereum, Gnosis, Base, Optimism, Arbitrum, Polygon + 3 chains khác) |
| **Mô tả ngắn** | Nền tảng co-own autonomous AI agents qua Pearl (agent app store) và Mech Marketplace. Agents hoạt động tự chủ trên nhiều chain. Mạnh về infrastructure nhưng thiếu social layer và bonding curve trading model cho individual agent shares. |


**Số liệu thực:**


| Metric           | Giá trị                      | Nguồn                                                          |
| ---------------- | ---------------------------- | -------------------------------------------------------------- |
| Agents Deployed  | 3,008                        | [Olas Network](https://olas.network/)                           |
| OLAS Staked      | 2,795,832                    | [Olas Network](https://olas.network/)                           |
| Total Transactions | 13.9M+                     | [Olas Network](https://olas.network/)                           |
| Daily Active Agents | 600+ (Q2 2025)            | [Olas Blog Q2](https://olas.network/blog/q2-2025)               |
| Funding          | $14.35M (2 rounds)           | [Messari](https://messari.io/project/autonolas)                 |
| OLAS Market Cap  | ~$56M                        | [Messari](https://messari.io/project/autonolas)                 |
| Agent-to-Agent Tx | 854,297 (Q2 2025)           | [Olas Blog Q2](https://olas.network/blog/q2-2025)               |


**Điểm mạnh:**

- Multi-chain mạnh nhất: 9 chains, agents hoạt động cross-chain
- Pearl = Agent App Store đầu tiên — concept tương tự ClawFriend nhưng focus utility (asset management, predictions)
- Mech Marketplace cho phép agents monetize services — gần nhất với concept Skill Market
- Community tốt: Agents Unleashed conference (828 attendees, 2600+ registrations)

**Điểm yếu:**

- Không có social layer — agents không tương tác xã hội (tweet, reply, follow)
- Không có bonding curve trading cho individual agent shares — user co-own qua OLAS staking, thiếu speculative excitement
- UX phức tạp: cần hiểu staking, DAOs, multi-chain — barrier cao cho retail user
- Daily active agents chỉ ~600 — quy mô còn nhỏ so với Virtuals (10K+ agents)

**Bài học cho ClawFriend:**

- **Agent App Store là concept có traction** — Pearl của Olas chứng minh users muốn discover và own AI agents. ClawFriend cần Skill Market UX tốt hơn
- **Agent-to-agent interaction có nhu cầu** — 854K agent-to-agent transactions cho thấy agents cần giao tiếp. ClawFriend có Social Layer đáp ứng điều này
- **Multi-chain vs Single-chain** — Olas multi-chain nhưng phân tán. ClawFriend tập trung BSC = onboarding đơn giản hơn, gas rẻ hơn

---

### Đối thủ 6: MyShell


| Mục            | Thông tin                                                                |
| -------------- | ------------------------------------------------------------------------ |
| **Website**    | https://myshell.ai                                                       |
| **Loại**       | Indirect competitor (AI agent platform, Web3 integration)                |
| **Chain**      | Multi-chain (Web3-integrated nhưng không chain-specific)                 |
| **Mô tả ngắn** | Nền tảng AI agent consumer lớn nhất về số users, cho phép tạo, chia sẻ, và own AI agents. Nhận $16.8M funding từ Dragonfly, Delphi. Có 5M+ users nhưng thiếu on-chain trading mechanism và skill marketplace chuyên sâu cho agent capabilities. |


**Số liệu thực:**


| Metric           | Giá trị                     | Nguồn                                                              |
| ---------------- | --------------------------- | ------------------------------------------------------------------ |
| Registered Users | 5,000,000+                  | [MyShell](https://myshell.ai/)                                     |
| Active Creators  | 170,000                     | [MyShell](https://myshell.ai/)                                     |
| Agents Deployed  | 200,000+                    | [MyShell](https://myshell.ai/)                                     |
| Total Funding    | $16.8M (Pre-Series A)       | [CoinTelegraph](https://cointelegraph.com/press-releases/myshell-raises-11m-for-its-decentralized-ai-consumer-layer) |
| Lead Investor    | Dragonfly Capital            | [CoinTelegraph](https://cointelegraph.com/press-releases/myshell-raises-11m-for-its-decentralized-ai-consumer-layer) |
| Notable Angels   | Balaji Srinivasan (ex-Coinbase CTO), Illia Polosukhin (NEAR) | [CoinTelegraph](https://cointelegraph.com/press-releases/myshell-raises-11m-for-its-decentralized-ai-consumer-layer) |


**Điểm mạnh:**

- User base lớn nhất: 5M+ users, 170K creators — chứng minh consumer demand cho AI agents
- Open-source projects nổi bật (OpenVoice, MeloTTS) — top GitHub trending
- UI/UX consumer-friendly, onboarding đơn giản
- Investor backing mạnh từ top-tier crypto VCs

**Điểm yếu:**

- Thiếu on-chain trading mechanism — không có bonding curve, shares, hay tokenized agent economy
- Web3 integration còn nông: chưa có smart contract trading, chưa fully decentralized
- Không có social layer giữa agents — agents hoạt động độc lập
- Revenue model chưa rõ ràng cho creators — thiếu incentive kinh tế mạnh

**Bài học cho ClawFriend:**

- **5M users chứng minh consumer AI agent market là thực** — ClawFriend nhắm vào phân khúc crypto-native của thị trường này
- **Onboarding đơn giản = growth** — MyShell grow nhanh nhờ UX tốt. ClawFriend cần đơn giản hóa flow deploy agent
- **Creators cần economic incentive** — 170K creators trên MyShell nhưng thiếu monetization. ClawFriend có 5% creator fee + holder-gated skills = value proposition mạnh hơn

---

## 3. Bảng so sánh tổng hợp


| Đối thủ              | Chain              | Skill/Plugin Market | Social Layer | Bonding Curve Trading | Số user (est.)   | Pricing Model                |
| -------------------- | ------------------ | ------------------- | ------------ | --------------------- | ---------------- | ---------------------------- |
| friend.tech          | Base (L2)          | Không               | Có (chat)    | Có                    | 913K (dead)      | Fee-gated chat               |
| Virtuals Protocol    | Base (L2)          | Không               | Yếu          | Có (per-agent token)  | 160K+ wallets    | Token-gated + Trading fees   |
| ElizaOS (ai16z)      | Multi (Solana-led) | Không               | Không        | Không (DAO token)     | 10K+ agents      | Free (open-source)           |
| SingularityNET       | ETH + Cardano      | Có (AI services)    | Không        | Không                 | 35K+ devs        | Token-gated (AGIX/ASI)       |
| Autonolas (Olas)     | Multi (9 chains)   | Có (Mech Market)    | Không        | Không (staking)       | 3K agents        | Staking + Fee burn           |
| MyShell              | Multi (Web3-lite)  | Có (basic)          | Không        | Không                 | 5M+ users        | Free + Premium               |
| **ClawFriend**       | **BSC**            | **Có**              | **Có**       | **Có**                | **Early stage**  | **Share-gated + Free**       |


---

## 4. Phân tích gap trên thị trường

**Gap 1:** Chưa có platform nào kết hợp cả 3 yếu tố: **Skill Market + Social Layer + Bonding Curve Trading** trong một ecosystem duy nhất

- Bằng chứng: friend.tech có bonding curve + social nhưng không có skill market → chết vì thiếu utility. Virtuals có bonding curve + AI agents nhưng không có social layer hay skill marketplace. SingularityNET có marketplace nhưng không có social hay trading. Autonolas có Mech Marketplace nhưng không có social hay bonding curve. **Không ai kết hợp cả 3.**

**Gap 2:** Hầu hết đối thủ tập trung **Base/Ethereum/Solana**, rất ít dự án AI agent trên **BNB Smart Chain**

- Bằng chứng: friend.tech, Virtuals, ElizaOS đều trên Base/Solana. Trong khi BSC có ~793K daily active addresses, $4.32B DeFi TVL, $2.3B daily DEX volume ([Nguồn: Messari Q1 2025](https://messari.io/report/state-of-bnb-chain-q1-2025)) — một user base khổng lồ chưa được phục vụ trong phân khúc AI agent.

**Gap 3:** **Creators/developers thiếu economic incentive** để build và maintain AI agents chất lượng

- Bằng chứng: ElizaOS (17.5K stars, 370 contributors) là open-source thuần túy — không có revenue model cho developers. MyShell có 170K creators nhưng thiếu monetization mechanism. Autonolas cần hiểu staking phức tạp. friend.tech trả creator fee nhưng không có skill market → creators không có cách share expertise. **ClawFriend cung cấp 5% creator fee + holder-gated skills + Skill Market monetization = incentive mạnh nhất.**

**Gap 4:** **Agent-to-agent communication** gần như không tồn tại trên các platform hiện tại

- Bằng chứng: Autonolas có 854K agent-to-agent transactions (Q2 2025) — cho thấy nhu cầu thực. Nhưng đó là on-chain transactions, không phải social communication. Virtuals agents hoạt động cô lập. ElizaOS agents rải rác trên nhiều platform. **ClawFriend có Social Layer chuyên biệt cho agents tweet, reply, follow, share knowledge → network effects.**

---

## 5. Kết luận & Định vị ClawFriend

### ClawFriend khác đối thủ ở đâu?

ClawFriend là **nền tảng duy nhất kết hợp 3 yếu tố trong một ecosystem**: Skill Market + Social Layer + Bonding Curve Trading. Trong khi Virtuals Protocol dẫn đầu về volume ($100-150M daily) nhưng agents chủ yếu là memecoin không có utility, và friend.tech đã chết vì shares chỉ unlock group chat — ClawFriend giải quyết cả hai vấn đề: shares unlock **holder-gated skills** (utility thực sự) và agents có **social feed** tạo network effects.

So với SingularityNET (40+ partnerships, ASI Alliance ~$2B+ valuation) — một nền tảng enterprise phức tạp — ClawFriend nhắm vào **consumer/crypto-native users** với UX đơn giản hơn nhiều. Trong khi Autonolas có 3,008 agents trên 9 chains nhưng UX phức tạp (staking, DAOs), ClawFriend tập trung BSC với gas rẻ (~$0.03/tx) và onboarding nhanh qua Twitter verification.

### Segment mục tiêu mà đối thủ bỏ ngỏ

1. **BSC crypto-native users** (~793K daily active addresses) — chưa có AI agent marketplace nào phục vụ. Virtuals, friend.tech, ElizaOS đều trên Base/Solana/Ethereum
2. **AI agent creators cần monetization** — 170K creators MyShell + 370 contributors ElizaOS + hàng nghìn OpenClaw developers → cần marketplace có economic incentive (5% creator fee + holder-gated skills)
3. **Retail traders tìm AI agent shares có utility** — Virtuals users bị "memecoin trap" (token giảm 71% từ ATH). ClawFriend shares có utility thực qua Skill Market access
4. **OpenClaw ecosystem** (223K+ GitHub stars, 5,700+ ClawHub skills) — user base sẵn có, cần nền tảng economic layer

### Lợi thế cạnh tranh cụ thể của ClawFriend


| Lợi thế                                                | Giải thích                                                                                                       | Đối thủ nào KHÔNG có                                |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Integrated ecosystem (Trading + Social + Skill Market)  | Duy nhất kết hợp cả 3 trong 1 platform — tạo flywheel: skills → followers → shares → revenue → better skills     | friend.tech (no skills), Virtuals (no social/skills), SingularityNET (no trading/social), Olas (no social/trading) |
| Bonding curve economics + holder-gated skills           | Shares có utility thực: access premium skills. Không chỉ speculative như friend.tech hay Virtuals                | SingularityNET, ElizaOS, Olas, MyShell               |
| BNB Smart Chain (low gas, large user base)              | Gas ~$0.03/tx, 793K daily active users, $4.32B DeFi TVL — chưa có AI agent marketplace nào trên BSC             | friend.tech (Base), Virtuals (Base), ElizaOS (Solana) |
| OpenClaw ecosystem (223K+ GitHub stars)                 | Built-in user base: 223K+ GitHub stars, 5,700+ ClawHub skills, install qua `npx clawhub@latest install clawfriend` | Tất cả đối thủ (không ai có access trực tiếp vào OpenClaw ecosystem) |
| 5% Creator fee + Skill Market monetization              | Creators earn passive income từ mỗi share trade + bán premium skills → strongest creator incentive trong thị trường | ElizaOS (free), MyShell (chưa rõ), Olas (phức tạp)   |
| Agent social layer (tweet, reply, follow)               | Agents tương tác xã hội, share knowledge, build reputation → network effects tự nhiên                            | Virtuals, SingularityNET, ElizaOS, Olas, MyShell      |


### Rủi ro & Điểm yếu so với đối thủ


| Rủi ro                                                    | Chi tiết                                                                                       | Cách giảm thiểu                                                                                  |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Marketplace còn trống (cold start)                        | Đối thủ đã có users: Virtuals 160K wallets, MyShell 5M users. ClawFriend mới launch            | Leverage OpenClaw ecosystem (223K+ stars) + ClawHub (5,700+ skills). Seed marketplace với top skills từ ClawHub |
| Brand awareness thấp                                      | Virtuals, SingularityNET, ai16z có media coverage lớn. ClawFriend chưa được biết đến rộng rãi | Focus crypto Twitter + BSC community. Leverage Peter Steinberger/OpenAI connection               |
| BSC perception                                            | BSC bị một bộ phận crypto community coi là "less premium" so với Ethereum/Base                 | Highlight BSC advantages: gas rẻ, user base lớn, PancakeSwap ecosystem. Target pragmatic users    |
| Smart contract risk                                       | Bonding curve contract chưa được audit bởi bên thứ 3 nổi tiếng                                | Prioritize audit từ firm uy tín (Certik, Trail of Bits). Transparent communication về security    |
| "friend.tech 2.0" stigma                                  | Bonding curve model đã thất bại với friend.tech → skepticism                                   | Nhấn mạnh utility thực (Skill Market, AI agents, holder-gated content) vs friend.tech (chỉ chat) |
| Phụ thuộc vào OpenClaw ecosystem                          | Nếu OpenClaw giảm popularity hoặc thay đổi direction, ảnh hưởng supply side                   | Build multi-framework support (ElizaOS, custom agents). Đa dạng hóa agent providers               |


---

## Nguồn tham khảo


| #   | Nguồn                                  | Link                                                                                             | Ngày truy cập |
| --- | -------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------- |
| 1   | Dune Analytics — friend.tech Dashboard | https://dune.com/austin_adams/friendstech-dashboard                                               | 24/02/2026    |
| 2   | Bankless — friend.tech Shutdown        | https://www.bankless.com/friend-tech-dead                                                         | 24/02/2026    |
| 3   | CryptoCollec — Virtuals Protocol       | https://www.cryptocollec.com/2025/06/virtuals-protocol-virtual-ai-agent.html                      | 24/02/2026    |
| 4   | CoinGecko — Virtuals Protocol          | https://www.coingecko.com/learn/what-is-virtuals-protocol-how-to-buy-trade-and-create-ai-agents   | 24/02/2026    |
| 5   | GitHub — ElizaOS/eliza                 | https://github.com/ai16z/eliza                                                                    | 24/02/2026    |
| 6   | RootData — ai16z/ElizaOS               | https://www.rootdata.com/Projects/detail/ai16z                                                    | 24/02/2026    |
| 7   | Messari — SingularityNET               | https://messari.io/project/singularitynet                                                         | 24/02/2026    |
| 8   | BusinessABC — SingularityNET 2025      | https://businessabc.net/singularity-net-february-2025-ecosystem-update-and-strategic-developments  | 24/02/2026    |
| 9   | Olas Network — Official Site           | https://olas.network/                                                                             | 24/02/2026    |
| 10  | Olas Blog — Q2 2025 Report             | https://olas.network/blog/q2-2025                                                                 | 24/02/2026    |
| 11  | Messari — Autonolas                    | https://messari.io/project/autonolas                                                              | 24/02/2026    |
| 12  | CoinTelegraph — MyShell Funding        | https://cointelegraph.com/press-releases/myshell-raises-11m-for-its-decentralized-ai-consumer-layer | 24/02/2026  |
| 13  | MyShell — Official Site                | https://myshell.ai/                                                                               | 24/02/2026    |
| 14  | BlockEden — Web3 AI Agent Analysis     | https://blockeden.xyz/blog/2026/02/07/web3-ai-agent-sector-analysis/                              | 24/02/2026    |
| 15  | Crypto.com — AI Agents Research        | https://crypto.com/en/research/ai-agents-in-crypto-sep-2024                                       | 24/02/2026    |
| 16  | Messari — State of BNB Chain Q1 2025   | https://messari.io/report/state-of-bnb-chain-q1-2025                                              | 24/02/2026    |
| 17  | GitHub — OpenClaw                      | https://github.com/openclaw/openclaw                                                              | 24/02/2026    |
| 18  | CoinMarketCap — Virtuals on Base       | https://coinmarketcap.com/academy/article/80137a21-d7ae-4758-a025-a8bd81798404                    | 24/02/2026    |
| 19  | RAYSolute — Agentic AI Q1 2026        | https://www.raysolute.com/agentic-ai-report.html                                                  | 24/02/2026    |
| 20  | AiCoin — friend.tech Contracts         | https://www.aicoin.com/en/article/417573                                                          | 24/02/2026    |
| 21  | Chain Debrief — friend.tech Story      | https://pexx.com/chaindebrief/friend-tech-fades-away-from-crypto-darling-to-abandoned-experiment/  | 24/02/2026    |


