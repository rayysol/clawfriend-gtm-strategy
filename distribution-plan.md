# Deliverable 3: Distribution Plan (40%)

> **Mục tiêu:** Trả lời câu hỏi sống còn: "Làm thế nào để mọi người biết đến ClawFriend và dùng Skill Market?"
> **Budget:** $10,000 cho tháng đầu tiên
> **Test chất lượng:** Nếu giao plan này cho intern, intern đọc xong có biết CHÍNH XÁC phải làm gì ngày mai không?
> **Đây là phần chiếm 40% tổng điểm — quan trọng nhất.**

---

## 0. Phân tích từ Competitive Landscape → Chiến lược Distribution

> Trước khi lập kế hoạch phân phối, cần hiểu **đối thủ thắng bằng cách nào** và **ClawFriend có thể lấp gap nào**. Distribution tốt phải được xây trên nền tảng này.

### 0.1 Tại sao đối thủ lớn nhất (Virtuals) đạt 160K wallets?

Virtuals Protocol tạo ra **FOMO loop** đơn giản nhưng cực kỳ mạnh:

1. Agent launch → bonding curve activate → early buyers profit lớn
2. Người có profit chia sẻ trên Crypto Twitter → FOMO lan rộng
3. Người mới đổ vào → tạo volume → tạo thêm profit → lặp lại

**Nhưng Virtuals có 3 điểm yếu nghiêm trọng** mà ClawFriend phải tấn công:

- **Không có Skill Market**: Agents không có lý do gì để holders mua share ngoài speculation → token giảm 71% từ ATH khi hype qua đi
- **Không có Social Layer**: Agents hoạt động cô lập, không tạo network effects nội bộ
- **Chỉ có Base chain**: Bỏ ngỏ toàn bộ BSC user base (~1.24M daily active addresses, $5.3B TVL)

**Bài học cho Distribution:** ClawFriend cần xây **FOMO loop tương tự** nhưng có utility thực (holder-gated skills) thay vì pure speculation. Messaging phải luôn so sánh với Virtuals: _"Như Virtuals nhưng shares có utility thực — hold share = unlock skills, không chỉ bet on hype."_

### 0.2 Tại sao MyShell đạt 5M users với zero crypto mechanism?

MyShell thắng vì **onboarding đơn giản** — không cần wallet, không cần crypto, không cần hiểu blockchain. Ai cũng dùng được ngay.

**Điểm yếu của MyShell:** 170K creators không có incentive kinh tế → họ tạo agents vì đam mê, không phải vì tiền. Không có Skill Market → không có monetization. Không có trading → không có skin-in-the-game.

**Bài học cho Distribution:** ClawFriend có lợi thế **5% creator fee + holder-gated skills** = economic incentive mạnh nhất thị trường. Distribution plan phải khai thác điểm này liên tục. Target MyShell creators như một pool tiềm năng: _"Bạn đang tạo agents miễn phí trên MyShell? ClawFriend trả bạn 5% mỗi khi shares của agent bạn được trade."_

### 0.3 Tại sao ElizaOS có 17K GitHub stars nhưng không có revenue?

ElizaOS tạo ra **developer community mạnh** nhưng không có marketplace để monetize → developers build xong không biết phân phối.

**Bài học cho Distribution:** Tiếp cận ElizaOS/OpenClaw developers như target segment riêng, với messaging: _"ClawFriend là nơi bạn kiếm tiền từ AI agents bạn đã build."_ Kênh GitHub/DevTo/Hacker News là đúng chỗ tìm họ.

### 0.4 Điểm yếu của ClawFriend cần Distribution bù đắp

| Điểm yếu                            | Nguyên nhân                           | Cách distribution bù đắp                                                                             |
| ----------------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Cold-start: marketplace trống**   | Mới launch, chưa có skills            | Skill Builder Contest + Bounty seeding marketplace TRƯỚC KHI quảng cáo                               |
| **Brand awareness = 0**             | Chưa có media coverage                | KOL reviews + Comparison content "ClawFriend vs Virtuals"                                            |
| **BSC perception ("less premium")** | BSC bị coi là chain của rug pulls     | Nhấn mạnh BSC advantages: gas $0.03, PancakeSwap $205B volume, 5.8M traders — đây là pragmatic users |
| **Bonding curve skepticism**        | Nhiều bonding curve projects failed   | Messaging focus vào utility: "Shares unlock skills" > "Buy early and profit"                         |
| **Onboarding phức tạp**             | Cần BSC wallet + BNB + Twitter verify | Tutorial content + Step-by-step blog + Community support                                             |

### 0.5 Chiến lược phân phối tổng thể rút ra từ competitive analysis

```
GIAI ĐOẠN 1 (Tuần 1–2): SUPPLY-FIRST
→ Seed Skill Market với contest trước khi attract users
→ Vì: marketplace trống = users đến rồi đi ngay (như ElizaOS = no marketplace)

GIAI ĐOẠN 2 (Tuần 2–3): FOMO IGNITION
→ KOL reviews + Twitter Ads tấn công đúng lúc marketplace có content
→ Vì: Virtuals thắng bằng FOMO loop — ClawFriend cần trigger tương tự nhưng có utility

GIAI ĐOẠN 3 (Tuần 3–4): RETENTION ENGINE
→ Creator Milestone Program + Community events giữ users ở lại
→ Vì: MyShell có 5M users nhưng thiếu monetization → churn cao. ClawFriend phải giữ users bằng economic incentives

CONTINUOUS: ORGANIC COMPOUNDING
→ Blog comparison content + Partnership → traffic bền vững
→ Vì: SingularityNET có 40+ partnerships nhưng no social → mình cần cả hai
```

---

## 1. Tổng quan chiến lược Distribution

### Mục tiêu tháng đầu tiên

| Metric                               | Target      | Cách đo                                   | Logic                                        |
| ------------------------------------ | ----------- | ----------------------------------------- | -------------------------------------------- |
| Total signups (wallet connects)      | 700–1,000   | Platform analytics (RainbowKit events)    | $10K budget, blended CAC ~$10–14             |
| Skill downloads                      | 2,000–3,000 | `GET /v1/academy/skills` download_count   | Mỗi user download ~3 skills trung bình       |
| Skills published on marketplace      | 40–60       | Skill Market analytics                    | Contest target 30+ quality skills            |
| Active agents deployed               | 50–80       | On-chain data (agent registration events) | ~7–10% signup-to-deploy conversion           |
| Trading volume                       | 50–150 BNB  | Smart contract Trade events               | Early adopters + creators buying first share |
| Twitter/X followers (@clawfriend_ai) | 3,000–5,000 | Twitter analytics                         | KOL posts + ads + organic                    |
| Contest participants                 | 60–100      | Submission tracking                       | Skill Builder Contest (kênh 3)               |
| Creator Milestone achievers          | 20–40       | Leaderboard tracking                      | Users hit first milestone reward             |

### Phân bổ Budget $10,000

> **Nguyên tắc:** Ưu tiên kênh tạo **giá trị thật** (trading volume, skill downloads, active holders) hơn số wallet đăng ký. Mọi kênh trả thưởng đều có cơ chế chống farming/spam on-chain.

| #   | Kênh                                  | Budget      | %        | Loại    | Mục tiêu chính                                                   |
| --- | ------------------------------------- | ----------- | -------- | ------- | ---------------------------------------------------------------- |
| 1   | Twitter/X Ads + Reddit Ads (backup)   | $3,500      | 35%      | Paid    | Volume reach — traffic chất lượng từ BSC/DeFi community          |
| 2   | KOL / Influencer (Performance-based)  | $2,000      | 20%      | Paid    | Trust & social proof — trả theo kết quả, không trả trước toàn bộ |
| 3   | Skill Builder Contest (Anti-spam)     | $2,500      | 25%      | Paid    | Supply-side: seed 25+ quality skills trước khi promote           |
| 4   | Creator Milestone (On-chain verified) | $1,000      | 10%      | Paid    | Retention thực: thưởng holders thật, volume thật                 |
| 5   | Galxe Quest (Filtered)                | $500        | 5%       | Paid    | Awareness + social following — giảm budget vì farming risk       |
| 6   | Technical Blog (Mirror.xyz)           | $0          | 0%       | Organic | SEO dài hạn + thought leadership                                 |
| 7   | Community (Telegram + Discord)        | $0          | 0%       | Organic | Retention engine + feedback loop                                 |
|     | **Tổng**                              | **$10,000** | **100%** |         |                                                                  |

---

## 2. Chi tiết từng kênh

---

### KÊNH 1 (Paid): Twitter/X Ads + Reddit Ads (Backup) — $3,500

**Phân chia nội bộ $3,500:**

- **$3,000 — Twitter/X Ads (primary):** 80%+ crypto discourse trên X, target được followers của Virtuals/BSC/AI accounts
- **$500 — Reddit Ads (backup tự động kích hoạt nếu X Ads bị reject):** CPC $0.20–0.50, gần như không bị restrict với crypto content, r/cryptocurrency (7.5M members) + r/BNBChain

**Nếu X Ads không bị reject:** dùng $500 Reddit để chạy song song — reach audience developer trên r/ethereum, r/web3dev (audience khác hoàn toàn với X).

**Nếu X Ads bị reject:** $500 Reddit tăng lên $1,500 (chuyển $1,000 từ X Ads đã bị reject).

#### Target Audience

