---
layout: "studium-page-view-2021-10-05"
title: NBIS Carpentries content
---

<article class="nbis_carpentries" markdown="1">

> ## About this episode 
> The data that you collect, organise, prepare, and analyse to answer your research questions, and the documentation describing it are the lifeblood of your research. Put bluntly: without data, there is no research. It is therefore essential that you take adequate measures to protect your data against accidental loss and against unauthorised manipulation.
> 1. TOC
> {:toc}
> {: .toc}
{: .callout .toc}

## Maintain data integrity and authenticity
Processing and analysis of data inevitably result in a number of edits in the data file. However, it is necessary to preserve the authenticity of the original research information contained in the data throughout the whole data lifecycle.

There are many possible types of changes in the data:

- Data cleaning procedures may be implemented;
- Errors are often found and corrected;
- New variables may be constructed;
- New information may be added from external sources;
- File formats may be changed;
- New data may be included;
- The data file structure may be changed for the purpose of increasing operability, etc.

As a result of above-mentioned data management processes, several different versions of the data files are usually created. They are important, as they allow you to step back to versions before particular changes were made. Versions may be used simultaneously for different purposes or replace one another. When data files are being published to make them widely available, the treatment of errors, inclusion of new data and/or changes in a data file structure may result also in the publication of new editions of the same data file which may substantially differ in their content (e.g. when new country data are included into an international data file).

Version and edition management will help to:

- Clearly distinguish between individual versions and editions and keep track of their differences;
- Prevent unauthorised modification of files and loss of information, thereby preserving data authenticity.

> ### Discussion
> What do you do to maintain data integrity and authenticity in your projects and what else could you be doing?
>> ### Examples of practices
>> Some best practice rules (UK Data Service, 2017a; Krejčí, 2014) can be summarised as follows:
>> - Establish the terms and conditions of data use and make them known to team members and other users;
>> - Create a ‘master file’ and take measures to preserve its authenticity, i.e. place it in an adequate location and define access rights and responsibilities – who is authorised to make what kind of changes;
>> - Distinguish between versions shared by researchers and working versions of individuals;
>> - Decide how many versions of a file to keep, which versions to keep (e.g. major versions rather than minor versions (keep version 02-00 but not 02-01)), for how long and how to organise versions;
>> - Introduce clear and systematic naming of data file versions and editions;
>> - Record relationships between items where needed, for example between code and the data file it is run against, between data file and related documentation or metadata or between multiple files;
>> - Document which changes were made in any version;
>> - Keep original (raw) versions of data files, or keep documentation that allows the reconstruction of original files;
>> - Track the location of files if they are stored in a variety of locations;
>> - Regularly synchronise files in different locations, such as using MS SyncToy (2016).
> {: .solution}
{: .discussion}

> ## Exercise: Start a data dictionary
>
> The file [samples_metadata_lesson.csv](../files/samples_metadata_lesson.csv) contains information about a set of samples for a research project. In this exercise you will start writing a data dictionary for this file.
> 1. Open the `samples_metadata_lesson.csv` file in a spreadsheet program of you choice (Microsoft Excel, LibreOffice Calc, or Google Spreadsheet, or other).
> 2. Open another **empty** spreadsheet file, name it `data_dictionary`.
> 3. Add the following headings to the `data_dictionary` file:
> **Current variable name**, **ENA Variable name**, **Measurement unit**, **Allowed values**, **Definition**, **Description**
>
> 4. Copy the headings of the **FILE file** to the first column (Current variable name) of the `data_dictionary` file, _**one heading term per row**_.
>   * Now you should have a first row with the headings under step 3, and then one term (from the FILE file headings) per row in the first column.
> 5. Try adding definitions (to the Definition column) for some of the terms.
> 6. Are there any terms where you can specify information in the Measurement unit?
>
> > ## Solution
> >
> > The beginning of the data dictionary could now look something like this:
> >
> > | Current variable name | ENA Variable name | Measurement unit | Allowed values | Definition | Description |
> > |-|-|-|-|-|-|
> > | sample id |  |  |  |  |  |
> > | patient id |  |  |  |  |  |
> > | sex |  |  | male, female, unknown | Sex of the individual |  |
> > | date |  |  | format: YYYY-MM-DD, >=proj_start_date & <=today | Date of sampling |  |
> > | location |  |  |  |  |  |
> > | age |  | years |  | Age of individual at the time of sampling |  |
> > | health state |  |  |  | Health state of individual at time of sampling |  |
> > | symptoms |  |  | fever, sore throat, fatigue, loss of taste, not applicable | Symptoms experienced in connection with illness |  |
> > | disease outcome |  |  | healthy, dead | Final outcome of disease |  |
> > | tissue |  |  |  | Tissue sampled |  |
> >
> {: .solution}
{: .challenge}

~~~
str(samples)
~~~
{: .language-r}



~~~
spec_tbl_df [29 × 8] (S3: spec_tbl_df/tbl_df/tbl/data.frame)
 $ patient_id     : chr [1:29] "OAS-29_1" "OAS-29_10" "OAS-29_11" "OAS-29_12" ...
 $ collection_date: Date[1:29], format: "2020-03-31" "2020-03-31" ...
 $ country        : chr [1:29] "Italy" "Italy" "Italy" "Italy" ...
 $ region         : chr [1:29] "Turin" "Turin" "Turin" "Turin" ...
 $ age            : num [1:29] 48 35 59 60 83 21 44 55 81 63 ...
 $ disease_outcome: chr [1:29] "dead" NA "recovered" "recovered" ...
 $ sex            : chr [1:29] "female" "male" "male" "female" ...
 $ ct             : num [1:29] 41.5 15.3 25.3 27 25.3 ...
 - attr(*, "spec")=
  .. cols(
  ..   patient_id = col_character(),
  ..   collection_date = col_date(format = ""),
  ..   country = col_character(),
  ..   region = col_character(),
  ..   age = col_double(),
  ..   disease_outcome = col_character(),
  ..   sex = col_character(),
  ..   ct = col_double()
  .. )
 - attr(*, "problems")=<externalptr> 
~~~
{: .output}

</article>