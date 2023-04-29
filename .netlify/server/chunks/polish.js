import { c as create_ssr_component, v as validate_component } from './index3.js';
import { I as Image } from './Image.js';
const polishRhythm = '/_app/immutable/assets/polishRhythm-7364e448.webp';
const metadata = {
	title: 'When Should You Polish Your UI?',
	date: '2022-11-03',
	categories: ['tips']
};
const Polish = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<h2 id="${'polish-the-right-thing'}"><a href="${'#polish-the-right-thing'}">polish the right thing</a></h2>
<p>You need user feedback to really know where to spend most of your polish efforts. My artist father dropped this bomb of wisdom that’s stuck with me all these years:</p>
<blockquote><p>Don’t bother making changes that are just different but not better.</p></blockquote>
<p>It’s completely normal for people to get hung up on tiny things. Way more users thanked me for this little bit of polish than had complained before!</p>
<p>When you nail this - polishing the right things - it feels SO good and builds trust.</p>
<h2 id="${'dont-polish-too-early'}"><a href="${'#dont-polish-too-early'}">don’t polish too early</a></h2>
<p>Icon designer Kyle Adams applies this mindset of build it first, paint it later to choosing colors, noticing a big spike in his creativity and speed. Deliberately delaying polish helps you prototype and build your UI a lot faster and helps prevent wasted effort.</p>
<h2 id="${'dont-polish-too-late'}"><a href="${'#dont-polish-too-late'}">don’t polish too late</a></h2>
<p>That said, if you wait too long and polish too late in the game you’ll mess up your chance at making a great impression. Delaying all polish until after you get your product out the door hurts your users’ trust in your ability to create great things for them. Don’t ship ugly and broken products, ever. You can shout “but… Agile!” to the backs of all your departing users all you want. Even if some of them stick around, the damage will be done - they’ll always remember your first steaming pile of an attempt! New products and new features always need some level of polish before they ship.</p>
<h2 id="${'just-right'}"><a href="${'#just-right'}">just right</a></h2>
<p>When building a UI start with the broad strokes: define the user’s problem you’re wanting to solve. Prototype a bunch of possible solutions quickly and freely. Don’t get distracted by details, edge cases, colors, integrations. Once you decide on the best solution - hopefully with input from talking to actual users - then polish it up and ship it. But don’t move on to other tasks just yet! Get feedback from your users that same day. Quickly find the patterns in the feedback. You now have a unique opportunity to show your users how much they mean to you. Polish what you just shipped ASAP. Destroy the pains &amp; frictions that surfaced from users trying out what you just created. Double down on the things that they loved. Don’t put it on the backlog for a few months. This is the best time to do it: it’s fresh on everyone’s mind. Do it now and cut a new polish release within a day or two. Your users’ minds will be blown that you’re not only listening to what matters to them, but are also apparently able to execute at lightning speed.</p>
<p>Applying polish at the right times makes it easy for users to care about what you’re working on next.</p>
<p>Work quickly by delaying polish while you prototype &amp; build. Inspire trust and excitement by polishing just before and especially right after you ship.</p>
<h2 id="${'constant-polish'}"><a href="${'#constant-polish'}">constant polish</a></h2>
${validate_component(Image, 'Image').$$render(
	$$result,
	{ src: polishRhythm, alt: 'polishRhythm' },
	{},
	{}
)}
<p>One last note on polish: it isn’t a one-time deal. I worked at a place once that did a company-wide polish effort for several weeks. It was definitely an interesting experiment, and a lot of features were improved. But after that event things went back to normal, and polish simply wasn’t a priority. Just a few months later and it was as if that experiment had never happened.</p>
<p>Polish needs to be a regular part of the team’s rhythm. Imagine if every cycle/iteration/sprint/whatever looked like this:</p>
<ul><li>Choose which problem to tackle</li>
<li>Prototype a bit and chat with users until the best solution is discovered</li>
<li>Build it quickly</li>
<li>Polish it up</li>
<li>Ship it</li>
<li>Get user feedback and polish the crap out of it</li>
<li>Constant polish on the right things - only at the right times - is key for quickly building fantastic software that your people will love.</li></ul>`;
});
export { Polish as default, metadata };
