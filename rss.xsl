<?xml version="1.0" encoding="utf-8"?>
<?xml-stylesheet type="text/css" ?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body >
<table border="1" style="padding:5px; margin:0px auto;">
<tr style="background:blue;color:white;">
<th>Title</th>
<th>Link</th>
<th>Description</th>
</tr>
<xsl:for-each select="rss/channel/item">
<tr style="color:black;">
<td><xsl:value-of select="title"/></td>
<td><xsl:value-of select="link"/></td>
<td><xsl:value-of select="description"/></td>
</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>