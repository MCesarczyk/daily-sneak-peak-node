--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: children; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.children (id, name, surname, "group", created_at, updated_at) FROM stdin;
10	Harry	Potter	Cangaroos	2022-02-28 20:22:39.943143	2022-03-16 17:53:33.441997
9	Świnka	Pepa	Froggies	2022-02-28 20:20:08.045904	2022-03-16 17:53:46.391398
8	Henryk	Kowalski	Froggies	2022-02-28 20:18:59.112498	2022-03-16 17:53:54.022734
5	Jacek	Placek	Slothies	2022-02-28 18:38:48.306853	2022-03-16 17:54:04.836282
2	Małgosia	Nowak	Froggies	2022-02-28 18:35:27.073623	2022-03-16 17:54:18.366847
1	Jaś	Kowalski	Slothies	2022-02-28 18:35:27.066173	2022-03-16 17:54:28.090403
14	Janusz	Nosacz	Crocodiles	2022-03-07 19:08:57.842327	2022-03-27 22:23:59.13654
3	Grzegorz	Brzęczyszczykiewicz	Crocodiles	2022-02-28 18:35:27.079652	2022-03-27 22:24:35.086542
\.


--
-- Name: children_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.children_id_seq', 21, true);


--
-- PostgreSQL database dump complete
--

