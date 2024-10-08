import React, { useState, useEffect } from 'react';
import '../../App.css';

function HowItWorks() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    document.title = "How It Works | Team Communication Toolkit";

    fetch('https://5f9vk2anlb.execute-api.us-east-2.amazonaws.com/team-comm-tools-features/team-comm-tools').then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )

    window.scrollTo(0, 0)
  }, []);

  return (
    <div className='how-it-works-container'>
      <h1 className='how-it-works'>How It Works</h1>
      <p>
        Our toolkit is implemented completely in Python, with our code open-sourced via GitHub,
        and our documentation managed by ReadTheDocs (using Sphinx).
      </p>
      <br />
      <p>
        The typical user should not need to directly interact with the original source code,
        and should be able to directly download our package via pip. However, we welcome open-sourced
        contributions to the toolkit, particularly bug reports and suggestions for additional features to include.
        We believe these contributions will allow the toolkit to become a living resource for anyone interested
        in understanding and quantifying conversations.
      </p>
      <h1 className='how-it-works-headers'>Getting Started</h1>
      <p>
        Our tool is publicly available on <a href="https://pypi.org/project/team-comm-tools/">PyPI</a>, with a getting started guide available in
        our <a href="https://conversational-featurizer.readthedocs.io/en/latest/examples.html">documentation</a>.
      </p>
      <br />
      <p>
        To use our tool, please ensure that you have Python {'>'}= 3.10 installed and a working version of <a href="https://pypi.org/project/pip/">pip</a>,
        which is Python’s package installer. Then, in your local environment, run the following:
      </p>
      <br />
      <div className="code">
        pip install team_comm_tools
      </div>
      <br />
      <p>
        This command will automatically install our package and all required dependencies.
      </p>

      <h1 className='home-subheaders'>
        Troubleshooting
      </h1>
      <p> 
        In the event that some dependency installations fail (for example, you may get an error that <span className="mini-code">en_core_web_sm</span> from Spacy is not found,
        or that there is a missing NLTK resource),
        please run this simple one-line command in your terminal, which will force the installation of Spacy and NLTK dependencies:
      </p>
      <br />
      <div className="code">
        download_resources
      </div>
      <br />
      <p>
      If you encounter a further issue in which the ‘wordnet’ package from NLTK is not found, it may be related to a known bug in NLTK in which the wordnet package does not unzip automatically. 
      If this is the case, please follow the instructions to manually unzip it, documented in this <a href="https://github.com/nltk/nltk/issues/3028">thread</a>.
      </p>

      <h1 className='how-it-works-headers'>Technical Documentation: ReadTheDocs</h1>
      <p>
        We use ReadTheDocs to host the latest documentation for the toolkit: <a href="https://conversational-featurizer.readthedocs.io/">https://conversational-featurizer.readthedocs.io/</a>
      </p>
      <br />
      <p>
        Please explore the technical documentation to learn more about the following:
      </p>
      <div className='bullet-points'>
        <ul>
          <li>How to import and use the toolkit;</li>
          <li>Technical details for how conversational attributes are implemented;</li>
          <li>Conceptual details for how to understand and interpret the conversational attributes we measure.</li>
        </ul>
      </div>

      <div className='github'>
        <h1 className='how-it-works-headers'>Open-Sourced Code: GitHub</h1>
        <p>
          The implementation details of each feature are public on GitHub, at the following link: <a href="https://github.com/Watts-Lab/team-process-map">Github</a>.
        </p>
        <br />
        <p>
          We encourage anyone interested in developing a feature to either contact <a href="http://xinlanemilyhu.com">Xinlan Emily Hu</a> or to make a pull request.
        </p>
      </div>

      <h1 className='how-it-works-headers'>Features</h1>
      <div className='features'>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Description</th>
              <th>Columns</th>
              <th>File</th>
              <th>Level</th>
              <th>Semantic Grouping</th>
              <th>References</th>
              <th>Wiki Link</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data).map(([key, value]) => (
              <tr key={key}>
                <td className='feature-name'>{key}</td>
                <td className='desc'>{value.description}</td>
                <td className='norm' style={{ width: "200px" }}>{value.columns ? value.columns.join(', ') : 'N/A'}</td>
                <td className='norm' style={{ width: "200px" }}>{value.file}</td>
                <td className='norm'>{value.level}</td>
                <td className='norm'>{value.semantic_grouping}</td>
                <td className='desc'>{value.references}</td>
                <td className='norm'><a href={value.wiki_link} target="_blank" rel="noopener noreferrer">{value.wiki_link}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HowItWorks;
