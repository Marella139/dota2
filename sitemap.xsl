<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9">
<xsl:template match="/">
<html>
<body >
<table border="1" style="padding:5px; margin:0px auto;">
<tr style="background:blue;color:white;">
<th>URL</th>
<th>Last modified</th>
<th>Change frequency</th>
<th>Priority</th>
</tr>
<xsl:for-each select="sm:urlset/sm:url">
<tr style="color:black;">
<td><xsl:value-of select="sm:loc"/></td>
<td><xsl:value-of select="sm:lastmod"/></td>
<td><xsl:value-of select="sm:changefreq"/></td>
<td><xsl:value-of select="sm:priority"/></td>
</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>