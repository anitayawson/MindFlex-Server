/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("blogs").del();
  await knex("blogs").insert([
    {
      id: 1,
      title: "Holiday Tips for Seasonal Depression",
      author: "Anna Beasley",
      author_image: "/blog_images/author1.jpg",
      content:
        "Seasonal depression, also known as seasonal affective disorder (SAD), is a subtype of depression that occurs at a specific time of year, usually during the winter months when daylight hours are shorter. The holiday season can exacerbate feelings of sadness, loneliness, and stress for those affected by SAD. Coping with seasonal depression during this time can be challenging, but there are strategies that can help. Engaging in regular physical activity, getting exposure to natural sunlight whenever possible, maintaining a healthy diet, and seeking support from friends, family, or a mental health professional are all effective ways to manage symptoms of seasonal depression during the holidays. Additionally, incorporating self-care practices such as practicing mindfulness, setting realistic expectations for oneself, and engaging in activities that bring joy and relaxation can also be beneficial. It's essential to prioritize self-care and seek professional help if needed to navigate through the challenges of seasonal depression during the holiday season. Remember, you are not alone, and there are resources and support available to help you through this difficult time",
      thumbnail_image: "/blog_images/holiday_tips.png",
    },
    {
      id: 2,
      title: "Disability, Mental Health and Ableism",
      author: "Lucas Scott",
      author_image: "/blog_images/author2.jpg",
      content:
        "Disability and mental health are intricately linked aspects of human experience that deserve greater recognition and understanding. Individuals living with disabilities often face unique challenges related to their mental health, including stigma, discrimination, and barriers to accessing appropriate care and support. Moreover, the concept of ableism, which refers to the systemic discrimination and prejudice against individuals with disabilities, can have a profound impact on their mental well-being. Understanding the intersectionality of disability and mental health is essential for promoting inclusivity and fostering supportive environments. It's crucial to recognize and address the harmful effects of ableism on mental health, as well as advocate for policies and practices that promote equality and accessibility for all individuals, regardless of their abilities. By raising awareness, challenging stereotypes, and fostering empathy and understanding, we can create a more inclusive society that values and supports the mental health and well-being of individuals with disabilities. Together, we can work towards breaking down barriers and creating a more equitable and supportive world for everyone.",
      thumbnail_image: "/blog_images/disability.png",
    },
    {
      id: 3,
      title: "The Dark Side of Positivity: Understanding Toxic Positivity",
      author: "Dani Whates",
      author_image: "/blog_images/author3.jpg",
      content:
        "The concept of positivity is often celebrated as a powerful force for well-being, but it's essential to recognize that not all forms of positivity are created equal. Toxic positivity refers to the excessive and unrealistic emphasis on maintaining a positive attitude at all costs, even in the face of genuine challenges and struggles. While well-intentioned, toxic positivity can have detrimental effects on mental health, as it invalidates authentic emotions and experiences, promotes avoidance of difficult feelings, and fosters a culture of denial and suppression. Understanding the dark side of positivity involves acknowledging the complexity of human emotions and embracing a more balanced and nuanced approach to emotional well-being. It's crucial to create spaces where individuals feel safe to express a range of emotions, including sadness, anger, and frustration, without fear of judgment or dismissal. By cultivating empathy, compassion, and authenticity, we can foster healthier and more supportive communities where individuals feel seen, heard, and valued for their whole selves.",
      thumbnail_image: "/blog_images/toxic_positivity.png",
    },
    {
      id: 4,
      title: "Bipolar Disorder Myths and Misconceptions",
      author: "Mia Johnson",
      author_image: "/blog_images/author4.jpg",
      content:
        "Bipolar disorder is a complex and often misunderstood mental health condition that affects millions of individuals worldwide. Despite its prevalence, there are numerous myths and misconceptions surrounding bipolar disorder that contribute to stigma and misunderstanding. One common misconception is that individuals with bipolar disorder simply experience frequent mood swings, when in reality, the condition involves distinct episodes of mania and depression that can significantly impact daily functioning. Another myth is that bipolar disorder is a choice or a character flaw, when in fact, it is a serious medical condition with biological and genetic components. Additionally, there's a misconception that individuals with bipolar disorder are unable to lead fulfilling lives or maintain stable relationships, which is not true with proper treatment and support. By dispelling these myths and increasing awareness about the true nature of bipolar disorder, we can reduce stigma and encourage empathy and understanding for those living with this condition. It's essential to recognize the complexity of bipolar disorder and support individuals in accessing appropriate treatment and resources to manage their symptoms effectively and lead fulfilling lives.",
      thumbnail_image: "/blog_images/bipolar.jpg",
    },
    {
      id: 5,
      title: "The Science Behind Antidepressants",
      author: "Ethan Anderson",
      author_image: "/blog_images/author5.jpg",
      content:
        "Antidepressants are a commonly prescribed class of medications used to treat depression and other mood disorders. Despite their widespread use, there are many misconceptions surrounding antidepressants that can contribute to stigma and misunderstanding. One common misconception is that antidepressants are a 'quick fix' or 'happy pill' that can instantly cure depression, when in reality, they work gradually to rebalance brain chemistry and alleviate symptoms over time. Additionally, there's a misconception that antidepressants are highly addictive or have severe side effects, when in fact, they are generally safe and well-tolerated when taken as prescribed under the supervision of a healthcare provider. While some individuals may experience side effects such as nausea or insomnia, these are often temporary and can be managed with adjustments to dosage or medication type. It's essential to recognize that antidepressants are just one tool in the treatment of depression and are most effective when combined with therapy, lifestyle changes, and other supportive interventions. By debunking myths and increasing understanding about antidepressants, we can help reduce stigma and encourage individuals to seek appropriate treatment and support for their mental health.",
      thumbnail_image: "/blog_images/antidepressants.jpg",
    },
    {
      id: 6,
      title: "The Healing Power of Art Therapy",
      author: "Harper Lee",
      author_image: "/blog_images/author6.jpg",
      content:
        "Art therapy is a dynamic and effective form of therapy that harnesses the power of creative expression to promote healing and well-being. Unlike traditional talk therapy, art therapy utilizes various art forms such as painting, drawing, sculpture, and collage to facilitate self-expression, exploration, and processing of emotions and experiences. Through the creative process, individuals can gain insight into their thoughts and feelings, develop coping skills, and explore solutions to challenges in a safe and supportive environment. The healing power of art therapy lies in its ability to transcend verbal language barriers and access deeper layers of the subconscious mind. By engaging in the creative process, individuals can externalize internal struggles, transform pain into beauty, and gain a sense of empowerment and agency over their experiences. Moreover, art therapy provides a non-judgmental space for individuals to explore and express complex emotions that may be difficult to articulate verbally. Research has shown that art therapy can be effective in treating a wide range of mental health issues, including depression, anxiety, trauma, and grief. It can also be beneficial for individuals seeking personal growth, self-discovery, and stress relief. Whether through painting, drawing, or sculpting, art therapy offers a powerful avenue for self-expression and healing, allowing individuals to tap into their innate creativity and resilience on their journey toward greater well-being.",
      thumbnail_image: "/blog_images/art_therapy.jpg",
    },
    {
      id: 7,
      title: "Empathy and Connection in Relationships",
      author: "Ava Mitchell",
      author_image: "/blog_images/author7.jpg",
      content:
        "Empathy and connection are foundational elements of healthy relationships that play a crucial role in promoting emotional well-being and interpersonal satisfaction. Empathy involves the ability to understand and share the feelings of others, while connection refers to the establishment of meaningful bonds and mutual understanding between individuals. In relationships, empathy and connection serve as essential building blocks for trust, communication, and intimacy. Practicing empathy involves actively listening to others, validating their experiences, and demonstrating compassion and understanding, even in challenging situations. By acknowledging and validating each other's emotions, individuals can foster a sense of safety and support within the relationship, leading to greater emotional intimacy and closeness. Connection in relationships goes beyond mere communication or physical proximity; it encompasses emotional resonance, mutual respect, and shared values and goals. Cultivating connection involves prioritizing quality time together, engaging in meaningful conversations, and showing appreciation and affection for one another. Research has shown that relationships characterized by high levels of empathy and connection are associated with greater emotional resilience, satisfaction, and overall well-being for both partners. By nurturing empathy and connection in our relationships, we can create stronger bonds, navigate challenges more effectively, and experience deeper levels of fulfillment and happiness together.",
      thumbnail_image: "/blog_images/empathy.jpg",
    },
    {
      id: 8,
      title: "Understanding Emotional Intelligence",
      author: "Nathan Wright",
      author_image: "/blog_images/author8.jpg",
      content:
        "Emotional intelligence (EI) is a fundamental aspect of mental health and well-being that encompasses the ability to recognize, understand, and manage one's own emotions, as well as effectively navigate social interactions and relationships. Unlike cognitive intelligence (IQ), which measures intellectual abilities, EI focuses on emotional awareness, empathy, and interpersonal skills. Understanding emotional intelligence involves recognizing the impact of emotions on thoughts, behaviors, and decision-making processes. Individuals with high EI are adept at identifying and managing their emotions in constructive ways, which enables them to cope with stress, adapt to change, and maintain healthy relationships. Emotional intelligence also involves recognizing and empathizing with the emotions of others, which fosters effective communication, conflict resolution, and collaboration in interpersonal interactions. By tuning into the emotions of others and responding with empathy and understanding, individuals can build stronger connections and create a supportive and harmonious social environment. Research has shown that emotional intelligence is a key predictor of success and well-being in various areas of life, including relationships, career, and mental health. By cultivating emotional intelligence through self-awareness, self-regulation, social awareness, and relationship management, individuals can enhance their overall quality of life and build more fulfilling and meaningful relationships with others.",
      thumbnail_image: "/blog_images/emotional_intel.jpg",
    },
  ]);
};