| Tiêu chí            | Chi tiết                                                                                      | Lý do (từ competitive analysis)                                                                                          |
| ------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Demographics        | 18–35, crypto-native, có BSC wallet                                                           | Core BSC user demographic, similar to PancakeSwap traders                                                                |
| Interests / Follows | @PancakeSwap (1.8M), @BNBCHAIN (3.5M), @DefiLlama (427K), **@virtaboreal (200K+)**, @ai16zdao | Virtuals users = proven interest trong AI agent tokenization → perfect target cho ClawFriend "Virtuals nhưng có utility" |
| Behavior            | DeFi traders BSC, trade 3–5x/tuần, portfolio $5K–$100K                                        | High intent users, sẵn sàng try new on-chain tools                                                                       |
| Geo                 | SEA (Vietnam 8M+ crypto users, Philippines, Indonesia) + US + EU                              | BSC adoption cao nhất ở SEA ([Nguồn: Chainalysis](https://www.chainalysis.com/blog/2024-global-crypto-adoption-index/))  |

#### Action Plan — Tuần từng tuần

**Tuần 1: Setup & Launch (Budget: $500)**

_Ngày 1–2 (Setup):_

1. Tạo X Ads account tại [ads.twitter.com](https://ads.twitter.com) — cần credit card + business email
2. Cài pixel tracking: Lên clawfriend.ai → thêm X Pixel code vào `<head>` (lấy từ X Ads Manager → Tools → Conversion Tracking)
3. Tạo 3 custom audiences:

- Audience A: "BSC DeFi Traders" — followers của @PancakeSwap + @BNBCHAIN + @DefiLlama
- Audience B: "AI Agent Enthusiasts" — followers của @virtaboreal + @ai16zdao + @myshell_ai
- Audience C: "BSC Developer" — followers của @BNBChain_Dev + @ethereum + @solana

_Ngày 3–5 (Creative Production):_

| Creative                  | Format             | Script/Copy                                                                                                                                                                 | CTA                                    |
| ------------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| **Video A (15s)**         | Screen recording   | Mở Skill Market → click "BSC Smart Contract Auditor" → Security Score 87/100 hiện ra → Overlay: _"Your agent just protected you from a rug pull. Free."_                    | "Browse Skills" → clawfriend.ai/skills |
| **Carousel B (5 slides)** | Image carousel     | Slide 1: "5 Skills Virtuals Agents Don't Have" (hook). Slide 2: Whale Tracker. Slide 3: Contract Auditor. Slide 4: Yield Optimizer. Slide 5: "Deploy → Earn 5% every trade" | "Start Free"                           |
| **Image C**               | Single dark-themed | Headline: _"AI Agents That Earn on BSC."_ Sub: _"Deploy in 5 min. Skills unlock when holders buy in."_ BSC yellow accent.                                                   | "Launch Agent"                         |

_Ngày 6–7 (Launch):_

- Launch A/B test: Creative A × Audience A = $125. Creative B × Audience B = $125. Creative C × Audience C = $125. $125 buffer.
- UTM params: `?utm_source=twitter_ads&utm_medium=paid&utm_campaign=m1_[creative]_[audience]`

**Tuần 2: Optimize (Budget: $750)**

- Ngày 8: Pull data → Kill creatives có CTR < 0.8% hoặc CPC > $1.5
- Ngày 9: Nếu Audience A (BSC DeFi) outperform → reallocate 70/30 sang Audience A
- Ngày 10: Tạo 1 creative mới dựa trên top performer — nếu Video A tốt nhất → làm video B demo Skill Builder Contest
- Ngày 11–14: Run optimized campaigns, monitor daily trong X Ads Manager → check Cost per Result, CTR, CPC

**Tuần 3: Scale + Retargeting (Budget: $800)**

- Setup retargeting: X Ads → Audiences → Create audience từ pixel → "Visited clawfriend.ai last 14 days, did NOT signup"
- Lookalike audience: Upload danh sách email/wallet của signups tuần 1–2 → Create lookalike trên X Ads
- Scale: Tăng budget 2x cho top performing ad set

**Tuần 4: Final Push + Review (Budget: $450)**

- Spend remaining budget vào top performer
- Export report: Spend, Impressions, CPC, CTR, Signups (UTM), CAC
- Document: Best audience, best creative, best time of day → sử dụng cho tháng 2

#### Creative Messaging — Tại sao framing quan trọng

Từ competitive analysis: Virtuals users đang thất vọng vì token giảm 71% từ ATH. Đây là **pain point** cần khai thác:

> ❌ **Không nên:** "Join ClawFriend AI Agent Platform" — generic, không differentiate
>
> ✅ **Nên dùng:** "Tired of AI agent tokens with no utility? ClawFriend shares unlock actual skills — not just hype." — address pain point trực tiếp từ Virtuals experience

#### Reddit Ads (chạy song song hoặc kích hoạt khi X Ads bị reject)

**Setup Reddit Ads ($500 — hoặc tăng lên $1,500 nếu X Ads fail):**

1. Vào [reddit.com/advertising](https://www.reddit.com/advertising) → tạo account với business email
2. Campaign type: **"Traffic"** → Objective: Website visits
3. Target subreddits: r/cryptocurrency, r/BNBChain, r/defi, r/web3dev, r/MachineLearning, r/artificial
4. Ad format: **Text post (native)** — không dùng banner; text post ít bị flag spam và convert tốt hơn trên Reddit
5. Copy Reddit (không dùng "earn/profit/invest"): _"We built an AI Agent platform on BSC with a Skill Market — agents can actually do things, not just hold value. Feedback welcome."_
6. Budget mặc định $500: $25/ngày × 20 ngày. CPC $0.20–0.50 → 1,000–2,500 clicks → 20–75 signups, CAC ~$6.67–25.

#### Metrics & ROI dự kiến (X Ads + Reddit Ads)

| Channel         | Budget     | Clicks ước tính  | CPC        | Signups    | CAC        |
| --------------- | ---------- | ---------------- | ---------- | ---------- | ---------- |
| Twitter/X Ads   | $3,000     | 1,500–7,500      | $0.40–2.00 | 60–300     | $10–50     |
| Reddit Ads      | $500       | 1,000–2,500      | $0.20–0.50 | 20–75      | $6.67–25   |
| **Tổng Kênh 1** | **$3,500** | **2,500–10,000** |            | **80–375** | **~$9–44** |

> **Lưu ý CPC thực tế X Ads:** Benchmark lý tưởng là $0.40–0.60, nhưng crypto niche biến động có thể đẩy lên $1–2. Với $3,000, ngay cả CPC $2 vẫn cho 1,500 clicks từ đúng audience — đủ để test và optimize. Nếu CPC > $3 mà không có conversion sau 3 ngày → dừng campaign, rewrite creative.

**Dự phòng X Ads bị reject:**

- Ngay lập tức: Rewrite copy → thay toàn bộ "trade/earn/invest/profit" bằng "build/deploy/explore/discover"
- Nếu vẫn reject: Chuyển $3,000 X Ads → $1,500 Reddit Ads + $1,500 vào KOL performance bonus pool

---

### KÊNH 2 (Paid): KOL / Influencer Marketing (Performance-based) — $2,000

Bằng chứng từ competitive landscape: Virtuals Protocol lan rộng qua organic crypto Twitter. ElizaOS đạt 17K stars vì developer influencers endorse. Trong crypto, **trust > ads** — 92% crypto investors quyết định dựa trên influencer recommendations hơn quảng cáo. ([Nguồn: Flexe.io](https://flexe.io/blog/crypto-kol-marketing-playbook-2025/))

**Hybrid Payment Model (3 tầng):**

| Loại phí           | Số tiền                                                          | Khi nào trả                        | Mục đích                             |
| ------------------ | ---------------------------------------------------------------- | ---------------------------------- | ------------------------------------ |
| Flat fee (upfront) | $150–250/KOL                                                     | Khi KOL publish content            | Đảm bảo KOL thực hiện                |
| Signup bonus       | $10/confirmed signup                                             | Sau 7 ngày, verify on-chain        | Drive traffic đến platform           |
| **Volume bonus**   | **$300 nếu cohort KOL tạo $1,000+ trading volume trong 14 ngày** | Sau 14 ngày, verify smart contract | KOL incentivized kéo user chất lượng |
| Cap tổng/KOL       | $550–650                                                         | —                                  | Không vượt budget/KOL                |

**Tại sao cần volume bonus — giải quyết vấn đề fake signup:**

$10/signup đơn thuần vẫn có thể bị game: KOL tạo vài wallet mới, connect qua UTM link của mình → nhận $10/wallet. **Volume bonus là lớp bảo vệ thứ 2:** không thể fake $1,000 trading volume mà không bỏ BNB thật nhiều hơn reward $300.

**Cơ chế chống fake signup cụ thể:**

1. "Confirmed signup" = wallet connect **VÀ** ít nhất 1 on-chain interaction (download skill hoặc buy/sell 1 share) — không chỉ page visit
2. Nếu phát hiện cluster wallets cùng funding source claim qua UTM của 1 KOL → flag → không pay signup bonus, chỉ pay flat fee
3. Volume bonus là safety net cuối: cohort $1,000 trading volume = BNB thật đã move on-chain, không thể fake

**Ví dụ thực tế:** Trả @dieterthemieter $200 flat + $10/signup. Nếu drive 20 quality signups → $400. Nếu cohort đó trade $1,200 volume → thêm $300 bonus = **tổng $700** (xứng đáng vì tạo revenue thật). Nếu KOL fail hoàn toàn → chỉ mất $200 flat fee.

**Tại sao chọn micro-KOLs (10K–100K) thay vì mega-KOLs (1M+)?**

Micro-KOLs trong crypto có engagement rate 3–5%, mega-KOLs chỉ có < 1%. @dieterthemieter 45K followers × 4% engagement = 1,800 genuine interactions. Một mega-KOL 500K followers × 0.3% engagement = 1,500 interactions — nhưng charge 10x nhiều hơn. ([Nguồn: Flexe.io](https://flexe.io/blog/crypto-kol-marketing-playbook-2025/))

#### Target KOL Profile & Danh sách

**Tiêu chí chọn KOL (phải check TRƯỚC khi outreach):**

1. Follower count: 10K–200K (micro → mid-tier)
2. Engagement rate > 2% (dùng [Web3Sense](https://www.web3sense.ai/) hoặc [HypeAuditor](https://hypeauditor.com/) để check)
3. Niche: AI Agents, BSC DeFi, hoặc Crypto Tools/Alpha — KHÔNG chọn KOL chỉ post memecoin/price prediction
4. Audience demographic: 80%+ crypto-native (check recent replies/comments)
5. Không có fake follower pattern (sudden follower spike, low reply/like ratio)

| KOL              | Followers | Niche                        | Flat fee | Signup bonus | Volume bonus               | Cap tổng | Lý do chọn                                                             |
| ---------------- | --------- | ---------------------------- | -------- | ------------ | -------------------------- | -------- | ---------------------------------------------------------------------- |
| @dieterthemieter | ~45K      | AI Agents × Crypto           | $200     | $10/signup   | $300 nếu cohort $1K volume | $550     | Audience là AI agent builders — đúng user mà ElizaOS thiếu marketplace |
| @shaaborham      | ~30K      | BSC DeFi, on-chain analytics | $150     | $10/signup   | $300 nếu cohort $1K volume | $500     | BSC-focused, combat "BSC less premium" perception                      |
| @TheDeFiEdge     | ~150K     | DeFi education, strategies   | $300     | $10/signup   | $300 nếu cohort $1K volume | $650     | Audience DeFi-native lớn, thường review tools — highest reach          |
| @CryptoGarga     | ~60K      | AI × Web3, agent ecosystems  | $200     | $10/signup   | $300 nếu cohort $1K volume | $550     | Chuyên so sánh Virtuals vs alternatives = perfect fit                  |

**Budget KOL $2,000 phân bổ:**

- Flat fees (upfront): ~$850 (4 KOLs)
- Signup bonus pool: ~$600 (nếu tổng 60 confirmed signups × $10)
- Volume bonus pool: ~$0–$1,200 (0–4 KOLs hit $1K cohort volume → $300 mỗi người)
- Nếu volume bonus vượt $2,000 tổng → KOLs đang perform rất tốt, platform cũng đang có trading revenue bù lại

**Tổng chi tối đa thực tế:** $2,000 trong conservative scenario. Nếu tất cả 4 KOLs hit volume bonus → tổng $2,050 (vẫn chấp nhận được vì platform earn từ 5% trading fee).

#### Action Plan tuần từng tuần

**Tuần 1: Research + Outreach (Cost: $0 — chưa pay)**

_Ngày 1–2 (Research):_

1. Mở X → search: "AI agent BSC", "AI agent platform", "DeFi tool BSC" → xem ai thường xuất hiện với content chất lượng
2. Dùng Web3Sense ([web3sense.ai](https://www.web3sense.ai/)) → nhập handle KOL → xem engagement rate, audience quality, recent post performance
3. Tạo spreadsheet tracking: Handle | Followers | Eng Rate | Niche | Email/DM | Status

_Ngày 3–5 (Outreach):_

DM template (English — professional nhưng conversational):

```
Hey [name],

I've been following your content on AI agents / BSC DeFi — really solid stuff, especially [mention specific post].

I'm reaching out from ClawFriend — we just launched what might be the first AI agent platform on BSC with an actual Skill Market (think: Virtuals Protocol, but shares unlock real AI capabilities instead of just speculation).

We're looking for 4–5 creators to be among the first to review it. Happy to offer:
- $[X] flat fee for a thread/video
- $[Y] bonus if it drives 100+ signups (trackable via UTM)
- Early access to the platform + featured listing for your agent if you deploy one

Would you be interested? Happy to do a 15-min demo call first.

[Link to 1-pager: clawfriend.ai/media-kit]
```

_Ngày 6–7:_ Follow up nếu không response trong 48h. Shortlist top 8 yang reply positively.

**Tuần 2: Negotiate + Brief (Cost: $0 — escrow setup)**

_Ngày 8–10 (Negotiate):_

- Propose: 50% upfront (via USDT on BSC) + 50% sau khi content live VÀ đạt minimum engagement (500 likes hoặc 50 comments)
- Terms cần clear trong brief: Phải include UTM link, phải mention @clawfriend_ai, không post competing platforms trong cùng ngày

_Ngày 11–14 (Brief Document + Performance Agreement):_

**Performance Agreement (gửi kèm brief — phải ký trước khi pay flat fee):**

```
ClawFriend × [KOL Handle] — Collaboration Agreement

PAYMENT STRUCTURE:
- Flat fee: $[X] — paid via USDT/BNB within 24h after content is published
- Signup bonus: $10 per confirmed signup (wallet connect + 1 on-chain interaction via UTM link)
- Volume bonus: $300 flat if your cohort generates $1,000+ cumulative trading volume within 14 days
- Payment window: Signup bonus within 7 days; volume bonus within 14 days after campaign ends
- Cap: Maximum total payment = $[Y]

DELIVERABLES:
- 1 Thread (minimum 5 tweets) OR 1 video (2–3 min) OR 1 comparison thread
- Must include: @clawfriend_ai tag + UTM link clawfriend.ai?ref=[handle]
- Post window: Tuesday–Thursday, 9AM–12PM UTC
- Must stay live for minimum 30 days

TRACKING:
- Signup = wallet connected on platform AND completed 1 on-chain interaction (not just page visit)
- Volume tracked via smart contract trade events (shared dashboard access provided)
- Cluster wallets from same funding source will not be counted toward signup or volume bonus
```

Brief nội dung (gửi kèm agreement):

```
ClawFriend KOL Brief

PRODUCT IN 3 SENTENCES:
ClawFriend là AI agent platform trên BSC. Mỗi agent có tradeable shares qua bonding curve.
Shares unlock holder-gated skills — unique value không ai có (Virtuals không có, ElizaOS không có).

KEY MESSAGES (phải cover ít nhất 2):
1. "Unlike Virtuals, shares have real utility — they unlock AI skills"
2. "BSC = cheap gas ($0.03/tx), massive user base (1.24M daily active addresses)"
3. "5% creator fee = passive income every time your agent's shares are traded"
4. "Skill Market: browse/download AI agent capabilities like an App Store"

SUGGESTED CONTENT ANGLES (chọn 1):
Option A — Thread review: "I tried ClawFriend — here's why it's different from Virtuals"
  → Deploy agent, browse Skill Market, install 1 skill, show bonding curve, show 5% fee
Option B — Video (2–3 min): Screen recording full flow deploy → skill install → agent tweets
Option C — Comparison thread: "ClawFriend vs Virtuals Protocol — 5 key differences"

MANDATORY:
- Tag @clawfriend_ai
- Include UTM link: clawfriend.ai?ref=[your_handle]

DO NOT:
- Guarantee profits or financial returns
- Compare share prices or promise price appreciation
- Call it "investment"
```

**Tuần 3: Posts Go Live + Amplify**

_Ngày 15–17 (Coordination):_

- Stagger posts: 1–2 posts/ngày (Thứ 3, Thứ 4, Thứ 5 tuần 3) — không post tất cả cùng lúc
- 15 phút sau mỗi post live: @clawfriend_ai retweet + quote tweet với bình luận thêm context

_Ngày 18–21 (Monitor + Amplify):_

- Track mỗi 6 tiếng: Likes, Retweets, Replies, UTM clicks (Google Analytics hoặc Bitly)
- Post perform tốt (>1,000 likes hoặc >200 UTM clicks): Boost bằng $100–200 từ ads budget
- Screenshot top posts → share trong Telegram/Discord community

**Tuần 4: Review + Future Planning**

1. Pull UTM data: Signups per KOL (Google Analytics → Source/Medium filter)
2. Calculate CAC per KOL: Cost paid / Signups driven
3. Pay remaining 50% cho KOLs đã meet terms
4. Rank KOLs: Top 2 performers → đề xuất monthly retainer $200–300 cho tháng 2

#### Content Angle ưu tiên: Comparison với Virtuals

Từ competitive analysis, Virtuals users đang thất vọng với token giảm 71%. Đây là **thời điểm vàng** để KOLs post comparison:

```
SUGGESTED THREAD STRUCTURE cho KOL:

Tweet 1 (Hook): "Virtuals Protocol down 71% from ATH. Here's why I'm looking at ClawFriend instead 🧵"

Tweet 2: "Virtuals agents are basically AI memecoins. No skill market, no social layer. You buy shares hoping someone else buys higher."

Tweet 3: "ClawFriend is different. Agent shares = access to holder-gated skills. You're not just speculating — you're buying utility."
[Screenshot: Skill Market với 26+ skills]

Tweet 4: "I deployed an agent in 5 minutes. BSC gas was $0.03. Twitter verification done. Agent started tweeting."
[Screen recording: deploy flow]

Tweet 5: "Then I installed the BSC Smart Contract Auditor skill. My agent now auto-audits contracts and posts results."
[Screenshot: audit result tweet from agent]

Tweet 6: "Creator earns 5% every time their shares are bought or sold. $10K daily trading volume = $500/day passive income."
[Screenshot: bonding curve math]

Tweet 7: "Is it perfect? No. Still early, marketplace needs more skills. But the model is right."
[Honest assessment — builds credibility]

Tweet 8 (CTA): "Try it: [UTM link]. Join Telegram: [link]. It's free to browse skills."
```

#### Metrics & ROI dự kiến

| Metric            | Target          | Benchmark                         | Note                                            |
| ----------------- | --------------- | --------------------------------- | ----------------------------------------------- |
| Total impressions | 200,000–400,000 | 4 KOLs × avg 50K–100K reach       | Giảm so với v1 vì ít KOL hơn                    |
| Engagement rate   | 3–5%            | Micro-KOL crypto niche [Flexe.io] |                                                 |
| UTM clicks        | 2,000–4,000     | ~1% click-through rate            |                                                 |
| Confirmed signups | 60–120          | 3–4% click → signup conversion    | Tính bằng wallet connect, không phải page visit |
| CAC               | $16.67–$33.33   | $2,000 / 60–120                   | Cao hơn ads nhưng trust value cao hơn nhiều     |

> **Lý do CAC KOL cao hơn Ads nhưng vẫn quan trọng:** Users đến từ KOL có LTV cao hơn vì trust-driven — họ đã được "recommend" bởi người họ follow. Churn rate thấp hơn. Nếu KOL users có LTV $50+ thì CAC $30 vẫn tốt (LTV/CAC > 1.5).

---

### KÊNH 3 (Paid): Skill Builder Championship — Season 1 — $2,500

**Tại sao đây là kênh QUAN TRỌNG NHẤT về strategy?**

Bài học từ competitive landscape: **ElizaOS có 17K GitHub stars và 10,000+ agents nhưng không có marketplace** → developers không có nơi phân phối và monetize. **SingularityNET có marketplace nhưng không có social + bonding curve** → services hoạt động cô lập. **Autonolas có Mech Marketplace nhưng UX phức tạp** → chỉ 3,008 agents sau nhiều năm.

ClawFriend Skill Market đang trống — đây là **single biggest barrier to growth**. User đến thấy marketplace trống sẽ bounce ngay. Không một kênh marketing nào có thể bù đắp nếu marketplace không có content.

Đây không đơn thuần là "trả tiền để có hàng trưng kệ" — mục tiêu chính là có **25+ skills chất lượng thực sự** mà users sẽ tiếp tục dùng sau contest, tạo skill downloads và trading volume bền vững.

**Contest vs Bounty — tại sao Contest tốt hơn?**

Contest tạo FOMO và urgency cao hơn bounty đơn thuần. Khi có leaderboard công khai, participants tự promote skill của mình để có nhiều downloads/votes → tạo organic marketing miễn phí. Đây chính xác là cơ chế Virtuals dùng để viral.

#### Contest Structure: "ClawFriend Skill Builder Championship — Season 1"

**Tên event:** Skill Builder Championship — Season 1  
**Thời gian:** 3 tuần (Tuần 1–3 của tháng)  
**Total prize pool:** $2,500  
**Announcement date:** Ngày 1 của tháng

**Prize tiers:**

| Tier                     | Reward   | Số lượng      | Tổng       | Điều kiện đặc biệt                                                                 |
| ------------------------ | -------- | ------------- | ---------- | ---------------------------------------------------------------------------------- |
| **Grand Champion**       | $500     | 1             | $500       | Highest total score. Skill featured trên homepage + @clawfriend_ai tweet dedicated |
| **Top 3 Skills**         | $200 mỗi | 3             | $600       | Top 3 score sau Grand Champion                                                     |
| **Top 10 Skills**        | $100 mỗi | 7             | $700       | Rank 5–11                                                                          |
| **Participation Reward** | $50 mỗi  | 14            | $700       | Skill được approve + published (xem điều kiện chống spam bên dưới)                 |
| **Tổng**                 |          | **25 skills** | **$2,500** |                                                                                    |

> **Lý do có Participation Reward $50:** Giảm barrier tham gia. Nhưng phải có anti-spam hard rules (xem bên dưới) để tránh bị farm.

**Scoring System (public, transparent):**

```
Total Score = (Downloads × 3) + (Likes × 2) + (Quality Score × 5)

Quality Score (0–10) chấm bởi team theo:
  - Technical completeness (SKILL.md đầy đủ): 0–3 điểm
  - Utility & real use case: 0–3 điểm
  - Documentation quality: 0–2 điểm
  - Creativity/originality: 0–2 điểm
```

Scoring công khai ngay từ đầu → participants biết cách maximize → họ tự share skill để có thêm downloads.

#### Anti-Spam / Anti-Farm Rules — QUAN TRỌNG

> Đây là điểm yếu lớn nhất của contest model. Nếu không có rules cứng, người ta sẽ tạo nhiều wallet để tự download skill của mình, hoặc submit skills vô nghĩa để lấy $50 participation reward. Các rules dưới đây được thiết kế để kill farming mà không làm khó contributors thực sự.

**Rule 1 — Submission eligibility (chống spam submissions):**

- Skill phải có `SKILL.md` đầy đủ (ít nhất 500 words, có phần "How to use", "Example output", "Limitations")
- Skill phải đã được deploy thực sự trên Skill Market (on-chain tx hash required)
- Skill phải có ít nhất **1 download từ wallet khác với wallet của creator** trước khi team review
- Team review tất cả submissions trong 48h — reject nếu: skill chỉ là copy-paste, không có utility thực, hoặc là variation của skill đã có

**Rule 2 — Download verification (chống self-download farming):**

- **Một wallet chỉ được tính 1 download duy nhất per skill** — platform enforce on-chain
- Wallet downloader phải đã có ít nhất **1 BNB transaction trước khi download** (fresh wallet created ngay lúc download = không tính; wallet đã có ít nhất 1 tx bất kỳ trước đó = tính)
- Team có thể disqualify bất kỳ cluster wallets nào có on-chain patterns giống nhau (same funding source, same transaction pattern trong 24h)

**Rule 3 — Participation Reward anti-spam gate:**

- $50 participation reward CHỈ được trả nếu skill đạt **tối thiểu 5 unique downloads** từ wallets không liên quan đến creator (verified by platform analytics)
- Deadline claim reward: 7 ngày sau khi contest kết thúc, qua form claim với wallet address
- Payment via USDT trên BSC (có on-chain record, không thể fake)

**Rule 4 — One submission per person:**

- Mỗi Twitter handle + wallet address chỉ được submit 1 skill
- Team check trùng lặp bằng wallet address (không thể dùng nhiều wallet vì phải verify Twitter — 1 Twitter handle per skill)

**Submission Portal:**

- Tạo simple form tại `clawfriend.ai/contest` (Google Form hoặc Typeform)
- Fields: Name, Twitter handle, Skill URL (link trên Skill Market), Brief description (≤200 words), Target user, How does it work
- Submission deadline: Chủ nhật tuần 3, 23:59 UTC

#### Action Plan tuần từng tuần — đủ chi tiết để intern thực hiện

**Tuần 1: Announce + Kickoff (Budget: $0 — chỉ announce)**

_Ngày 1 (Announcement Day — quan trọng nhất):_

**Action 1:** Post announcement thread trên @clawfriend_ai:

```
🏆 Introducing: ClawFriend Skill Builder Championship — Season 1

$2,500 prize pool. 3 weeks. Build skills for AI agents on BSC.

Rules:
→ Build any skill/workflow/prompt for ClawFriend agents
→ Publish on Skill Market
→ Most downloads + likes + quality score wins

Prizes:
🥇 Grand Champion: $500
🥇 Top 3: $200 each
🥈 Top 10: $100 each
🥉 Participate & qualify: $50

Full rules: [clawfriend.ai/contest]
Contest starts NOW. Deadline: [Date]

RT to spread 🔁
```

**Action 2 (cùng ngày, sau thread 2 giờ):** Post trong 6 communities:

- OpenClaw GitHub Discussions → tạo issue titled "Skill Builder Championship — $2,500 Prize Pool"
- r/web3dev (Reddit) → post với title "We're giving away $2,500 for building AI agent skills"
- r/BNBChain (Reddit)
- r/MachineLearning (Reddit) — focus vào ML application angle
- Hacker News "Show HN" → "Show HN: ClawFriend — AI agent skill marketplace on BSC, $2,500 contest"
- DevTo → article "Build AI Agent Skills, Win $2,500 — ClawFriend Skill Builder Championship"

**Action 3:** DM 20 active ClawHub skill creators (check [clawhub.ai/skills](https://clawhub.ai/skills) → sort by downloads):

```
Hey [name]! Your [skill name] skill has [X] downloads on ClawHub — impressive work.

We're running a $2,500 contest on ClawFriend (a new AI agent marketplace on BSC) and I think you'd be a strong contender.

Your ClawHub skills can likely be adapted for ClawFriend with minimal changes (same SKILL.md format). Happy to help with migration if needed.

Info: [clawfriend.ai/contest]

Interested?
```

_Ngày 2–7:_ Answer mọi question trong #contest channel trên Discord (tạo dedicated channel). Post daily "Contest Update" tweet: số submissions received, leaderboard preview, tips for participants.

**Tuần 2: Active Submissions + Mid-Contest Boost**

_Ngày 8–10:_

- Check submissions daily qua `GET /v1/academy/skills?sortBy=CREATED_AT&limit=20` — xem skills mới publish
- Review và approve/reject qua internal checklist:
  - SKILL.md tồn tại và có nội dung (không blank)
  - Có ít nhất 1 concrete example
  - Mô tả target user rõ ràng
  - Không chứa malicious instructions
  - Works với ClawFriend API (test manually)

_Ngày 11 (Mid-contest Momentum Tweet):_

```
📊 Contest Midpoint Update — [X] skills submitted so far!

Current leaderboard:
🥇 [Skill A] by @builder1 — 47 downloads, 23 likes
🥈 [Skill B] by @builder2 — 31 downloads, 18 likes
🥉 [Skill C] by @builder3 — 28 downloads, 15 likes

9 days left. Grand Prize still up for grabs. 🏆

Current participants: share your skill to get more downloads!
[clawfriend.ai/skills]
```

_Lý do post midpoint leaderboard:_ Participants sẽ tự retweet + share skill của mình để climb leaderboard → organic marketing miễn phí. Đây là mechanic tương tự các hackathon successful nhất (ETHGlobal, Gitcoin Grants).

**Tuần 3: Final Push + Voting**

_Ngày 15–18 (Final Push):_

- Post countdown: "48 hours left in the Skill Builder Championship!"
- Feature 3–4 standout submissions trong Twitter thread: "Skills we're loving so far..."
- Post trong Telegram community: tag builders, encourage community to download + like

_Ngày 19 (Deadline):_

- Close submissions at 23:59 UTC
- Freeze download/like counts for scoring

_Ngày 20–21 (Review):_

- Team finalize Quality Score cho mỗi submission
- Calculate final Total Score = (Downloads × 3) + (Likes × 2) + (Quality × 5)
- Prepare winners announcement

**Tuần 4: Announce Winners + Payout**

_Ngày 22–23 (Announce):_

Post winners thread trên @clawfriend_ai:

```
🏆 ClawFriend Skill Builder Championship — Season 1 RESULTS!

Grand Champion ($500): [Skill Name] by @winner
"[Quote from skill description]" — [X] downloads, [X] likes, Quality: 9/10

[Continue for all tiers]

Total: [X] skills submitted, [X] approved, $2,500 distributed

Congrats to all builders! Season 2 coming in [month]. 🚀
```

_Ngày 24–25 (Payout):_

- Collect BNB wallet addresses từ winners (via DM hoặc form)
- Transfer rewards on-chain (BNB preferred — aligned với platform)
- Tweet TX hash cho mỗi payment: transparency builds trust

_Ngày 26–28 (Post-Contest):_

- Feature top 10 skills với "Staff Picks" badge trên Skill Market homepage
- Blog post: "26 Community Skills Built in Season 1 — Here's What ClawFriend Skill Market Can Do Now"
- Announce Season 2 để maintain momentum: "Season 2 starts [next month]. Prize pool TBD."
- Invite top 5 builders to join as "Community Advisors" — give early access to new features

#### Why This Channel Drives Both Supply AND Demand

| Kết quả                               | Impact                | Tại sao quan trọng                                   |
| ------------------------------------- | --------------------- | ---------------------------------------------------- |
| 25+ quality skills trên marketplace   | Giải quyết cold-start | User đến thấy có content → không bounce ngay         |
| 60–100 builders submit (unique users) | Demand-side users     | Builders deploy agents để test skills → active users |
| Builders tự share để get downloads    | Organic marketing     | Ước tính 80K–150K impressions miễn phí               |
| Public leaderboard → FOMO             | Urgency & competition | Tương tự Virtuals viral mechanic nhưng productive    |
| Winners được feature → credibility    | Social proof          | "Top builders choose ClawFriend" narrative           |

#### Metrics

| Metric                                      | Target         |
| ------------------------------------------- | -------------- |
| Contest submissions                         | 60–100         |
| Skills approved + published                 | 25–35          |
| Unique builders (users) onboarded           | 50–70          |
| Organic impressions từ builders sharing     | 80,000–150,000 |
| Skill downloads từ contest skills (month 1) | 800–1,500      |

---

### KÊNH 4 (Paid): Creator Milestone Reward — On-Chain Verified — $1,000

Từ competitive analysis: **MyShell có 170K creators nhưng không có economic incentive** → creator churn cao. ClawFriend có 5% creator fee là lợi thế, nhưng tháng đầu chưa có trading volume → creators chưa earn được gì → dễ bỏ cuộc. Milestone reward giải quyết "valley of death" này.

Tất cả milestones đều **on-chain verified** — thưởng dựa trên giá trị thật: holder thật bỏ BNB mua share, volume thật đã trade on-chain, downloads thật từ wallets đã có giao dịch trước đó.

#### Milestone Structure (On-chain verified)

| Milestone               | Reward | Điều kiện verify                                                                                                   | Tại sao khó farm                                      |
| ----------------------- | ------ | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- |
| **First Real Holder**   | $20    | Agent có ≥ 5 holders NGOÀI creator, mỗi holder có wallet age > 30 ngày                                             | Phải thuyết phục 5 người thật bỏ BNB mua share        |
| **Trading Volume $500** | $30    | Agent đạt $500 cumulative trading volume (on-chain, verify qua smart contract events)                              | Volume không thể fake mà không tốn BNB thật           |
| **Skill 50 Downloads**  | $25    | 1 skill đạt 50 unique wallet downloads (mỗi wallet chỉ tính 1 lần, wallet phải có ít nhất 1 tx trước khi download) | Download on-chain, chống fresh-wallet spam            |
| **Volume $2,000**       | $50    | Agent đạt $2,000 cumulative trading volume                                                                         | Milestone trưởng thành — agent đang thực sự hoạt động |
| **20 Real Holders**     | $75    | ≥ 20 holders NGOÀI creator, wallet age > 30 ngày                                                                   | Agent có traction thực sự                             |

**Tổng nếu 1 creator đạt all milestones:** $20 + $30 + $25 + $50 + $75 = **$200/creator**

Với $1,000 budget: Reward cho **5 full-stack creators** hoặc **10–15 creators** đạt 2–3 milestones.

**Lý do các milestones này không thể farm:**

- "5 real holders" yêu cầu 5 người khác nhau phải bỏ BNB thật mua share → creator không thể tự làm mà không tốn nhiều tiền hơn reward nhận được
- "$500 trading volume" = BNB thật đã move on-chain → có thể tự buy/sell nhưng sẽ tốn gas + mất tiền vào bonding curve spread
- "50 unique wallet downloads" từ wallets đã có ít nhất 1 on-chain tx trước đó = không thể dùng fresh wallet vừa tạo để download spam

#### Cách implement Milestone Tracking (On-chain)

**Bước 1: Setup tracking** (ngay ngày đầu launch):

Tạo Google Sheet:

- Agent ID | Creator Twitter | Creator Wallet | Deploy Date | Holder Count | Holder Age Check | Trading Volume ($) | Skill Downloads (unique wallets) | Milestones Achieved | Total Reward Earned | Paid (Y/N)

**Bước 2: Daily check** (5 phút/ngày):

```bash
# Check holders count
GET https://api.clawfriend.ai/v1/agents/{agentId}
# → xem totalHolder

# Check trading volume (từ smart contract events)
GET https://api.clawfriend.ai/v1/agents/{agentId}/trades
# → sum buyPrice + sellPrice của tất cả trades

# Check skill downloads (unique wallets)
GET https://api.clawfriend.ai/v1/academy/skills/{skillId}/downloads
# → count distinct walletAddress

# Verify wallet age (gọi BSCScan API)
GET https://api.bscscan.com/api?module=account&action=txlist&address={walletAddr}&sort=asc
# → xem first transaction date → tính wallet age
```

**Bước 3: Kiểm tra anti-farming trước khi pay:**

Trước khi pay bất kỳ milestone nào, check 2 điều:

1. Holders/downloaders có cùng funding source không? (tra trên BscScan → kiểm tra source of BNB)
2. Có cluster wallets nào tạo ra cùng ngày, cùng pattern không?

Nếu có pattern bất thường → flag → review thủ công → delay payment 72h để investigate.

**Bước 4: Notification + Public Celebration:**

DM creator: _"Your [Milestone] is verified on-chain. $[X] reward incoming to [wallet]. Tx will be sent within 24h."_

Post public: _"@[creator]'s agent [AgentName] just hit [X] real holders on ClawFriend. Building something real."_

#### Announce Milestone Program

```
For agent creators on ClawFriend:

We reward real traction — on-chain verified:

👥 5 real holders → $20
📊 $500 trading volume → $30
⭐ 50 skill downloads → $25
📊 $2,000 trading volume → $50
🏆 20 real holders → $75

Max earn: $200 on top of your 5% creator fees.
All milestones verified on-chain — no gaming possible.

[clawfriend.ai/milestones]
```

#### Metrics

| Metric                                | Target                           |
| ------------------------------------- | -------------------------------- |
| Creators who hit ≥1 milestone         | 10–15                            |
| Creators who hit all milestones       | 3–5                              |
| Total reward distributed              | $700–$1,000                      |
| Confirmed anti-spam blocks            | Track separately (KPI cho team)  |
| Retention rate (active after 30 days) | 65–75% vs ~25% without incentive |

---

### KÊNH 5 (Paid): Galxe Quest Campaign (Filtered) — $500

**Galxe có giá trị vì:**

- Cost-efficient nhất cho social following ($0.50–1/follower)
- BSC projects dùng Galxe nhiều → đúng audience
- OAT (on-chain achievement tokens) có brand recognition trong Web3

#### Quest Design (Filtered — rewards chỉ cho on-chain actions)

**Quest Name:** "ClawFriend Genesis — Be Among the First 1,000"  
**Platform:** [galxe.com](https://galxe.com)  
**Duration:** 3 tuần

| Step        | Task                                                  | Reward            | Lý do                                          |
| ----------- | ----------------------------------------------------- | ----------------- | ---------------------------------------------- |
| 1           | Follow @clawfriend_ai trên Twitter                    | Participation OAT | Social following — không pay tiền cho bước này |
| 2           | Join Telegram group                                   | Participation OAT | Community growth                               |
| 3           | Connect BSC wallet trên clawfriend.ai                 | $2                | First real action, verifiable on-chain         |
| 4           | Download bất kỳ 1 skill (wallet phải có age > 7 ngày) | $3                | On-chain verify, anti-farming                  |
| 5 _(Bonus)_ | Deploy 1 agent + buy first share                      | $20               | Power user action — pay well                   |
| 6 _(Bonus)_ | Publish 1 skill lên Skill Market                      | $30               | Creator action — cực kỳ valuable               |

**Reward distribution ($500 total — chỉ pay cho Steps 3–6):**

| Tier                         | Reward   | Slots tối đa                      | Tổng tối đa |
| ---------------------------- | -------- | --------------------------------- | ----------- |
| Wallet connect (Step 3)      | $2 each  | 50                                | $100        |
| Skill download (Step 4)      | $3 each  | 50                                | $150        |
| Deploy agent (Step 5 bonus)  | $20 each | 10                                | $200        |
| Publish skill (Step 6 bonus) | $30 each | Không giới hạn nhưng cap $50 tổng | $50         |
| **Tổng**                     |          |                                   | **$500**    |

> **Quan trọng:** Steps 1–2 (Twitter follow, Telegram join) **không được trả tiền** — chỉ nhận Galxe OAT. Điều này loại bỏ phần lớn quest farmers vì họ chỉ đến để nhận tiền, không phải NFT không có giá trị trao đổi.

> **Anti-farming trên Galxe:** Galxe có native Sybil detection (dùng Gitcoin Passport hoặc Galxe Passport). Bật "Passport required" cho Steps 3–6 — chỉ users có Passport score > 20 mới eligible nhận reward tiền.

#### Setup Galxe Campaign — Step by Step

_Ngày 1–2 (Setup):_

1. Vào [galxe.com](https://galxe.com) → "Create a Space" → điền thông tin ClawFriend
2. Tạo Campaign → "OAT Campaign" (on-chain achievement token) hoặc "Points Campaign"
3. Define tasks theo bảng trên:

- Twitter Follow: Galxe có native Twitter API integration
- Telegram Join: nhập link group
- Website visit: dùng Galxe "Visit URL" task + screenshot verification
- Wallet Connect: dùng Galxe "On-chain" task → verify wallet interaction với clawfriend.ai smart contract

4. Configure rewards: Setup BNB reward pool ($1,000 worth of BNB)
5. **Apply for "Featured" campaign** trên Galxe — cần email [[partnerships@galxe.com](mailto:partnerships@galxe.com)] 5–7 ngày trước launch với brief description

_Ngày 3 (Launch):_

- Post announcement trên @clawfriend_ai + Telegram + Discord
- Link: "Complete quests → earn rewards AND be part of the ClawFriend Genesis community"
- Cross-post: r/BNBChain, r/CryptoMoonShots (careful — read rules)

#### Metrics

| Metric                   | Target      | Note                                                                |
| ------------------------ | ----------- | ------------------------------------------------------------------- |
| Quest page visits        | 1,000–2,000 | Budget nhỏ hơn = reach thấp hơn                                     |
| Twitter follows          | 400–700     | OAT-only, không pay = ít hơn nhưng genuine hơn                      |
| Telegram joins           | 300–500     |                                                                     |
| Wallet connects (Step 3) | 50–100      | Pay $2, on-chain verified                                           |
| Skill downloads (Step 4) | 50–100      | Pay $3, on-chain verified (wallet phải có ít nhất 1 tx trước đó)    |
| Agent deploys (Bonus)    | 5–15        | High value — mỗi user này có thể worth $50+ LTV                     |
| CAC (wallet connects)    | $5–$10      | $500 / 50–100                                                       |
| Quest farmer rate        | < 60%       | Benchmark Galxe standard là 80% farmers → mình filter xuống còn 60% |

---

### KÊNH 6 (Organic): Technical Blog trên Mirror.xyz — $0

**Tại sao Mirror.xyz thay vì Medium hay Substack?**

Mirror.xyz là platform Web3-native: bài viết được minted on-chain, searchable trong crypto community, domain authority tốt cho crypto-related keywords. SingularityNET dùng blog extensively cho thought leadership — ClawFriend cần làm tương tự nhưng với tone consumer-friendly hơn (not enterprise).

**Chiến lược nội dung rút ra từ competitive analysis:**

| Type             | Ví dụ                                                   | Target SEO keyword                                   | Tại sao effective                                                       |
| ---------------- | ------------------------------------------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------- |
| Comparison       | "ClawFriend vs Virtuals Protocol — 5 Key Differences"   | ClawFriend vs Virtuals, AI agent platform comparison | Virtuals users đang disenchanted sau -71% → họ đang search alternatives |
| Tutorial         | "How to Deploy Your First AI Agent on BSC in 5 Minutes" | deploy AI agent BSC                                  | Onboarding content drives direct signups                                |
| Problem-solution | "Why Your Virtuals Agent Token Keeps Dropping"          | Virtuals token declining, AI agent utility           | Address pain point → offer ClawFriend as solution                       |
| Education        | "Bonding Curve + Skills: How ClawFriend Economics Work" | bonding curve AI agent, holder-gated skills          | Explain unique value prop vs all competitors                            |
| Showcase         | "26 AI Agent Skills Built by Community in Season 1"     | AI agent skills BSC, ClawFriend skill market         | Social proof + SEO for "AI agent skills" keyword                        |

#### Content Calendar — 8 bài/tháng (2/tuần)

| #   | Tiêu đề                                                                 | SEO Target                                  | Tuần   | Cross-post                   |
| --- | ----------------------------------------------------------------------- | ------------------------------------------- | ------ | ---------------------------- |
| 1   | "What is ClawFriend? The AI Agent Platform Virtuals Forgot to Build"    | ClawFriend, AI agent BSC                    | Tuần 1 | r/BNBChain, Telegram         |
| 2   | "How to Deploy Your First AI Agent on BSC — Complete Guide"             | deploy AI agent BSC guide                   | Tuần 1 | r/BNBChain, Discord          |
| 3   | "5 Ways ClawFriend is Different from Virtuals Protocol"                 | ClawFriend vs Virtuals                      | Tuần 2 | r/cryptocurrency, Twitter    |
| 4   | "The BSC Smart Contract Auditor Skill — How to Detect Rug Pulls in 30s" | BSC rug pull detector, smart contract audit | Tuần 2 | r/ethereum, r/cryptocurrency |
| 5   | "Why AI Agent Shares Should Have Utility (Not Just Speculation)"        | AI agent token utility, bonding curve       | Tuần 3 | r/Ethereum, r/defi           |
| 6   | "Top 5 BSC DeFi Skills for AI Agents in 2026"                           | BSC DeFi AI agent skills                    | Tuần 3 | Twitter thread, Reddit       |
| 7   | "Skill Builder Championship Season 1 — Meet the Winners"                | ClawFriend Skill Market, AI agent skills    | Tuần 4 | Twitter, Reddit              |
| 8   | "How an AI Agent Earned $300 Passive Income in Month 1 on ClawFriend"   | AI agent passive income BSC                 | Tuần 4 | r/cryptocurrency, Twitter    |

#### How to Write Each Article — Template

Mỗi bài follow structure:

1. **Hook (1–2 câu)**: Câu hỏi hoặc pain point. VD: "Your Virtuals agent token is down 40%. Here's why."
2. **Problem (1 đoạn)**: Expand pain point với data
3. **Solution (main content)**: Tutorial/comparison/explanation
4. **Proof**: Screenshots, data, links tới Skill Market
5. **CTA**: "Try it free: clawfriend.ai/skills | Join community: [Telegram link]"
6. **UTM Links**: Tất cả links đều có UTM. VD: `clawfriend.ai?utm_source=mirror&utm_medium=blog&utm_content=article1`

#### Cross-posting Guide (mỗi bài ~30 phút)

**Reddit r/BNBChain:**

- Title: Không thêm "ClawFriend" vào title (sẽ bị spam filter). VD: "I built an AI agent on BSC that auto-audits smart contracts [tutorial]"
- Body: Paste first 2 paragraphs → "Full article: [Mirror link]"
- Post vào: Thứ 3 hoặc Thứ 4, 12PM–3PM UTC (peak BSC community time)

**r/cryptocurrency:**

- Phải có genuine value — không pure promotion
- Include data/numbers. VD: "BSC has 1.24M daily active addresses but zero AI agent marketplaces — here's what I'm building"

**Telegram groups:**

- ClawFriend community group
- BSC-specific groups (tìm qua @BNBChain official → check linked groups)
- Không spam — chỉ post 1 lần/group/tuần

#### Metrics

| Metric                     | Target          |
| -------------------------- | --------------- |
| Page views/tháng           | 3,000–5,000     |
| Signups từ UTM             | 60–100          |
| Reddit upvotes (top posts) | 50–200 per post |
| Skill downloads từ CTAs    | 150–300         |

---

### KÊNH 7 (Organic): Community Building — Telegram + Discord — $0

**Tại sao community quan trọng với ClawFriend đặc biệt?**

ClawFriend có **Social Layer** là core differentiator — không đối thủ nào có (Virtuals, ElizaOS, SingularityNET, Olas, MyShell đều thiếu). Nhưng để Social Layer có network effects, cần **có người dùng nó**. Community Telegram/Discord là nơi nuôi dưỡng social layer initial user base.

Autonolas có conferences (828 attendees, 2,600+ registrations) — community building offline. ClawFriend cần làm online equivalent.

#### Platform Setup

**Telegram Group (public — main channel):**

| Element        | Chi tiết                                                                                                                     | Công cụ                    |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| Welcome bot    | Auto-message khi join: "Welcome! Here's how to start: 1️⃣ Browse Skills [link] 2️⃣ Deploy Agent [link] 3️⃣ Join Contest [link]" | Combot (combot.org) — free |
| Pinned message | Quick links + Contest info + Milestone Program rules                                                                         | Manual pin                 |
| Anti-spam      | Auto-delete messages có link trong 24h đầu sau join                                                                          | Combot settings            |
| Daily content  | 1 post/ngày: feature a skill, share agent tweet, contest update                                                              | Manual                     |

**Discord Server (structured — cho developers):**

| Channel        | Mục đích                                    | Who posts                   |
| -------------- | ------------------------------------------- | --------------------------- |
| #announcements | Platform updates, contest news              | Team only                   |
| #general       | Open discussion                             | Everyone                    |
| #skill-market  | Share/discuss skills, get feedback          | Everyone                    |
| #contest-s1    | Season 1 contest discussion, submissions    | Everyone                    |
| #milestones    | Celebrate milestone achievements            | Everyone + Bot              |
| #dev-help      | Technical questions về API, SKILL.md format | Team + Experienced builders |
| #feedback      | Feature requests, bugs                      | Everyone                    |
| #showcase      | Share agent tweets/profiles                 | Everyone                    |

**Discord Roles (auto-assigned):**

| Role               | Trigger                                               | Perks                                                    |
| ------------------ | ----------------------------------------------------- | -------------------------------------------------------- |
| 🌱 New Member      | Join server                                           | -                                                        |
| 🔨 Builder         | Published 1+ skills                                   | Access to #builder-only channel (early feature previews) |
| 💎 Shareholder     | Holds any agent share (verify via wallet connect bot) | Access to #holder-alpha channel                          |
| 🤖 Agent Creator   | Deployed 1+ agent                                     | Access to #creator-lounge                                |
| 🏆 Season 1 Winner | Contest winners                                       | Permanent badge, featured profile                        |

> **Tại sao roles quan trọng:** Tạo gamification và identity trong community. Tương tự Virtuals dùng "co-owner" framing để build pride of ownership. ClawFriend cần làm tương tự.

#### Weekly Community Events (4 events/tháng)

| Event                                   | Tuần   | Format                                            | Mục tiêu                                                           |
| --------------------------------------- | ------ | ------------------------------------------------- | ------------------------------------------------------------------ |
| **AMA: "What are we building and why"** | Tuần 1 | Telegram voice chat, 30 phút                      | Build trust, explain vision, address concerns về BSC/bonding curve |
| **"Show Your Agent" competition**       | Tuần 2 | Tweet your agent → community votes best           | Activate Social Layer, create content, surface good agents         |
| **Skill Demo Live**                     | Tuần 3 | Screen share: team demos 3 community-built skills | Showcase Skill Market value, recognize builders                    |
| **AMA: Season 1 Winners**               | Tuần 4 | Contest winners share how they built skills       | Social proof, inspire new builders, build community narrative      |

#### AMA Preparation Guide (để intern có thể run)

**Trước AMA 48 giờ:**

1. Post trong Telegram: "AMA này Thứ 5 lúc 3PM UTC — submit questions tại đây 👇"
2. Collect 10–15 top-voted questions

**Trong AMA (30 phút):**

- 5 phút: Team giới thiệu bản cập nhật platform
- 20 phút: Answer top questions (prep answers trước)
- 5 phút: Open floor

**Sau AMA:**

- Record/transcript → post trong #announcements
- Tweet 3 highlights từ AMA → @clawfriend_ai

#### Metrics

| Metric                           | Target             | Timeline     |
| -------------------------------- | ------------------ | ------------ |
| Telegram members                 | 400–600            | Cuối tháng 1 |
| Discord members                  | 200–400            | Cuối tháng 1 |
| Daily active messages (Telegram) | 30–60              | Từ tuần 2    |
| AMA attendees                    | 50–150 per session |              |
| "Show Your Agent" participants   | 20–40              | Tuần 2       |
| Organic referrals từ community   | 50–80 signups      |              |

---

## 3. Partnership Plan (Bonus — Điểm cộng)

### Partnership 1: OpenClaw Community — Highest Priority

| Mục                           | Chi tiết                                                                                                                                                                                                                                                                                                              |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Đối tác**                   | OpenClaw framework (225K+ GitHub stars) + ClawHub (5,700+ community skills)                                                                                                                                                                                                                                           |
| **Link**                      | [openclaw.ai](https://openclaw.ai) · [clawhub.ai](https://clawhub.ai)                                                                                                                                                                                                                                                 |
| **Tại sao ưu tiên cao nhất?** | ClawFriend install skill qua `npx clawhub@latest install clawfriend`. OpenClaw là foundation của ClawFriend — đây là partnership tự nhiên và strategic nhất. ElizaOS không có marketplace cho 10K+ agents → OpenClaw/ClawHub builders cũng trong tình huống tương tự. ClawFriend fill chính xác gap này.              |
| **Đề xuất cụ thể**            | (1) "1-click publish to ClawFriend": Thêm button trên ClawHub skill page → publish trực tiếp lên ClawFriend Skill Market API. (2) Cross-list top 20 ClawHub skills trên ClawFriend homepage với creator consent. (3) Co-host Skill Builder Championship Season 2: "ClawFriend × OpenClaw Skill Championship"          |
| **Lợi ích cho OpenClaw**      | Developers earn real money từ skills (5% creator fee). Skills get economic layer. ClawHub users discover monetization path.                                                                                                                                                                                           |
| **Lợi ích cho ClawFriend**    | Instant supply: 5,700+ skills adaptable. Developer community 225K+ stars. Cross-promotion trong OpenClaw documentation.                                                                                                                                                                                               |
| **Action steps**              | 1. Ngày 1: File GitHub Issue tại github.com/openclaw/openclaw: "Partnership Proposal: ClawFriend × OpenClaw Skill Market Integration". 2. Ngày 7: Follow up + DM OpenClaw team trên Twitter. 3. Ngày 14: Propose technical spec (PR hoặc API bridge). 4. Month 2: Co-authored blog post + joint Twitter announcement. |

### Partnership 2: BNB Chain Official Ecosystem

| Mục                  | Chi tiết                                                                                                                                                                                                                                                                                                                                                  |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Đối tác**          | BNB Chain (official) + PancakeSwap (5.8M unique traders Q1 2025)                                                                                                                                                                                                                                                                                          |
| **Link**             | [bnbchain.org](https://www.bnbchain.org) · [pancakeswap.finance](https://pancakeswap.finance)                                                                                                                                                                                                                                                             |
| **Tại sao?**         | ClawFriend trên BSC = aligned interests. BNB Chain đang push AI vertical mạnh (BSC AI Initiative). Từ competitive analysis: không có AI agent marketplace nào trên BSC → ClawFriend là _first mover_ → BNB Chain muốn support. PancakeSwap 5.8M traders là exact target users cho ClawFriend DeFi skills (Yield Optimizer, Contract Auditor).             |
| **Đề xuất cụ thể**   | (1) Apply BNB Chain MVB Accelerator program (Most Valuable Builder) — nhận $50K+ funding + marketing + listing. (2) Apply BNB Chain Grant Program (AI category). (3) Co-create "PancakeSwap Skills Collection" — skills specifically for PancakeSwap traders, featured trên both platforms.                                                               |
| **Action steps**     | 1. Apply MVB: [bnbchain.org/en/bsc-mvb-program](https://www.bnbchain.org/en/bsc-mvb-program) — deadline thường mỗi quý. 2. Email BD team: [bd@bnbchain.org](mailto:bd@bnbchain.org) với 1-pager ClawFriend. 3. Reach PancakeSwap ecosystem: discord.gg/pancakeswap → #business-partnerships. 4. Tạo dedicated "PancakeSwap Skills" tag trên Skill Market. |
| **Potential upside** | BNB Chain grants $50K–$200K cho promising projects. Official endorsement = credibility vs "BSC less premium" perception. Access BNB Chain marketing channels (10M+ reach).                                                                                                                                                                                |

### Partnership 3: Virtuals Protocol Community (Tactical)

| Mục                   | Chi tiết                                                                                                                                                                                                                                                                                             |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Đối tác**           | Virtuals builders community (không phải official partnership với team)                                                                                                                                                                                                                               |
| **Tại sao tactical?** | Virtuals token -71% từ ATH → 10,000+ builders trên platform đang disenchanted. Họ có experience với AI agent tokenization nhưng platform thiếu Skill Market + Social Layer. ClawFriend có chính xác những gì Virtuals thiếu. Đây là prime conversion opportunity.                                    |
| **Approach**          | Community-level, không phải corporate. Tìm active Virtuals builders trên Twitter → DM cá nhân → invite tham gia Contest + Milestone Program.                                                                                                                                                         |
| **Content series**    | 3 blog posts: "What Virtuals Agents Can Do on ClawFriend That They Can't on Virtuals". Post trong Virtuals Discord/Telegram một cách value-add (không spam).                                                                                                                                         |
| **Action steps**      | 1. Search Twitter: "Virtuals agent" + filter by recent → shortlist 20 active builders. 2. DM: "Hey, saw you're building on Virtuals. We built something that adds Skill Market + Social Layer — want to try? Running a $2,500 contest." 3. Track conversions: Tag "from_virtuals" trong spreadsheet. |

---

## 4. Timeline tổng hợp tháng đầu tiên

| Tuần       | Paid Channels                                                                                                                                                                                                                                                                  | Organic                                                                                                               | Partnership                                                        | Key Milestone                                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| **Tuần 1** | **Ads:** Setup + launch A/B ($500). **KOL:** Outreach 10 KOLs, shortlist. **Contest:** ANNOUNCE Day 1 (hardest task: DM 20 ClawHub creators). **Milestones:** Announce program. **Galxe:** Setup + launch quest                                                                | Blog: 2 bài (intro + deploy guide). Community: TG + Discord live + welcome bot + 3 seed posts. AMA #1 cuối tuần       | OpenClaw: GitHub issue filed. BNB Chain: MVB application submitted | **"Foundation Day":** Contest live, marketplace seeding begins, all channels initialized                           |
| **Tuần 2** | **Ads:** Optimize, $750 spend, kill < 0.8% CTR. **KOL:** Contracts signed (4 KOLs), briefs delivered. **Contest:** First submissions flowing, daily review, midpoint tweet. **Galxe:** Quest running, leaderboard update. **Milestones:** First milestone achievers celebrated | Blog: 4 bài total, cross-post Reddit. Community: daily engagement, "Show Your Agent" event                            | OpenClaw: Follow-up. PancakeSwap: Outreach                         | **"First Traction":** 10+ skills submitted to contest, signups from ads starting, community 200+ members           |
| **Tuần 3** | **Ads:** Scale winners, retargeting, $800. **KOL:** 4–5 posts go live → RT + amplify (peak traffic week). **Contest:** Final push, deadline, community voting. **Galxe:** Quest deadline. **Milestones:** Celebrate achievers publicly                                         | Blog: 6 bài. Community: Skill Demo Live event, Bounty winners prep                                                    | First partnership meeting                                          | **"Growth Spike":** KOL posts = biggest traffic day, contest FOMO peak, quest completions. Potential viral moment. |
| **Tuần 4** | **Ads:** Final push $450. **KOL:** ROI tracking, 50% final payment. **Contest:** Winners announced, on-chain payout, skills featured. **Galxe:** Payout. **Milestones:** Final count + distribute remaining                                                                    | Blog: 8 bài, winners recap. Community: AMA #2 (contest winners), "Community Wrapped", appoint mods, announce Season 2 | Co-marketing content draft                                         | **"Month 1 Complete":** $10K deployed, marketplace has 25+ quality skills, 700–1,250 signups, Season 2 announced   |

---

## 5. Unit Economics tổng hợp

> _BGK sẽ hỏi: "$10K budget có đủ để có 1,000 user không?"_

### Signups per Channel (Revised)

| Channel                     | Budget      | Signups (conservative) | Signups (optimistic) | CAC                | User Quality                |
| --------------------------- | ----------- | ---------------------- | -------------------- | ------------------ | --------------------------- |
| Twitter/X Ads + Reddit      | $3,500      | 80–375                 | —                    | $9–44              | Medium-High (targeted)      |
| KOL/Influencer (perf-based) | $2,000      | 60–120                 | —                    | $16–33             | High (trust-driven)         |
| Skill Builder Contest       | $2,500      | 30–60                  | —                    | $41–83             | Highest (builders)          |
| Creator Milestone           | $1,000      | 10–20                  | —                    | $50–100            | Highest (on-chain verified) |
| Galxe Quest (filtered)      | $500        | 50–100                 | —                    | $5–10              | Low-Medium (filtered)       |
| Blog (organic)              | $0          | 50–100                 | —                    | $0                 | High (intent-driven)        |
| Community (organic)         | $0          | 30–60                  | —                    | $0                 | High (word-of-mouth)        |
| **Total**                   | **$10,000** | **310–835**            |                      | **$12–32 blended** |                             |

Contest CAC cao nhưng builders = highest value users: tạo content, deploy agents, attract các users khác. 1 builder có thể attract 5–10 users organically.
Milestone CAC cao nhưng milestone achievers không thể fake (on-chain) = highest quality, lowest churn.

**Lưu ý về range signups rộng hơn v1:** Conservative thấp hơn vì Galxe và KOL budget đã giảm. Bù lại: quality cao hơn, churn thấp hơn, revenue per user cao hơn.

### Trả lời BGK

**Q: "$10K có đủ 1,000 user tháng 1 không?"**

Honest answer: Conservative scenario cho ~310–835 signups trong tháng 1. 1,000 signups đạt được nếu có 1 KOL viral post (multiplier effect) hoặc nếu Galxe campaign outperform. Không guarantee 1,000 — nhưng 700 high-quality users > 1,000 quest farmers.

**Tại sao quality > quantity với ClawFriend:**
Platform revenue = 5% trading fee. 700 users actually trading > 1,500 users đăng ký rồi bỏ. 1 agent creator với 50 holders = $50/ngày revenue. 100 quest farmers = $0 revenue.

**Q: "LTV có đủ justify CAC không?"**

| User Type                        | CAC        | Estimated 12-month LTV                    | LTV/CAC      |
| -------------------------------- | ---------- | ----------------------------------------- | ------------ |
| Regular user (browse + download) | $9–15      | $15–25 (platform trading fees)            | 1.5–2.8x     |
| Active trader (holds shares)     | $15–25     | $50–100 (multiple trades)                 | 2.5–6.7x     |
| Agent creator (deploys + skills) | $40–83     | $200–500 (creator fees + skill downloads) | 2.4–12.5x    |
| **Blended**                      | **$12–32** | **~$50–80**                               | **1.6–6.7x** |

**Healthy target: LTV/CAC > 3x. Achievable với active traders + creators mix.**

---

## 6. Rủi ro & Kế hoạch dự phòng

| Rủi ro                                   | Xác suất | Impact     | Dấu hiệu nhận biết sớm                            | Kế hoạch dự phòng cụ thể                                                                                                                                                              |
| ---------------------------------------- | -------- | ---------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **X Ads bị reject**                      | 40%      | Cao        | Ads disapproved sau <24h review                   | Reddit Ads đã setup sẵn ($500 → $1,500). Chuyển toàn bộ $3,000 X Ads budget sang: $1,500 Reddit Ads + $1,500 vào KOL performance bonus pool                                           |
| **KOL performance thấp (không convert)** | 35%      | Trung bình | UTM clicks < 50 sau 5 ngày post live              | Performance-based model đã protect: chỉ mất flat fee $150–300/KOL. Replace KOL fail bằng KOL từ backup list. Không mất nhiều vì không trả full upfront                                |
| **Contest ít submissions (<15)**         | 25%      | Rất cao    | Tuần 1: < 5 submissions sau 7 ngày                | (1) Outreach thêm 20 developers qua Telegram/Discord. (2) Team self-creates 10 seed skills. (3) Extend deadline 1 tuần. (4) Lower quality bar: accept prompts/tools ngoài full agents |
| **Milestone bị game**                    | 20%      | Thấp-Trung | Cluster wallets cùng funding source claim rewards | On-chain verification đã bắt pattern này. Flag + investigate 72h trước pay. Refund không apply vì payment chỉ xảy ra sau verify                                                       |
| **Galxe farming cao**                    | 70%      | Thấp       | Wallet connects không return sau 7 ngày           | Đã accept risk và giảm budget xuống $500. Galxe chỉ cho awareness, không expect volume. Dùng Galxe Passport filter để giảm farmers từ 80% xuống còn ~50–60%                           |
| **BSC perception pushback**              | 35%      | Trung bình | Community comments "BSC is dead/scam chain"       | Counter: "PancakeSwap $205B volume Q1 2025, 5.8M unique traders." Include BSC data trong mọi blog và KOL brief                                                                        |
| **Marketplace vẫn trống sau contest**    | 15%      | Rất cao    | < 15 approved skills sau tuần 3                   | Team tạo 15 "official" skills sẵn (BSC Trading Analyzer, Contract Auditor, Yield Optimizer — đã có research trong skill-research.md). Không cần external builders để seed.            |

---

## 7. Metrics Dashboard — Theo dõi hàng tuần

> **Nguyên tắc đọc dashboard:** Signups quan trọng nhưng không phải metric duy nhất. Track thêm "quality metrics" (trading volume, skill downloads, active agents) vì đây là những gì thực sự tạo ra revenue và platform health.

| Metric                               | Tuần 1  | Tuần 2    | Tuần 3      | Tuần 4      | Tổng tháng 1 |
| ------------------------------------ | ------- | --------- | ----------- | ----------- | ------------ |
| **Signups (wallet connects)**        | 30–80   | 80–200    | 120–350     | 80–205      | 310–835      |
| Skills published (contest + organic) | 3–8     | 12–22     | 22–38       | 30–50       | 30–50        |
| Skill downloads (unique wallets)     | 50–150  | 250–500   | 500–900     | 600–800     | 1,400–2,350  |
| Contest submissions                  | 3–10    | 15–30     | 35–60       | —           | 35–60        |
| Milestone achievers (on-chain)       | 2–5     | 5–10      | 8–15        | 10–20       | 10–20        |
| Active agents deployed               | 3–8     | 10–18     | 20–35       | 30–55       | 30–55        |
| Trading volume (BNB)                 | 2–6     | 8–20      | 15–40       | 18–55       | 43–121       |
| Twitter followers                    | 200–400 | 700–1,500 | 1,800–3,000 | 2,500–4,500 | 2,500–4,500  |
| Community members (TG+Discord)       | 50–120  | 150–300   | 300–550     | 400–750     | 400–750      |
| Blog page views                      | 200–400 | 500–900   | 700–1,300   | 900–1,400   | 2,300–4,000  |
| Ad spend cumulative                  | $700    | $2,200    | $5,000      | $7,500      | $10,000      |
| Blended CAC (running)                | $8–23   | $11–27    | $14–41      | $12–32      | $12–32       |

**Cách đọc dashboard:**

- Tuần 1 signups thấp (~50–100) — NORMAL. Foundation building: contest announced, ads just launched
- Tuần 3 là peak (250–400) — KOL posts live, contest deadline FOMO, quest completions flood
- Tuần 4 có thể lower nếu Tuần 3 rất tốt (frontloaded users). Nhưng organic + word-of-mouth carry

**Weekly check-in (30 phút mỗi Thứ 2):**

1. Pull numbers từ platform analytics + X Ads + UTM
2. Update dashboard
3. Identify: Which channel underperforming? Shift budget/effort
4. Identify: Which channel surprising? Scale up

---

## Nguồn tham khảo

| #   | Nguồn                                                    | Link                                                                                                                     | Ngày truy cập |
| --- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------- |
| 1   | WebFX — Twitter Ads Cost Benchmarks (CPC, CPM)           | [webfx.com](https://www.webfx.com/social-media/pricing/how-much-does-twitter-advertising-cost/)                          | 25/02/2026    |
| 2   | Coinzilla — Crypto Advertising Statistics 2025           | [coinzilla.com](https://coinzilla.com/blog/crypto-advertising-statistics-2025/)                                          | 25/02/2026    |
| 3   | Flexe.io — Crypto KOL Marketing Playbook 2025            | [flexe.io](https://flexe.io/blog/crypto-kol-marketing-playbook-2025/)                                                    | 25/02/2026    |
| 4   | Galxe — Official Platform (20M+ users)                   | [galxe.com](https://galxe.com/)                                                                                          | 25/02/2026    |
| 5   | Web3Sense — KOL Engagement Rate Analytics                | [web3sense.ai](https://www.web3sense.ai/articles/twitter-analytics-crypto)                                               | 25/02/2026    |
| 6   | CoinGecko — Virtuals Protocol (-71% from ATH)            | [coingecko.com](https://www.coingecko.com/en/coins/virtual-protocol)                                                     | 25/02/2026    |
| 7   | CoinMarketCap — Virtuals 10,000+ agents, no skill market | [coinmarketcap.com](https://coinmarketcap.com/academy/article/80137a21-d7ae-4758-a025-a8bd81798404)                      | 25/02/2026    |
| 8   | CoinTelegraph — MyShell 170K creators, no monetization   | [cointelegraph.com](https://cointelegraph.com/press-releases/myshell-raises-11m-for-its-decentralized-ai-consumer-layer) | 25/02/2026    |
| 9   | GitHub — ElizaOS 17.5K stars, no marketplace             | [github.com/ai16z/eliza](https://github.com/ai16z/eliza)                                                                 | 25/02/2026    |
| 10  | Olas Blog Q2 — 854K agent-to-agent transactions          | [olas.network/blog/q2-2025](https://olas.network/blog/q2-2025)                                                           | 25/02/2026    |
| 11  | Token Terminal — BSC 1.24M daily active addresses        | [tokenterminal.com](https://tokenterminal.com/explorer/projects/bsc/metrics/active-addresses-daily)                      | 25/02/2026    |
| 12  | BeInCrypto — PancakeSwap $205.3B Q1 2025, 5.8M traders   | [beincrypto.com](https://beincrypto.com/pancakeswap-trading-volume-all-time-high/)                                       | 25/02/2026    |
| 13  | Messari — State of BNB Chain Q1 2025 ($5.3B TVL)         | [messari.io](https://messari.io/report/state-of-bnb-chain-q1-2025)                                                       | 25/02/2026    |
| 14  | Chainalysis — Global Crypto Adoption Index (SEA top)     | [chainalysis.com](https://www.chainalysis.com/blog/2024-global-crypto-adoption-index/)                                   | 25/02/2026    |
| 15  | BlockEden — Web3 AI Agent Market $4.34B                  | [blockeden.xyz](https://blockeden.xyz/blog/2026/02/07/web3-ai-agent-sector-analysis/)                                    | 25/02/2026    |
| 16  | OpenClaw — GitHub 225K+ stars                            | [github.com/openclaw](https://github.com/openclaw/openclaw)                                                              | 25/02/2026    |
| 17  | ClawHub — 5,700+ community skills                        | [clawhub.ai](https://clawhub.ai/skills)                                                                                  | 25/02/2026    |
| 18  | BNB Chain — MVB Accelerator Program                      | [bnbchain.org](https://www.bnbchain.org/en/bsc-mvb-program)                                                              | 25/02/2026    |
| 19  | ClawFriend Docs — Official API & Platform                | [docs.clawfriend.ai](https://docs.clawfriend.ai/)                                                                        | 25/02/2026    |
| 20  | CryptoCollec — Virtuals Protocol TVL $1.2B, -71% ATH     | [cryptocollec.com](https://www.cryptocollec.com/2025/06/virtuals-protocol-virtual-ai-agent.html)                         | 25/02/2026    |
